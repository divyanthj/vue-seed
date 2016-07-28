'use strict';

module.exports = {

  'tmp' : {

    'files' : [

      {

        'dot' : true,

        'src' : ['app/config/.tmp']

      }

    ]

  },


  'js' : {

    'files' : [

      {

        'dot' : true,

        'src' : [
          '<%= paths.dist %>/<%= paths.scripts%>/*',
          '!<%= paths.dist %>/<%= paths.scripts%>/app.templates.js',
          '!<%= paths.dist %>/<%= paths.scripts%>/app.config.js'
        ]

      }

    ]

  },

  'styles' : {

    'files' : [

      {

        'dot' : true,

        'src' : ['<%= paths.dist %>/<%= paths.styles %>/*']

      }

    ]

  },

  'jade' : {

    'files' : [

      {

        'dot' : true,

        'src' : [
          '<%= paths.dist %>/<%= paths.templates %>/*',

          '!<%= paths.dist %>/<%= paths.templates %>/includes/',

          '<%= paths.dist %>/*.html'
        ]

      }

    ]

  },

  'includes' : {

    'files' : [

      {

        'dot' : true,

        'src' : ['<%= paths.dist %>/<%= paths.templates %>/includes/']

      }

    ]

  }

};
