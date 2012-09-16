
accounting.settings = 
	currency:
		symbol : "$"   # default currency symbol is '$'
		format: "%s%v" # controls output: %s = symbol, %v = value/number (can be object: see below)
		decimal : "."  # decimal point separator
		thousand: ","  # thousands separator
		precision : 2   # decimal places
	number:
		precision : 2  # default precision on numbers is 0
		thousand: ","
		decimal : "."
		pattern: 'xxx,xxx.xx'

Tent.Formatting = {} unless Tent.Formatting?

Tent.Formatting.amount = 
	format: (amount) ->
		if amount? and amount != ""
			accounting.formatNumber(amount)
		else
			""
	unformat: (amount) ->
		if amount? and amount !=""
			accounting.unformat(amount)
		else 
			null

Tent.Formatting.date = Ember.Object.create
	options: 
		dateFormat: "mm/dd/yy"

	getFormat: ->
		return @get('options').dateFormat

	format: (value, dateFormat) ->
		$.datepicker.formatDate(dateFormat or @getFormat(), value)
	
	unformat: (value, dateFormat) ->
		$.datepicker.parseDate(dateFormat or @getFormat(), value)


Tent.Formatting.number = Ember.Object.create
	isValidNumber: (value)->
		(value != '') && !(isNaN(value) || isNaN(parseFloat(value))) 

	format: (value) ->
		if (typeof value == 'number') or value == ''
			value.toString(10)
		else if value?
			value
		else 
			""
	unformat: (value) ->
		# Convert from a string to a number
		if @isValidNumber(value)
			val = parseFloat(value)
		else if value==""
			return null
		else 
			value
