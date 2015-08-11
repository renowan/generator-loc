$                   = require 'jquery'
_                   = require 'underscore'
Backbone            = require 'backbone'
Backbone.$          = require 'jquery'
IScroll             = require 'iscroll'
render              = require 'jsrender'

AjaxModel           = require '../common/utility/model-AjaxModel.coffee'
locUtility          = require '../common/utility/locUtility.coffee'

popupView           = require './instance-popup.coffee'
appModel            = require './instance-appModel.coffee'
appViewTemplate     = require './template-AppView.coffee'


<%= moduleName %>View = Backbone.View.extend
	el: 'body'
	events:
		'click .xxx':  'xx'

	initialize: ->

		return

	dataLoadComplete: ->

		return

	render: ->

		return

	destroyView:->

		@stopListening()
		@undelegateEvents()

		return


module.exports = <%= moduleName %>View