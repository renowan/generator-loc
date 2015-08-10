$                   = require 'jquery'
_                   = require 'underscore'
Backbone            = require 'backbone'
Backbone.$          = require 'jquery'

AjaxModel           = require '../common/utility/model-AjaxModel.coffee'
GlobalMenuView      = require '../common/ui/view-GlobalMenu.coffee'
transitionManager   = require '../common/utility/transitionManager.coffee'

popupView                   = require './instance-popup.coffee'
appModel                    = require './instance-appModel.coffee'

appViewTemplate             = require './template-AppView.coffee'

transitionManager           = require '../common/utility/transitionManager.coffee'

globalMenuView      = new GlobalMenuView

AppView = Backbone.View.extend
	el: 'body'
	events:
		'click .xx':  'xx'

	initialize: ->

		console.log 'init appView'

		popupView.showLoading()

		ran = Math.floor( Math.random()*99999999 )

		@model = new AjaxModel

		@model.set
			api:        '/game/api/api/api'
			dmmyURL:    'json/dmmy.json?'+ran
			# dmmyDomain: 'http://lg00000-1.legend-for-sp-staging.appspot.com'
			isDebug:    appModel.get('isDebug')

		@listenTo @model , 'change', @dataLoadComplete

		@model.startFetch()

		return

	dataLoadComplete: ->

		# @render()

		return

	render: ->

		return

	destroyView:->

		@stopListening()
		@undelegateEvents()

		return

module.exports = AppView