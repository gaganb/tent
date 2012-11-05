#
# Copyright PrimeRevenue, Inc. 2012
# All rights reserved.
#

view = null
appendView = -> (Ember.run -> view.appendTo('#qunit-fixture'))

#
# This module specifically tests UI Widgets part of the tent library.
#
module "Tent.ModalPane", ->
    @TemplateTests = Ember.Namespace.create()
  , ->
    if view
      Ember.run -> view.destroy() 
      view = null
    @TemplateTests = undefined

test 'Ensure ModalPane renders ', ->
  view = Ember.View.create
    template: Ember.Handlebars.compile '{{view Tent.ModalPane textBinding="text" headerBinding="header" 
    primaryLabelBinding="primary" secondaryLabelBinding="secondary"}}'
    text: 'Do you want to perform this action!!!'
    header: 'My Heading'
    primary: 'OK'
    secondary: 'Cancel'

  appendView()

  ok view.$('div')?, 'modal div gets rendered'
  ok view.$('div').hasClass('modal-header'), 'modal-header class gets applied'
  ok view.$('div').hasClass('modal-body'), 'modal-body class gets applied'  
  ok view.$('div').hasClass('modal-footer'), 'modal-footer class gets applied'  

  ok view.$("div.modal-header:contains('"+view.get('header')+"')").length > 0 , 'header rendered' 
  equal view.$('.modal-body').text().trim(), view.get('text'), 'body is rendered' 

  ok view.$(".modal-footer .btn-primary").length > 0, 'footer rendered primary'
  ok view.$(".modal-footer .btn-secondary").length > 0, 'footer rendered primary'

test 'Primary and secondary types', ->
  view = Ember.View.create
    template: Ember.Handlebars.compile '{{view Tent.ModalPane textBinding="text" headerBinding="header" 
      primaryLabelBinding="primary" 
      secondaryLabelBinding="secondary"
      primaryType="success"
      secondaryType="warning"
    }}'
    text: 'Do you want to perform this action!!!'
    header: 'My Heading'
    primary: 'OK'
    secondary: 'Cancel'

  appendView()

  equal view.$('.btn-success').length, 1, 'success button rendered'
  equal view.$('.btn-warning').length, 1, 'warning button rendered'
  equal view.$('.btn-primary').length, 0, 'primary button not rendered'
  equal view.$('.btn-secondary').length, 0, 'secondary button not rendered'

test 'Ensure close button defaults to secondary action', ->
  view = Ember.View.create
    template: Ember.Handlebars.compile '{{view Tent.ModalPane textBinding="text" headerBinding="header" 
    primaryLabelBinding="primary" secondaryLabelBinding="secondary" secondaryAction="saction"}}'
    text: 'Do you want to perform this action!!!'
    header: 'My Heading'
    primary: 'OK'
    secondary: 'Cancel'

  appendView()
  modalView = Ember.View.views[view.$('.modal').parent('.tent-widget').attr('id')]
  equal modalView.get('closeAction'), "saction", "Action has been transferred."
   

test 'Ensure cancel action is triggered on hide', ->
  didHide = false
  view = Ember.View.create
    template: Ember.Handlebars.compile '{{view Tent.ModalPane secondaryLabelBinding="secondary" secondaryAction="hide" secondaryTargetBinding="view"}}'
    text: 'Do you want to perform this action!!!'
    header: 'My Heading'
    primary: 'OK'
    secondary: 'Cancel'
    hide: ->
      didHide = true

  appendView()
  view.$(".modal").trigger('hidden')
  
  ok didHide, 'hide action was called'
