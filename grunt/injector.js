'use strict';

module.exports = {

  'options' : {

    'ignorePath' : '<%= paths.dist %>/',

    'addRootSlash' : false,

    'template' : '<%= paths.dist %>/index.html',

    'destFile' : '<%= paths.dist %>/index.html'

  },

  'scripts' : {

    'files' : {

      'index.html' : ['<%= paths.dist %>/scripts/app.js',
                      '<%= paths.dist %>/scripts/**/*.js']

    }

  }

};
