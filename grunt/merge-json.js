'use strict';

module.exports = {

  'development' : {

    'src' : ['app/config/development/**/*.json'],

    'dest': 'app/config/.tmp/development.json'

  },

  'production' : {

    'src' : ['app/config/production/**/*.json'],

    'dest': 'app/config/.tmp/production.json'

  },

  'local' : {

    'src' : ['app/config/local/**/*.json'],

    'dest': 'app/config/.tmp/local.json'

  }

};
