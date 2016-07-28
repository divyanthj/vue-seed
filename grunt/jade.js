'use strict';

module.exports = {

  'compile': {

    'options': {

      'client': false,

      'pretty': true,

      'basedir': '<%= paths.app %>/<%= paths.templates %>/'

    },

    'files': [ {

      'cwd': '<%= paths.app %>/<%= paths.templates %>',

      'src': '**/*.jade',

      'dest': '<%= paths.dist %>/<%= paths.templates %>',

      'expand': true,

      'ext': '.html'

      },

      {

      'cwd': '<%= paths.app %>/',

      'src': '*.jade',

      'dest': '<%= paths.dist %>/',

      'expand': true,

      'ext': '.html'

      }

    ]

  }

};
