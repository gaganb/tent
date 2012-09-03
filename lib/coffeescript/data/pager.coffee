
Tent.Data.Pager = Ember.Mixin.create
	paged: false
	pageSize: 10
	_page: 0
	_totalRows: 27

	init: ->
		@_super()
		@REQUEST_TYPE.PAGE = 'paging'

	contentShouldChange: (->
		#page = @get('currentPage')
		#size = @get('pageSize')
		#@set('content', @get('data')?.slice(((page - 1) * size), (page * size)) || [])	
		@set('content', @get('data'))
	).observes('data', 'pageSize')

	currentPage: ((key, value) ->
		if arguments.length == 1
			if @isValidPage(@get('_page')) then @get('_page') else 0
		else
			@set('_page', value) unless !@isValidPage(value)
			@get('_page')
	).property('data')

	isValidPage: (page) ->
		#page >= 1 && page <= @get('totalPages')
		return true #server side paging only => will fail until new data arrives

	totalPages: (->
		@get('_totalPages') || (Math.max(1, Math.ceil(@get('totalRows') / @get('pageSize')))) || 1
	).property('_totalPages','totalRows', 'pageSize')

	totalRows: (->
		@get('_totalRows') || @get('_totalPages') * @get('pagesize') || 1
	).property('_totalRows', '_totalPages', 'pageSize')

	goToPage: (page) ->
		@set('currentPage', page)
		@update(@REQUEST_TYPE.PAGE)

	nextPage: ->
		newPage = @get('currentPage') + 1
		@set('currentPage', newPage) unless !@isValidPage(newPage)
		@update(@REQUEST_TYPE.PAGE)
  
	prevPage: ->
		newPage = @get('currentPage') - 1
		@set('currentPage', newPage) unless !@isValidPage(newPage)
		@update(@REQUEST_TYPE.PAGE)


	getPagingInfo: ->
			pageSize: @get('pageSize')
			pageNum: @get('currentPage')
			totalPages: @get('totalPages')

	updatePagingInfo: (info) ->
		@set('_totalRows', info.totalRows)
		@set('_page', info.pageNum)
