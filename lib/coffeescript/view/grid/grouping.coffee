
###*
* @class Tent.JqGrid.Grouping
* Provides configuration options for grouping by column values and comparators for defining
* grouping ranges.
*
###

Tent.JqGrid.Grouping = Ember.Object.extend

###*
* @method getComparator returns a comparator to use for a combination of datatype and grouping type
* @param {String} dataType the type of the column which is defining the grouping e.g. 'date'
* @param {String} groupType the type of grouping to perform e.g. 'month'  
###
Tent.JqGrid.Grouping.getComparator = (dataType, groupType)->
		comparator = @ranges.default.comparator
		if not @ranges[dataType]?
			throw new Error('Invalid data type for grid grouping.')
		for type in @ranges[dataType]
			if type.name == groupType
				comparator = type.comparator if type.comparator?
		comparator 

###*
* @class Tent.JqGrid.Grouping.comparator
* A base class for providing custom comparison functions for determining if values lie in a particular range.
###
Tent.JqGrid.Grouping.comparator = Ember.Object.extend
	###*
	* @method compare Test whether a value lies in the same range as another.
	* @param {Object} firstValue The value defining the range to use in the test
	* @param {Object} testValue The value to test
	* @param {Boolean} The result of the test
	###
	compare: (firstValue, testValue) ->
		return firstValue == testValue

	###*
	* @method rowTitle Returns the text to display as the first interpolation of the group row text
	* @param {Object} value the value which is used to determine the range
	###
	rowTitle: (value)->
		value

###*
* @property {Object} Tent.JqGrid.Grouping.ranges A collection of range definitions which provide titles, comparators etc for particular types
###
Tent.JqGrid.Grouping.ranges = Ember.Object.create
		default: 
			name: 'exact'
			title: Tent.I18n.loc 'tent.grouping.range.exact'
			comparator: Tent.JqGrid.Grouping.comparator.create()

		###*
		* @class Tent.JqGrid.Grouping.ranges.date
		###
		date: [

			{
				###*
				* @property {Object} exact group dates which are the same
				###
				name: 'exact'
				title: Tent.I18n.loc  'tent.grouping.range.exact'
				comparator: Tent.JqGrid.Grouping.comparator.create
					compare: (last, value) ->
						return last.compareTo(value) == 0
			}
			{
				###*
				* @property {Object} week group dates which occur in the same week
				###
				name: 'week'
				title: Tent.I18n.loc 'tent.grouping.range.week'
				comparator: Tent.JqGrid.Grouping.comparator.create
					compare: (last, value)->
						(last.getFullYear() == value.getFullYear()) and (last.getWeek() == value.getWeek())
					rowTitle: (value)->
						date = Tent.Formatting.date.unformat(value)
						'Week ' + date.getWeek() + ', ' + date.getFullYear()
			}
			{
				###*
				* @property {Object} month group dates which occur in the same month
				###
				name: 'month'
				title: Tent.I18n.loc 'tent.grouping.range.month'
				comparator: Tent.JqGrid.Grouping.comparator.create
					compare: (last, value)->
						(last.getFullYear() == value.getFullYear()) and (last.getMonth() == value.getMonth())
					rowTitle: (value)->
						date = Tent.Formatting.date.unformat(value)
						Tent.Formatting.date.format(date,'MM') + ' ' + date.getFullYear()
			}
			{
				###*
				* @property {Object} quarter group dates which occur in the same quarter
				###
				name: 'quarter'
				title: Tent.I18n.loc 'tent.grouping.range.quarter'
				comparator: Tent.JqGrid.Grouping.comparator.create
					compare: (last, value)->
						quarter = Math.floor(last.getMonth()/3) + 1
						(last.getFullYear() == value.getFullYear()) and ((quarter-1) * 3) <= value.getMonth() <= ((quarter-1) * 3) + 2
						
					rowTitle: (value)->
						date = Tent.Formatting.date.unformat(value)
						quarter = Math.floor(date.getMonth()/3) + 1
						'Quarter ' + quarter + ', ' + date.getFullYear()
			}
			{
				###*
				* @property {Object} year group dates which occur in the same year
				###
				name: 'year'
				title: Tent.I18n.loc 'tent.grouping.range.year'
				comparator: Tent.JqGrid.Grouping.comparator.create
					compare: (last, value)->
						last.getFullYear() == value.getFullYear()
					rowTitle: (value)->
						'Year = ' + Tent.Formatting.date.unformat(value).getFullYear()
			}
		]
		###*
		* @class Tent.JqGrid.Grouping.ranges.string
		###
		string: [
			{
				###*
				* @property {Object} exact group string which are the same
				###
				name: 'exact'
				title: Tent.I18n.loc 'tent.grouping.range.exact'
				comparator: Tent.JqGrid.Grouping.comparator.create()
			}
		]
		###*
		* @class Tent.JqGrid.Grouping.ranges.number
		###
		number: [
			{
				###*
				* @property {Object} exact group numbers which are the same
				###
				name: 'exact'
				title: Tent.I18n.loc 'tent.grouping.range.exact'
				comparator: Tent.JqGrid.Grouping.comparator.create()
			}
			{
				###*
				* @property {Object} 10s group numbers in ranges of ten
				###
				name: '10s'
				title: Tent.I18n.loc 'tent.grouping.range.tens'
				comparator: Tent.JqGrid.Grouping.comparator.create
					lower: null
					upper: null
					compare: (last, value) ->
						@calculateRange(last)
						return @get('lower') <= value <= @get('upper')

					rowTitle: (value)->
						value = parseFloat(value)
						@calculateRange(value)
						return @get('lower') + ' - ' + @get('upper')

					calculateRange: (value)->
						if value >= 0
							lower = value - (value%10)
							upper = lower + 9
						else 
							if value%10 == 0
								lower = value
								upper = value + 9
							else
								upper = -1 + value - (value%10) 
								lower = upper - 9
						@set('lower',lower)
						@set('upper', upper)
			}
		]
		###*
		* @class Tent.JqGrid.Grouping.ranges.boolean
		###
		boolean: [
			{
				###*
				* @property {Object} exact group boleans which have the same value
				###
				name: 'exact'
				title: Tent.I18n.loc 'tent.grouping.range.exact'
				comparator: Tent.JqGrid.Grouping.comparator.create()
			}
		]
