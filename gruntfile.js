'use strict';

module.exports = function (grunt) {

  var _ = require('lodash'),

    chalk = require('chalk');

  var pkg = {

    'grunt': null,

    msg: function (msg) {

      console.log(chalk.bgBlack(chalk.green('## ') + chalk.green('Seed Project') +

        chalk.green(' ## ') + chalk.white(msg)));

      return this;

    },

    /**
      * Load grunt tasks automatically
      * Time how long tasks take. Can help when optimizing build times
      * @method init
      * @type Function
    */

    init: function (grunt) {

      this.grunt = grunt;

      require('es6-promise')
        .polyfill();

      require('jit-grunt')(this.grunt, {

        'shell': 'grunt-shell-spawn',

        'includereplacemore': 'grunt-include-replace-more'

      });

      require('time-grunt')(this.grunt);

      return this;

    },

    /**
      * Configure grunt plugins
      * @method config
      * @type Function
    */

    config: function () {

      var grunt = this.grunt;

      grunt.initConfig({

          'pkg': grunt.file.readJSON('package.json'),

          'paths' : require('./grunt/paths'),

          'merge-json' : require('./grunt/merge-json'),

          'shell': require('./grunt/shell'),

          'config': require('./grunt/config'),

          'injector' : require('./grunt/injector'),

          'includereplacemore': require('./grunt/include-replace-more'),

          'replace': require('./grunt/replace'),

          'jshint': require('./grunt/jshint'),

          'postcss': require('./grunt/postcss'),

          'copy' : require('./grunt/copy'),

          'notify': require('./grunt/notify'),

        'bowerInstall': require('./grunt/bower-install'),

        'nodemon': require('./grunt/nodemon'),

        'compass': require('./grunt/compass'),

        'watch' : require('./grunt/watch'),

        'githooks': require('./grunt/githooks'),

        'jasmine' : require('./grunt/jasmine'),

        'karma' : require('./grunt/karma'),

        'clean' : require('./grunt/clean'),

        'jade': require('./grunt/jade'),

        'open' : require('./grunt/open'),

        'bumpup': require('./grunt/bumpup'),

        'http-server': require('./grunt/http-server')

      });

      return this;

    },

    /**
      * @method getOptions
      * Get command-line argument options or use defaults
    */

    getOptions : function(task) {

      var options = task.options({

        'environment': this.grunt.option('environment') || 'development',

        'open': this.grunt.option('open') || false,

        'watch': this.grunt.option('watch') || false

      });

      return options;

    },

    /**
      * @method addTasksBasedOnOptions
      * Add tasks based on the current command line arguments
    */

    addTasksBasedOnOptions: function (opts, name, value, tasks, add) {

      if(opts[name] === value) {

        tasks.push(add);

      }

      return _.flatten(tasks);

    },

    /**
      * @method tasks
      * Build tasks for build, test, serve, and running the application.
    */

    tasks: function () {

      var self = this,

          grunt = self.grunt,

          environment = grunt.option('environment') || 'development',

          app = require('config').get('application');

      grunt.task.run([

        'githooks:all'

      ]);

      grunt.config.merge({

        'paths': {

          'isDevelopment': (environment === 'development') ? true : false,

          'isProduction': (environment === 'production') ? true : false,

          'port': (environment === 'production') ? app.productionPort : app.developmentPort

        }

      });

      grunt.registerTask('build', function (target) {

        var options = self.getOptions(this);

        var tasks = [

          'config:development',

          'buildjade',

          'buildjs',

          'injector',

          'buildstyles',

          'copy:images'

        ];

        if(target !== 'automated') {

          tasks = self.addTasksBasedOnOptions(options, 'open', true, tasks, ['open:app']);

        }

        grunt.task.run(tasks);

        tasks.push('notify:buildComplete');

      });

      grunt.registerTask('buildconfig', function() {

        var options = self.getOptions(this);

        grunt.task.run([

          'merge-json:' + options.environment,

          'clean:tmp'

        ]);

      });

      grunt.registerTask('buildjs', function() {

        grunt.task.run([

          'buildconfig',

          'copy:scripts',

          'newer:jshint:all',

          'notify:buildJsComplete'

        ]);

      });

      grunt.registerTask('buildjade', function() {

        grunt.task.run([

          'clean:jade',

          'jade',

          'bowerInstall',

          'clean:includes',

          'includereplacemore:html',

          'notify:buildJadeComplete'

        ]);

      });

      grunt.registerTask('buildstyles', function() {

        grunt.task.run([

          'clean:styles',

          'compass:server',

          'postcss',

          'notify:buildStylesComplete'

        ]);

      });

      grunt.registerTask('test', function () {

          grunt.option('force', true);

          grunt.task.run([

            'jasmine:main'

          ]);

      });

      grunt.registerTask('deploy', function () {

        grunt.task.run([

          'build:automated',

          'open:app',

          'watch'

        ]);

      });

      grunt.registerTask('serve', function () {

        grunt.task.run([

          (process.platform === 'win32') ?

            'shell:winRun' : 'shell:shRun',

          'deploy'

        ]);

      });

      grunt.registerTask('run', function () {

        grunt.task.run(['nodemon:dev']);

      });

      grunt.registerTask('docs', function () {

        var options = self.getOptions(this);

        var tasks = [

          'ngdocs:api'

        ];

        if(options.watch) {

          grunt.config.merge({

            'watch': {

              'jsDocs': {

                'files': ['<%= paths.app %>/<%= paths.scripts %>/**/*.js'],

                'tasks': ['ngdocs:api'],

                'options' : {

                  'livereload' : 35730

                }

              }

            }

          });

          tasks.push(

            'replace:docs',

            (process.platform === 'win32') ?

              'shell:docsWinRun' : 'shell:docsShRun',

            'watch:jsDocs'

          );

        } else {

          tasks.push('http-server:docs');

        }

        grunt.task.run(tasks);

      });

      return self;

    }

  };

  pkg
    .init(grunt)
    .config()
    .tasks();

};
