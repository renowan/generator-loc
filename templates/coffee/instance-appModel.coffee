AppModel   = require './model-AppModel.coffee'

appModel = new AppModel

# デフォルト変数をセット
appModel.set

	# - - - - - - - - - 基本変数
	# デバッグモード設定
	isDebug: false

	# - - - - - - - - - デフォルト変数
	foo: 1
	bar: 2

module.exports = appModel
		
