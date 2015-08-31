_           = require( 'underscore' )
Backbone    = require( 'backbone' )
Backbone.$  = require( 'jquery' )

# Singleton実装のModel
AppModel = Backbone.Model.extend
	constructor: ->
		if !AppModel.instane
			AppModel.instance = this
			Backbone.Model.apply( AppModel.instance , arguments )
		return AppModel.instance
		
	defaults: ()->
		# デバッグモード
		isDebug:          true
		# インスタンス開放用配列
		instance:[]
			
	initialize: () ->

		return

appModel = new AppModel

module.exports = appModel
		
