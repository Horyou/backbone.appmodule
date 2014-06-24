/*global module:false*/
module.exports = function (grunt) {
  'use strict';

  var config = {
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
  };

  //require('load-grunt-tasks')(grunt);
  var path = require('path');

  require('load-grunt-config')(grunt, {
    init: true,
    configPath: path.join(process.cwd(), 'tasks'),
    config: config
  });

  // Default task.
  grunt.registerTask('build', ['jshint', 'jscs', 'preprocess', 'concat', 'uglify']);

};
