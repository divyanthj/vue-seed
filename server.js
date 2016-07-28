/**
  * Primary Application for Common Product Web
  * @version: 0.0.1
*/

'use strict';

/**
 * Express object.
 * @property express
 * @type Object
 */

var express = require('express'),

  /**
   * Configuration
   * @property config
   * @type Object
   */

  config = require('config'),

  /**
   * Terminal Color Output
   * @property chalk
   * @type Object
   */

  chalk = require('chalk'),

  /**
   * Parses argument options
   * @property opts
   * @type Function
   */

  opts = require('minimist'),

  /**
   * Tool for creating and composing asynchronous promises
   * @property Q
   * @type Function
   */

  Q = require('q');

var app = express();

var Server = {

  /**
   * Message Chaining with Chalk
   * @method msg
   * @type Function
   */


  currentTime: function () {

    var date = new Date,

    abs_hour = date.getHours(),

    meridian = (abs_hour > 12) ? 'PM' : 'AM',

    hour = date.getHours() % 12,

    minute = date.getMinutes(),

    second = date.getSeconds(),

    milliseconds = date.getMilliseconds();

    return(' ' + hour + ':' + minute + ':' + second + ':' + milliseconds + ' ' + meridian);

  },

  msg: function (msg) {

    console.log(chalk.bgBlack(chalk.green('## ') + chalk.green('Seed Project') +

    chalk.green(' ## ') + chalk.white(msg)));

    return this;

  },

  /**
   * Return the application server
   * @method getApp
   * @type Function
   */

  getApp: function () {

    return app;

  },

  /**
   * Return the application express server
   * @method getExpressApp
   * @type Function
   */

  getExpressApp: function () {

    return express;

  },

  /**
   * Return the correct port for our environment
   * @method getPort
   * @type Function
   */

  getPort: function () {

    var cfg = config.get('application'),

      options = opts(process.argv.slice(2));

    var environment = options.env || 'development';

    return (environment === 'development') ?

      cfg.developmentPort : cfg.productionPort;

  },

  /**
   * Configure our express application
   * @method configure
   * @type Function
   */

  configure: function () {

    app.use(express.static(__dirname + '/www/'));

    return this;

  },

  routes: function () {

    require('./routes');

    return this;

  },

  middleware: function () {

    require('./middleware');

    return this;

  },

  /**
   * Start our application express server
   * @method start
   * @type Function
   */

  start: function () {

    var port = this.getPort(),

      deferred = Q.defer();

    var instance = app.listen(port, function () {

      return deferred.resolve(instance);

    });

    return deferred.promise;

  }

};

module.exports = Server;
