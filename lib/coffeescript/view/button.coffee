#
# Copyright PrimeRevenue, Inc. 2012
# All rights reserved.
#

###*
* @class Tent.Button
*
* ##Usage
* 
*

###

require '../template/button'

Tent.Button = Ember.View.extend Ember.TargetActionSupport,
  
  templateName: 'button'
  label: 'Button'
  type: null
  isDisabled: false
  action: null
  classNames: ['tent-button']
  classNameBindings:['type', 'hasOptions:tent-button-group button-group']
  optionLabelPath: 'label'
  optionTargetPath: 'target'
  optionActionPath: 'action'

  init: ->
    @_super()
    @set('_options', Ember.ArrayProxy.create({content:  @get('optionList')}) || [] )

  targetObject: (->
    target = @get('target')
    if Ember.typeOf(target) is "string"
      #value = Em.get(@get('context'), target)
      value = Em.get(this, target)
      value = Em.get(window, target) if value is `undefined`
      target = value
    target || @get('context.target') || @get('content') || @get('context') 
  ).property('target', 'content', 'context')

  triggerAction: ->
    if !@isDisabled 
      if !@get('hasOptions')
        @_super() 
      else 
        return @.$().toggleClass('open')

  classes: (->
    classes = (if (type = @get("type")) isnt null and @BUTTON_CLASSES.indexOf(type.toLowerCase()) isnt -1 then "btn btn-" + type.toLowerCase() else "btn")
    classes = classes.concat(" dropdown-toggle") if @get("hasOptions")
    classes = classes.concat(" disabled") if @get("isDisabled")
    classes = classes.concat(" " + @get('buttonClass')) if @get('buttonClass')? 
    return classes
  ).property('type','hasOptions')   

  hasOptions: (->
    options = @get "optionList"
    options isnt `undefined` and options.get('length') isnt 0
  ).property('_options')

  BUTTON_CLASSES: [
    'primary',
    'info', 
    'success',
    'warning',
    'danger',
    'inverse'
    ]

  optionList: (->
    options = (options = @get('options'))
    options = content.get('options') if options == `undefined` and (content = @get('content')) isnt `undefined`
    options
  ).property('options','content').volatile()
  

Tent.ButtonOptions = Ember.View.extend Ember.TargetActionSupport,
  template: Ember.Handlebars.compile '<a href="#">{{view.label}}</a>'
  
  optionLabelBinding: 'parentView.parentView.optionLabelPath'
  optionTargetBinding: 'parentView.parentView.optionTargetPath'
  optionActionBinding: 'parentView.parentView.optionActionPath'

  click: ->
    button = @get('parentView.parentView')
    button.$().toggleClass('open')
    @triggerAction()
    
  label: (->
    content = @get('content')
    content.get(@get('optionLabel')) || content.get(@get('optionAction')).camelToWords()
  ).property('content')

  target: (->
    content = @get('content')
    content.get(@get('optionTarget')) || @get("parentView.parentView.context.target") || @get("parentView.parentView.content") || @get("parentView.parentView.context")
  ).property('content')

  action: (->
    content = @get('content')
    content.get(@get('optionAction'))
  ).property('content')


