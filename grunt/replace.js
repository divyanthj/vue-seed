'use strict';

module.exports = {

  'docs': {

    'src': ['<%= paths.docs %>/**/*.html'],

    'overwrite': true,

    'replacements': [{

      'from': '<head>',

      'to': '<head><script src="//localhost:35730/livereload.js"></script>'

    }]

  }

};
