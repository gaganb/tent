#
# Copyright PrimeRevenue, Inc. 2012
# All rights reserved.
#

require '../util/computed'
 
Tent.MandatorySupport = Ember.Mixin.create
	isMandatory: false
	isMandatoryAsBoolean: Tent.computed.boolCoerceGently 'isMandatory'

	validate: ->
		isValid = @_super()
		value = @get('value')
		isValid = isValid && ((not @isMandatory) or (not @isValueEmpty(value)))
		@addValidationError(Tent.messages.MANDATORY_ERROR) unless isValid
		isValid

	isValueEmpty: (value) ->
		not (value? && value != '')





