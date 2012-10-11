require '../template/jqgrid'

###*
* @class Tent.JqGrid
* @extends Ember.View
*
* Create a jqGrid view which displays the data provided by a Collection object
* The grid will bind to the following properties of the collection:
* 	
* - columnsDescriptor: an array of descriptor objects defining the columns to be displayed
* 			e.g. [
				{id: "id", name: "id", title: "_hID", field: "id", sortable: true, hideable: false},
				{id: "title", name: "title", title: "_hTitle", field: "title", sortable: true},
				{id: "amount", name: "amount", title: "_hAmount", field: "amount", sortable: true, formatter: "amount",  align: 'right'},
			]
* - totalRows: the total number of rows in the entire result set (including pages not visible)
* - totalPages: The total number of pages of data available
*
* The collection should also provide the following methods:
*
* - sort(sortdata): Sort the collection according to the sortdata provided
* 			e.g. 
				{fields: [
							sortAsc: true
							field: 'title'
					]
				}
*				
* - goToPage(pageNumber): Navigate to the pagenumber provided (1 = first page)
*
* ##Usage
*		{{view Tent.JqGrid
                  label="Tasks"
                  collectionBinding="Pad.tasksCollection"
                  selectionBinding="Pad.selectedTasks"
                  paged=true
                  pageSize=6           
                  multiSelect=true             
              }}
*
*
###

