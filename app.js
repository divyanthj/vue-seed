/**
  * Primary Booter for Seed Project
  * @version: 0.0.1
*/

'use strict';

var server = require('./server'),

  extend = require('node.extend'),

  app = server.getApp();

var Booter = {

};

extend(server, Booter);

server
  .configure()
  .routes()
  .middleware()
  .start()
    .then(function (instance) {

      var host = instance.address().address,

        port = instance.address().port;

      if(host === '::') {

        host = 'localhost';

      }

      server
        .msg('Started application at' + server.currentTime())
        .msg('Running on http://' + host + ':' + port);

    });
