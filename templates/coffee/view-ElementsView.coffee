$                   = require 'jquery'
_                   = require 'underscore'
Backbone            = require 'backbone'
Backbone.$          = require 'jquery'

locUtility = require '../common/utility/locUtility.coffee'

ElementsView = Backbone.View.extend
	tagName: 'div'
	className: 'bbs-wrap'
	events:
		'touchend .xxx': 'xxx'

	initialize: ->

		return

	dataLoadComplete: ->

		return
	render: ->
		@$el.html( @template() )
		return @

	template: ->

		temp = """
		xxxxx
		"""

		return temp

	# イベント登録解除
	destroyView: ()->

		@stopListening()
		@undelegateEvents()
		return

module.exports = ElementsView
