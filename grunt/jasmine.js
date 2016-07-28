'use strict';

module.exports = {

  'main': {

    'src' : [
          '<%= paths.dist %>/scripts/app.config.js',
          '<%= paths.dist %>/scripts/app.module.js',
          '<%= paths.dist %>/scripts/app.interceptors.js', // app.module must be loaded before app.interceptors!
          '<%= paths.dist %>/scripts/**/*.js'
    ],

    'options' : {

      'vendor': [
        '<%= paths.dist %>/bower_components/angular/angular.js',
        '<%= paths.dist %>/bower_components/angular-mocks/angular-mocks.js',
        '<%= paths.dist %>/bower_components/angular-ui-router/release/angular-ui-router.js',
        '<%= paths.dist %>/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        '<%= paths.dist %>/bower_components/angular-ui-grid/ui-grid.js',
        '<%= paths.dist %>/bower_components/angular-ui-notification/dist/angular-ui-notification.js',
        '<%= paths.dist %>/bower_components/pure-angular-advanced-searchbox/dist/scripts/ui.core.js',
        'mocks/**/*.js'
      ],

      'specs' : ['specs/**/*.js'],
      // 'specs' : ['specs/controllers/test.js'],

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
