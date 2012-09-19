#
# Copyright PrimeRevenue, Inc. 2012
# All rights reserved.
#

###*
* @class Tent.I18n
* A general purpose class for I18n support.
###

Tent.I18n = Ember.Namespace.create
	language: {}

	###*
	* Loads a set of translations for localizing text
	* @param {Object} translations A map of key:value pairs defining the translations to be used
	###
	loadTranslations: (translations)->
		@set('language', translations)

	translate: (code) ->
		#Stubbed
		"t_" + code

	###*
	* Replace a key with its translation
	* @param {String} key
	* @param {String|Array} [vars] arguments to be interpolated in the translated string
	###
	loc: (key, vars) ->
		string = Ember.get(@language, key) || key
		vars = [vars] if typeof vars == 'string'
		Ember.String.fmt(string, vars)

Tent.translate = Tent.I18n.translate