view = null
appendView = -> (Ember.run -> view.appendTo('#qunit-fixture'))

setup = ->

teardown = ->

module 'Tent.DateField', setup, teardown

test 'Test format and unFormat', ->
  view = Tent.DateField.create()
  equal view.get('options').dateFormat, 'mm/dd/yy', 'Date format option was set'
  equal view.format(new Date()), '01/01/1970', 'Format a date'
  deepEqual view.unFormat('01/01/1970'), new Date(), 'UnFormat a date'
  
  view.set('dateFormat','yy/dd/mm')
  equal view.format(new Date()), '1970/01/01', 'Format a date, force the format'
  deepEqual view.unFormat('1970/01/01'), new Date(), 'UnFormat a date, force the format'


test 'Test Validate', ->
	view = Tent.DateField.create()
	view.set('formattedValue', '12/04/2005')
	ok view.validate(), 'Valid date string'

	view.set('formattedValue', '12/44/20045')
	ok !view.validate(), 'Invalid date string'

	view.set('formattedValue', '')
	ok view.validate(), 'Empty string is valid'

test 'required behaviour', ->
  view = Ember.View.create
    template: Ember.Handlebars.compile '{{view Tent.DateField required=true}}'
  appendView()
  
  ok view.$('span.tent-required').length, 1, 'required icon displayed' 

test 'Ensure tooltip gets displayed', ->
  view = Ember.View.create
    template: Ember.Handlebars.compile '{{view Tent.DateField 
                          tooltip="tooltip here.."
                          }}'
  appendView()

  ok view.$('a[rel=tooltip]')?, 'Tooltip anchor exists'
  equal view.$('a[rel=tooltip]').attr('data-original-title'), "tooltip here..", 'Tooltip text'
  ok typeof view.$("a[rel=tooltip]").tooltip, "function", 'tooltip plugin has been applied'

test 'Test for readonly attribute', ->
  view = Ember.View.create
    template: Ember.Handlebars.compile '{{view Tent.DateField readOnly=true}}'
  appendView()

  equal view.$('input').attr('readonly'), 'readonly', 'readonly attribute detected'
  equal view.$('input').attr('aria-readonly'), 'true', 'aria-readonly attribute detected'

test 'Test for disabled', ->
  view = Ember.View.create
    template: Ember.Handlebars.compile '{{view Tent.DateField disabled=true}}'
  appendView()

  equal view.$('input').attr('disabled'), 'disabled', 'disabled attribute detected'
  equal view.$('input').attr('aria-disabled'), 'true', 'aria-disabled attribute detected'
  
test 'Ensure aria attributes are applied ', ->
  view = Ember.View.create
    template: Ember.Handlebars.compile '{{view Tent.DateField required=true  hasErrors=true hasHelpBlock=true}}'
  appendView()
  equal view.$('input[required=required]').length, 1, 'required html5 attribute'
  equal view.$('input[aria-required=true]').length, 1, 'Aria-required'

  viewId = view.$('input').parents('.tent-date-field:first').attr('id')
  equal view.$('input[aria-describedby]').length, 1, 'described-by'
  equal view.$('input').attr('aria-describedby'), viewId+"_error " + viewId + "_help", 'described by value'
  equal $("#" + viewId+"_error").length, 1, 'error field id exists for'
  equal $("#" + viewId+"_help").length, 1, 'help field id exists for'