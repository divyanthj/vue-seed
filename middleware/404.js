'use strict';

var app = require('../server').getApp();

/**
  * Handle 404 errors with redirecting the user to
  * our landing page for Vue Seed
 */

app.use(function (req, res) {

  return res.redirect('/');

});
