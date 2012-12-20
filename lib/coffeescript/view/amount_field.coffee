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
    if @get('currency') then Tent.I18n.loc(this.get('currency')) else '...'
  ).property('currency')
 
  validate: -> 
    didOtherValidationPass = @_super()
    @set('formattedValue', Tent.Formatting.amount.cleanup(@get('formattedValue')))
    formattedValue = @get('formattedValue')
    #isValidNumber = @get('validAmountExp').test(formattedValue)
    isValidAmount = @isValidAmount(@get('formattedValue'))
    isValidCurrency = @get('isValidCurrency')
    #if didOtherValidationPass
    #  @addValidationError(Tent.messages.NUMERIC_ERROR) unless isValidNumber    
    @addValidationError(Tent.messages.AMOUNT_ERROR) unless isValidAmount
    @addValidationError(Tent.messages.CURRENCY_ERROR) unless isValidCurrency   
    (isValidCurrency and isValidAmount and didOtherValidationPass)

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
  

  #formats the value when the input field is out of focus
  focusOut: ->
    if @get('isValid')
      @set('formattedValue', @format(@get('formattedValue')))

  observeCurrencyForValidationAndFormatting: (->
    # remove the error always and check add again if required
    @get('validationErrors').removeObject(Tent.I18n.loc (Tent.messages.CURRENCY_ERROR))
    if @get 'isValidCurrency'
      @set('isValid', true) unless @get('validationErrors').length
      @set('formattedValue', @format(@get('formattedValue')))
    else
      @addValidationError(Tent.messages.CURRENCY_ERROR)
      
  ).observes('currency')

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
