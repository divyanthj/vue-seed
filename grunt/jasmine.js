'use strict';

module.exports = {

  'main': {

    'src' : [
          '<%= paths.dist %>/scripts/app.js',
          '<%= paths.dist %>/scripts/**/*.js'
    ],

    'options' : {

      'vendor': [
        '<%= paths.dist %>/bower_components/vue/src/vue.js',
      ],

      'specs' : ['specs/**/*.js'],

      'junit' : {

        'path' : 'junit'

      },

      'template' : require('grunt-template-jasmine-istanbul'),

      'templateOptions' : {

        'coverage' : '<%= paths.dist %>/coverage.json',

        'report' : '<%= paths.dist %>/coverage',

        'thresholds' : {

          'lines' : 75,

          'statements' : 75,

          'branches' : 75,

          'functions' : 75

        }

      }

    }

  }

};
