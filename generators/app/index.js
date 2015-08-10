'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
// projectDir = ''

var BackboneGenerator = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);


    console.log('this.options:',this.options);
    console.log('arguments:',arguments);

    // yo loc ***
    // *** を出力
    var ag0 = arguments[0] || 'none'
    console.log('******',ag0);

    // yo loc ***
    // appname名取得
    if(arguments['appname']){
	    this.argument('appname', { type: String, required: true });
	    this.appname = _.camelCase(this.appname);
	    console.log('appName:',this.appname);
    }

    // yo loc --coffee
    this.option('coffee');
    console.log('hikisuu--:',this.options.coffee);

  },

  install: function () {
    this.installDependencies();
  }
});


module.exports = BackboneGenerator;