'use strict';

module.exports = {

  'html': {

     'options': {

      'globals': {

        'isDevelopment': '<%= paths.isDevelopment %>',

        'isProduction': '<%= paths.isProduction %>'

      },

      'prefix': '<!-- @@',

      'suffix': '-->'

    },

    'files': [{

      'expand': true,

      'cwd': '<%= paths.dist %>/',

      'dest': '<%= paths.dist %>/',

      'src': [

        '**/*.html'

      ]

    }]

  }

};
