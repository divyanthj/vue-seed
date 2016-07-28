'use strict';

module.exports = {

  'scripts': {

    'files': [

      {

        'expand': true,

        'cwd': '<%= paths.app %>/<%= paths.scripts %>/',

        'dest': '<%= paths.dist %>/<%= paths.scripts %>/',

        'src': '**/*.js'

      }

    ]

  },

  'images': {

    'files': [

      {

        'expand': true,

        'dot': true,

        'cwd': '<%= paths.app %>/<%= paths.images %>/',

        'dest': '<%= paths.dist %>/<%= paths.images %>/',

        'src': '**/*.{webp,gif,png,jpg}'

      }

    ]

  }

};
