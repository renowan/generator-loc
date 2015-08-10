'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

  },

  initializing: function () {

  	// yo loc:model mymodelName
  	// -> mymodelName
  	console.log('this.name',this._args[0]);
  	
  	// yo loc:model mymodelName aa
  	// -> mymodelName aa
  	console.log('this.name',this._args[1]);
  },

  writing: function () {

  }
});