Tent.JqGrid = Ember.View.extend
	templateName: 'jqgrid'
	classNames: ['tent-jqgrid']
	
	###*
	* @property {Object} collection The collection object providing the API to the data source
	###
	collection: null

	###*
	* @property {String} title The title caption to appear above the table
	###
	title: null

	###*
	* @property {Boolean} paged Boolean to indicate the data should be presented as a paged list
	###
	paged: true

	###*
	* @property {Number} pageSize The number of items in each page
	###
	pageSize: 12

	###*
	* @property {Boolean} multiSelect Boolean indicating that the list is a multi-select list
	###
	multiSelect: false

	###*
	* @property {Boolean} showColumnChooser Display an button at the bottom of the grid which presents
	* a dialog to show/hide columns. Any columns which have a property **'hideable:false'** will not be shown
	* in this dialog
	###
	showColumnChooser: true

	pagingData: 
		page: 1 
	sortingData: {}
	selectedIds: []
	contentBinding: 'collection'

	###*
	* @property {Array} columnsBinding The array of column descriptors used to represent the data. 
	* By default this will be retrieved from the collection
	###
	columnsBinding: 'collection.columnsDescriptor'
	totalRowsBinding: 'collection.totalRows'
	totalPagesBinding: 'collection.totalPages'

	init: ->
		@_super()
		if not @get('collection')?
			throw new Error("Collection must be provided for Tent.JqGrid")

		if @get('paged')
			@get('collection').set('pageSize', @get('pageSize'))

		@setupInitialSelection()

	setupInitialSelection: ->
		if @get('selection')?
			@set('selectedIds', @get('selection').map((item, index)->
				 	"" + item.get('id')
				).uniq()
			)
	didInsertElement: ->
		@setupDomIDs()
		@buildGrid()
		@get('collection').goToPage(1)

	setupDomIDs: ->
		@set('tableId', @get('elementId') + '_jqgrid')
		@$('.grid-table').attr('id', @get('tableId'))
		@$('.gridpager').attr('id', @get('elementId') + '_pager')

	getTableDom: ->
		@$('#' + @get('tableId'))

	getPagerId: ->
		'#' + @get('elementId') + '_pager'

	buildGrid: ->
		widget = @
		@getTableDom().jqGrid({
			datatype: (postdata) ->
				widget.onPageOrSort(postdata)
			height: 'auto',
			colNames: @get('colNames'),
			colModel: @get('colModel'),
			multiselect: @get('multiSelect'),
			caption: Tent.I18n.loc(@get('title')) if @get('title')?, 
			autowidth: true,
			sortable: true, #columns can be dragged
			forceFit: true, #column widths adapt when one is resized
			viewrecords: true, # 'view 1 - 6 of 27'
			rowNum: @get('pageSize') if @get('paged'),
			gridview: true,
			#cellEdit: true,
			#cellsubmit: 'clientArray',
			editurl: 'clientArray',
			#scroll: true,
			pager: @getPagerId() if @get('paged'),
			onSelectRow: (itemId, status, e) ->
				widget.didSelectRow(itemId, status, e)
			,
			onSelectAll: (rowIds, status) ->
				widget.didSelectAll(rowIds, status)
			,
			loadComplete: () ->
				widget.highlightRows(@)
			,
			afterEditCell: (id,name,val,iRow,iCol) ->
				console.log 'after cell edit'
			,
			afterSaveCell: (rowId, cellName, value, iRow, iCell) ->
				if rowId != ""
					widget.saveEditedCell(rowId, cellName, value, iRow, iCell)
		})

		@addNavigationBar()

	onPageOrSort: (postdata)->
		#	postdata is of the form:
		#       _search: false,	nd: 1349351912240, page: 1, rows: 12, sidx: "", sord: "asc"
		if @shouldSort(postdata)
			@get('collection').sort(
				fields: [
					sortAsc: postdata.sord=="asc"
					field: postdata.sidx
				])
		else 
			@get('pagingData').page = postdata.page
			@get('collection').goToPage(postdata.page)

		@get('sortingData').field = postdata.sidx
		@get('sortingData').asc = postdata.sord

	shouldSort: (postdata)->
		postdata.sidx!="" and (postdata.sidx != @get('sortingData').field or postdata.sord != @get('sortingData').asc)

	highlightRows: (grid)->
		for item in @get('selectedIds')
			$(grid).jqGrid('setSelection', item, false)
			$(grid).jqGrid('editRow', item, true)

		if @allRowsAreSelected(grid)
			grid.setHeadCheckBox(true)
		else
			grid.setHeadCheckBox(false)

	showEditableCells: ->
		###colModel = this.getTableDom().getGridParam('colModel')
		ids = @getTableDom().getDataIDs()
		for id, iRow in ids
			rowData = @getTableDom().getRowData(id)
			for col, iCol in colModel
				if col.editable 
					@getTableDom().jqGrid("editCell",iRow, iCol, true)
		###


		#@getTableDom().jqGrid('editRow', itemId, true)


	# Called by a cell widget on blur or change
	saveEditableCell: (element)->
		rowId = $(element).parents('tr:first').attr('id')
		#formatter = $(element).attr('data-formatter')
		#value =  $.fn.fmatter[formatter].unformat(null, {}, $(element).parent())

		colModel = this.getTableDom().getGridParam('colModel')
		cellpos = $(element).parents('tr').children().index($(element).parents('td'))

		cellName = colModel[cellpos].name
		formatter = @getTableDom().getColProp(cellName).formatter

		$.fn.fmatter[formatter].formatCell(null, {}, $(element).parents('td')) if $.fn.fmatter[formatter].formatCell?
		 
		@saveEditedCell(rowId, cellName, null, null, null, $(element).parent())

	allRowsAreSelected: (grid) ->
		# Check for state of selectAll checkbox
		selectedIds = @get('selectedIds')
		allSelected = true
		for id in $(grid).jqGrid('getDataIDs')
			if !selectedIds.contains(id)
				allSelected = false
		allSelected

	didSelectRow: (itemId, status, e)->
		if !@get('multiSelect')
			@get('selectedIds').clear()
			@get('selection').clear()
			@get('selectedIds').pushObject(itemId)
			@get('selection').pushObject(@getItemFromModel(itemId))
		else 
			if status #status indicates whether the row is being selected or unselected
				@get('selectedIds').pushObject(itemId)
				@get('selection').pushObject(@getItemFromModel(itemId))
			else 
				@get('selectedIds').removeObject(itemId)
				@removeItemFromSelection(itemId)

		@handleEditableRows(itemId, status, e)		
				
	removeItemFromSelection: (id)->
		@set('selection', @get('selection').filter((item, index)->
				item.get('id') != parseInt(id)
			)
		)

	handleEditableRows: (itemId, status, e) ->
		widget = @
		if not @get('multiSelect')
			if itemId != @get('lastSelectedRowId')
				@getTableDom().jqGrid('restoreRow', @get('lastSelectedRowId'))
				@getTableDom().jqGrid('editRow', itemId, true)
				@set('lastSelectedRowId', itemId)
		else
			if @get('selectedIds').contains(itemId) 
				@getTableDom().jqGrid('editRow', itemId, {
					keys: false
					aftersavefunc: (rowId, status, options) ->
						widget.saveEditedRow(rowId, status, options)
						#widget.getTableDom().jqGrid('editRow', rowId, {
						#	keys:true
						#})
				})
			else
				@getTableDom().jqGrid('restoreRow', itemId)
				widget.saveEditedRow(itemId)

		# Editable cells should become non-editable
		# onDisable() method should be called
		#    or clearOnDisable() method ??
		#rowData = @getTableDom().getRowData(rowId)
		#colModel = this.getTableDom().getGridParam('colModel')
		#for col in colModel
		#	if col.editable 

				#@saveEditedCell(rowId, col.name, rowData[col.name])


	didSelectAll: (rowIds, status) ->
		for id in rowIds
			if status
				if !@get('selectedIds').contains(id)
					@get('selectedIds').pushObject(id)
					modelItem = @getItemFromModel(id)
					@get('selection').pushObject(modelItem)
					@getTableDom().jqGrid('editRow', id, true)
			else 
				@get('selectedIds').removeObject(id)
				@removeItemFromSelection(id)
				@getTableDom().jqGrid('restoreRow', id)

	getItemFromModel: (id)->
		for model in @get('content').toArray()
			return model if model.get('id') == parseInt(id)

	saveEditedRow: (rowId, status, options)->
		rowData = @getTableDom().getRowData(rowId)
		colModel = this.getTableDom().getGridParam('colModel')
		for col in colModel
			if col.editable 
				@saveEditedCell(rowId, col.name, rowData[col.name])

	saveEditedCell: (rowId, cellName, value, iRow, iCell, cell) ->
		# Need to unformat/validate the value before saving 
		formatter = @getTableDom().getColProp(cellName).formatter
		#if formatter?
		if $.fn.fmatter[formatter]?
			if cell?
				@getItemFromModel(rowId).set(cellName, $.fn.fmatter[formatter].unformat(null, {}, cell))
			else
				@getItemFromModel(rowId).set(cellName, $.fn.fmatter[formatter].unformat(value))
		else 
			@getItemFromModel(rowId).set(cellName, value)

	addNavigationBar: ->
		tableDom = @getTableDom()
		tableDom.jqGrid('navGrid', @getPagerId(), {add:false,edit:false,del:false,search:false,refresh:false})

		if @get('showColumnChooser')
			# Ensure that the caption header is displayed
			if not @get('title')?
				tableDom.setCaption('&nbsp;')

			@$(".ui-jqgrid-titlebar").append('<a class="column-chooser"><span class="ui-icon ui-icon-newwin"></span>' + Tent.I18n.loc("jqGrid.hideShowCaption") + '</a>')
			@$('a.column-chooser').click(() ->
					tableDom.jqGrid('setColumns',{
						caption: Tent.I18n.loc("jqGrid.hideShowTitle"),
						bCancel: Tent.I18n.loc("_close"),
						ShrinkToFit: true,
						recreateForm: true,
						updateAfterCheck: true,
						colnameview: false,
						top: 60,
						width: 300
					})
			)

	# Adapter to get column names from current datastore columndescriptor version  
	colNames: (->
		names = []
		for column in @get('columns')
			names.pushObject(Tent.I18n.loc(column.title))
		names
	).property('columns')

	# Adapter to get column descriptors from current datastore columndescriptor version 
	colModel: (->
		columns = []
		for column in @get('columns')
			item = 
				name: column.name
				index: column.name
				align: column.align
				editable: column.editable
				formatter: column.formatter
				edittype: Tent.JqGrid.editTypes[column.formatter] or 'text'
				editoptions: Tent.JqGrid.editOptions[column.formatter] or column.editoptions
				editrules: Tent.JqGrid.editRules[column.formatter] or {}
				width: 50
				position: "right"
				hidedlg: true if column.hideable == false
			columns.pushObject(item)
		columns
	).property('columns')
 
	# Adapter to get grid data from current datastore in a format compatible with jqGrid 
	gridData: (->
		models = @get('content').toArray()
		grid = []
		for model in models
			item = {"id" : model.get('id')}
			if @get('selectedIds').contains(model.get('id'))
				item.sel = true
			cell = []
			for column in @get('colModel')
				#item[column.name] = model.get(column.name)
				cell.push(model.get(column.name))
			item.cell = cell
			grid.push(item)
		return grid
	).property('content')

	gridDataDidChange: (->
		# remove existing grid data
		@getTableDom().jqGrid('clearGridData')
		data = 
			rows: @get('gridData')
			total: @get('totalPages')
			records: @get('totalRows')
			page: @get('pagingData').page
		@getTableDom()[0].addJSONData(data)
		@highlightRows(@getTableDom().get(0))
		#@showEditableCells()
	).observes('content', 'content.isLoaded', 'content.@each')

 


		