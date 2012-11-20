
# APi for validation
#Tent.Validations.get('Capitalize').validate(value, options, message)

Tent.Validations = Ember.Object.create()

Tent.Validation = Ember.Object.extend
	ERROR_MESSAGE: Tent.messages.GENERIC_ERROR

	isValueEmpty: (value) ->
		not (value? && value != '')

	getErrorMessage: (value, options)->
		optString = ""
		optString = optString +  ",'#{val}'" for key,val of options
		eval("this.get('ERROR_MESSAGE').fmt(value" + optString + " )")

Tent.Validations.email = Tent.Validation.create
	validate: (value, options, message)-> 
		pattern = /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/i;
		isValid = (@isValueEmpty(value) or pattern.test(value))

	ERROR_MESSAGE: Tent.messages.EMAIL_FORMAT_ERROR


Tent.Validations.datebetween = Tent.Validation.create
	validate: (value, options, message)->
		if not options? or not options.startDate? or not options.endDate?
			return false
		isValid = @isValueEmpty(value) or (@convertToDate(value) > @convertToDate(options.startDate) and @convertToDate(value) < @convertToDate(options.endDate))

	convertToDate: (value) ->
		if not (value instanceof Date)
			return new Date(value)
		value

	ERROR_MESSAGE: Tent.messages.DATE_BETWEEN_ERROR

Tent.Validations.futuredate = Tent.Validation.create
	validate: (value, options, message) ->
		today = new Date()
		if not @isValueEmpty(value) and @convertToDate(value) > today
			return false
		true

	convertToDate: (value) ->
		if not (value instanceof Date)
			return Tent.Formatting.date.unformat(value)
		value

	ERROR_MESSAGE: Tent.messages.DATE_FUTURE_ERROR