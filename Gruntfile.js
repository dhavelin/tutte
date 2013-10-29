module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    dir_src:              'src',
    dir_target:           'target',
    dir_temp:             'temp',

    dir_src_css:          '<%= dir_src %>/css',
    dir_src_img:          '<%= dir_src %>/img',
    dir_src_js:           '<%= dir_src %>/js',
    dir_src_templates:    '<%= dir_src %>/templates',

    dir_src_js_app:       '<%= dir_src_js %>/app',
    dir_src_js_lib:       '<%= dir_src_js %>/lib',

    dir_target_css:       '<%= dir_target %>/css',
    dir_target_img:       '<%= dir_target %>/img',
    dir_target_js:        '<%= dir_target %>/js',
    dir_target_templates: '<%= dir_target %>/templates',

    dir_src_css_app:      '<%= dir_src_css %>/app',
    dir_src_css_lib:      '<%= dir_src_css %>/lib',

    clean: ['<%= dir_target %>', '<%= dir_temp %>/'],

    concat: {
      jsApp: {
        src: ['<%= dir_src_js_app %>/app.js', '<%= dir_src_js_app %>/services.js',
              '<%= dir_src_js_app %>/controllers.js', '<%= dir_src_js_app %>/filters.js',
              '<%= dir_src_js_app %>/directives.js'],
        dest: '<%= dir_temp %>/app.concat.js'
      }
      /**
      cssLib: {
        src: ['<%= dir_src_css_lib %>/bootstrap.min.css'],
        dest: '<%= dir_target_css %>/lib.css'
      }
      **/
    },

    jshint: {
      all: ['<%= dir_src_js_app %>/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        quotmark: true,
        trailing: true
      },
    },

    ngmin: {
      app: {
        src: ['<%= dir_temp %>/app.concat.js'],
        dest: '<%= dir_target_js %>/app.js'
      }
    },

    /**
    uglify: {
      options: {
        mangle: false,
        compress: false
      },
      app: {
        src: '<%= dir_temp %>/app.js',
        dest: '<%= dir_target_js %>/app.min.js'
      },
      lib: {
        src: '<%= dir_temp %>/lib.js',
        dest: '<%= dir_target_js %>/lib.min.js'
      }
    },
    **/

    less: {
      compile: {
        files: {
          '<%= dir_target_css %>/app.css': '<%= dir_src_css_app %>/app.less'
        }
      }
    },

    includes: {
      files: {
        src: ['<%= dir_src %>/index.html'],
        dest: '<%= dir_temp %>',
        flatten: true,
        options: {
          // silent: true
        }
      }
    },

    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true
      },
      main: {
        files: {
          '<%= dir_target %>/index.html': '<%= dir_temp %>/index.html',
          '<%= dir_target_templates %>/patternInput.html': '<%= dir_src_templates %>/patternInput.html',
          '<%= dir_target_templates %>/patternStart.html': '<%= dir_src_templates %>/patternStart.html'
        }
      }
    },

    copy: {
      static: {
        files: {
          // '<%= dir_target_css %>/bootstrap.css': '<%= dir_src_css %>/bootstrap.css',
        }
      },
      dynamic: {
        files: [
          {
            expand: true,
            cwd: '<%= dir_src_img %>',
            src: ['*.*'],
            dest: '<%= dir_target_img %>/'
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-includes');

  // Default tasks
  grunt.registerTask('default', ['jshint', 'less', 'concat', 'ngmin', 'includes', 'htmlmin', 'copy']);
};