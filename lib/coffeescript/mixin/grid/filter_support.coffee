Tent.Grid.FilterSupport = Ember.Mixin.create

	filtering: false

	addFilterPanel: ->
		if @get('filtering')
			widget = @
			button = """
					<div class="btn-group jqgrid-title-button filter">
						<a class="open-dropdown">
							#{Tent.I18n.loc 'more'}
							<span class="caret"></span>
						</a>
						 
						<ul class="dropdown-menu filter-panel">
							<li></li>
						</ul>
					 
					</div>
			"""

			@$(".ui-jqgrid-titlebar").append(button)

			filterSelection = @getFilterSelection().detach()
			@$(".ui-jqgrid-titlebar").append(filterSelection)
			
			filterDetails = @getFilterDetails().detach()
			@$(".jqgrid-title-button .filter-panel li").append(filterDetails)

			@$(".jqgrid-title-button.filter .open-dropdown").click(->
				widget.toggleFilterPanel()
			)

			@$(".jqgrid-title-button.filter .filter-panel .close-panel .btn").click(->
				widget.closeFilterPanel()
			)


	toggleFilterPanel: ->
		dropDown = @$(".jqgrid-title-button.filter .dropdown-menu")
		dropDown.css('display', if dropDown.css('display')=='none' then 'block' else 'none')

	closeFilterPanel: ->
		@$(".jqgrid-title-button.filter .dropdown-menu").css('display', 'none')

	openFilterPanel: ->
		@$(".jqgrid-title-button.filter .dropdown-menu").css('display', 'block')

	getFilterSelection: ->
		@$('.filter-selection')

	getFilterDetails: ->
		@$('.filter-details')


 