'use strict';

module.exports = {

  'config' : {

    'files' : [

      '<%= paths.app %>/<%= paths.config %>/**/*.json'

    ],

    'options' : {

      'livereload' : true

    },

    'tasks' : ['buildconfig']

  },

  'jade' : {

    'files': [
      '<%= paths.app %>/<%= paths.templates %>/**/*.jade',
      '<%= paths.app %>/*.jade'
    ],

    'tasks': ['buildjade', 'injector'],

    'options' : {

      'livereload' : true

    }

  },

  'js': {

    'files': ['<%= paths.app %>/<%= paths.scripts %>/**/*.js'],

    'tasks': ['buildjs'],

    'options' : {

      'livereload' : true

    }

  },

  'compass': {

    'files': ['<%= paths.app %>/<%= paths.styles %>/**/*.{scss,sass}'],

    'tasks': ['buildstyles'],

    'options' : {

      'livereload' : true

    }

  }

};
