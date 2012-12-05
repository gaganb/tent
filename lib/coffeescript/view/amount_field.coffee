#
# Copyright PrimeRevenue, Inc. 2012
# All rights reserved.
#

###*
* @class Tent.AmountField
* @extends Tent.TextField
* 
* ##Usage
*
*       {{view Tent.AmountField valueBinding="" 
          label="" 
          currency="" 
          required=false
          readOnly=false
          disabled=false 
          textDisplayBinding=false
          tooltip=""
        }}
###

require '../mixin/field_support'
require '../mixin/currency_support'
require '../template/text_field'

Tent.AmountField = Tent.TextField.extend Tent.CurrencySupport, 
  hasPrefix: true
  hasHelpBlock: false
  placeholder: accounting.settings.number.pattern
  validAmountExp: /^(\-|\+)?(\d+\,?\d+)*\.?\d+$/

  prefix: (->
    @get('currency')
  ).property('currency')

  # helpBlock: (->
  #   @getFormatPattern()
  # ).property()

  # getFormatPattern: ->
  #   '(' + (@get('formatPattern') or accounting.settings.number.pattern) + ')'
  
  validate: -> 
    didOtherValidationPass = @_super()
    formattedValue = @get('formattedValue')
    isValidNumber = @get('validAmountExp').test(formattedValue)
    isValidAmount = @isValidAmount(@get('formattedValue'))
    isValidCurrency = @get('isValidCurrency')
    if didOtherValidationPass
      @addValidationError(Tent.messages.NUMERIC_ERROR) unless isValidNumber    
    @addValidationError(Tent.messages.AMOUNT_ERROR) unless isValidAmount
    @addValidationError(Tent.messages.CURRENCY_ERROR) unless isValidCurrency   
    (isValidCurrency and isValidAmount and isValidNumber and didOtherValidationPass)

  isValidAmount: (value)->
    if (value<0)
      false
    else
      true

  #Format for display
  format: (value)->
    # Convert from a number to a string
    return Tent.Formatting.amount.format(value, @get('centesimalValue'))

  # Format for binding
  unFormat: (value)->
    return Tent.Formatting.amount.unformat(value)

  #removes the formatting so user does not see commas while entering the amount 
  focusIn: ->
    if @get('isValid')
      @set('formattedValue', @unFormat(@get('formattedValue')))

  #formats the value when the input field is out of focus
  focusOut: ->
    if @get('isValid')
      @set('formattedValue', @format(@get('formattedValue')))

  inputSizeClass: (->
    return Tent.AmountField.SIZE_CLASSES[@estimateSpan() - 1]
  ).property()

Tent.AmountField.SIZE_CLASSES = [
  'input-mini',
  'input-mini',
  'input-mini',
  'input-small',
  'input-medium',
  'input-large',
  'input-xlarge',
  'input-xlarge',
  'input-xlarge',
  'input-xxlarge',
  'input-xxlarge',
  'input-xxlarge',
]
