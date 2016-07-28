'use strict';

module.exports = {

  'options': {

    'jshintrc': '.jshintrc',

    'reporter': require('jshint-stylish')

  },

  'all': [

    'Gruntfile.js',

    '<%= paths.app %>/<%= paths.scripts %>/**/*.js',

    '!<%= paths.app %>/<%= paths.scripts %>/libs/**/*.js'

  ],

  'test': {

    'options': {

      'jshintrc': 'specs/.jshintrc'

    },

    'src': ['specs/**/*.js']

  }

};
