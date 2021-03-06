'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.env.options.appPath = this.options.appPath || 'game';

  },

  initializing: function () {

  },

  writing: function () {

  	var myName = this._args[0];

  	if( this._args[0] ){

  		this.fs.copyTpl(
  			this.templatePath('../../templates/coffee/view-AppView.coffee'),
  			this.destinationPath( this.env.options.appPath + '/coffee/' + myName + '/view-AppView.coffee' ),
  			{ moduleName: myName }
  		);

  		this.fs.copyTpl(
  			this.templatePath('../../templates/coffee/template-View.coffee'),
  			this.destinationPath( this.env.options.appPath + '/coffee/' + myName + '/template-AppView.coffee' ),
  			{ moduleName: myName }
  		);

  		this.fs.copyTpl(
  			this.templatePath('../../templates/coffee/instance-appModel.coffee'),
  			this.destinationPath( this.env.options.appPath + '/coffee/' + myName + '/instance-appModel.coffee' ),
  			{ moduleName: myName }
  		);

  		this.fs.copyTpl(
  			this.templatePath('../../templates/coffee/instance-popup.coffee'),
  			this.destinationPath( this.env.options.appPath + '/coffee/' + myName + '/instance-popup.coffee' ),
  			{ moduleName: myName }
  		);

  		this.fs.copyTpl(
  			this.templatePath('../../templates/coffee/main.coffee'),
  			this.destinationPath( this.env.options.appPath + '/coffee/' + myName + '/main.coffee' ),
  			{ moduleName: myName }
  		);

  		this.fs.copyTpl(
  			this.templatePath('../../templates/scss/dev.scss'),
  			this.destinationPath( this.env.options.appPath + '/scss/' + myName + '/' + myName + '-dev.scss' ),
  			{ moduleName: myName }
  		);

  		this.fs.copyTpl(
  			this.templatePath('../../templates/html/page.html'),
  			this.destinationPath( this.env.options.appPath + '/' + myName + '.html' ),
  			{ moduleName: myName }
  		);

  		this.fs.copyTpl(
  			this.templatePath('../../templates/tasks/page-task.coffee'),
  			this.destinationPath( 'tasks/' + 'page-' + myName + '.coffee' ),
  			{ moduleName: myName }
  		);

  	}else{

  		console.log('\n\n\n');
  		console.log('- - - - - - - - - - - - - - - - - - - - ');
  		console.log('Invalid page name.'.red);
  		console.log('No find page name. Enter page name.');
  		console.log('Ex: ' + 'yo loc:page foo'.green);
  		console.log('- - - - - - - - - - - - - - - - - - - - ');
  		console.log('\n\n\n');
  	}



  }
});
