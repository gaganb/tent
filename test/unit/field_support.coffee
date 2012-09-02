#
# Copyright PrimeRevenue, Inc. 2012
# All rights reserved.
#

view = null
appendView = -> (Ember.run -> view.appendTo('#qunit-fixture'))

#
# This module specifically tests UI Widgets part of the tent library.
#
module "Tent.FieldSupport mixin tests", ->
    @TemplateTests = Ember.Namespace.create()
    @TemplateTests.MockField = Ember.View.extend Tent.FieldSupport
  , ->
    if view
      Ember.run -> view.destroy()
      view = null
    @TemplateTests = undefined

test 'Mandatory fields identified and enforced', ->
  view = Ember.View.create
    template: Ember.Handlebars.compile '{{view TemplateTests.MockField valueBinding="name" labelBinding="label" isMandatory="true"}}'
    name: 'foobar'
    label: 'FooBar'

  appendView()
 
  ok view.$('.control-group').hasClass('mandatory'), 'mandatory class gets applied'
  ok !view.$('.control-group').hasClass('error'), 'mandatory validation did not kick-in when field has value'

  Ember.run -> view.set('name', '')
  ok view.$('.control-group').hasClass('error'), 'mandatory validation is enforced'


test 'Non-Mandatory fields should not be visually identified', ->
  view = Ember.View.create
    template: Ember.Handlebars.compile '{{view TemplateTests.MockField valueBinding="name" labelBinding="label" isMandatory="false"}}'
    name: 'foobar'
    label: 'FooBar'

  appendView()

  ok !view.$('.control-group').hasClass('mandatory'), 'mandatory class was not applied'

