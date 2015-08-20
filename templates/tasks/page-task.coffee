core    = require('./core')
gulp    = require 'gulp'

page = '<%= moduleName %>'
jira = ''

gulp.task 'build-'+page,->
	core.build( page , jira )

gulp.task 'watch-'+page, ->
	gulp.watch ["./game/coffee/"+page+"/**","./game/scss/"+page+"/**"],['build-'+page]


gulp.task 'copy-'+page,->
	core.copy( page )