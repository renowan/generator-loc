'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    // this.option('appPath', {
    //   desc: 'Name of application directory',
    //   type: 'String',
    //   defaults: 'game',
    //   banner: 'some banner'
    // });

    this.env.options.appPath = this.options.appPath || 'game';

  },

  initializing: function () {

  	// yo loc:model mymodelName
  	// -> mymodelName
  	// console.log('this.name',this._args[0]);
  	
  	// yo loc:model mymodelName aa
  	// -> mymodelName aa
  	// console.log('this.name',this._args[1]);


  	// console.log('this.env.options.appPath:',this.env.options.appPath);
  },

  writing: function () {

  	var myName = this._args[0];

  	if( this._args[0] ){

  		this.fs.copyTpl(
  			// this.templatePath('model.coffee'),
  			this.templatePath('../../templates/model.coffee'),
  			// this.sourceRoot('templates/modelaa.coffee'),
  			this.destinationPath(this.env.options.appPath+'/coffee/model-'+ myName +'.coffee'),
  			{ moduleName: myName }
  		);

  	}else{

  		console.log('\n\n\n');
  		console.log('- - - - - - - - - - - - - - - - - - - - ');
  		console.log('Invalid module name.'.red);
  		console.log('No module name. Enter model name.');
  		console.log('Ex: ' + 'yo loc:model foo'.green);
  		console.log('- - - - - - - - - - - - - - - - - - - - ');
  		console.log('\n\n\n');
  	}



  }
});
