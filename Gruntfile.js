module.exports = function(grunt) {
  // Load the various tasks required
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-svg-sprite');
  //grunt.loadNpmTasks('grunt-parallel');


  grunt.loadNpmTasks('grunt-html-validation');


  //Uncommment the line below to add JSHint into the project (Ctrl+f to find all regions needed to be uncommented in order to add in JSHint)
  //grunt.loadNpmTasks('grunt-contrib-jshint');

  //Uncomment the line below to add csslint to the project (Ctrl+f to find all regions needed to be uncommented in order to add in csslint)
  //grunt.loadNpmTasks('grunt-contrib-csslint');

  //Uncomment the line below to add text replace to the project
  //grunt.loadNpmTasks('grunt-text-replace');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    express: {
      all: {
        options: {
          port: 9001,
          hostname: '0.0.0.0',
          bases: ['www-root'],
          livereload: true,
          open: true
        }
      }
    },

    bower: {
      install: {
         options: {
           targetDir: 'development/lib',
           layout: 'byComponent',
           cleanup: true
         }//options
      }//install
    },//bower

    //Uncomment this region to add in JSHint to the project.
    /*jshint: {
      options: {
        jshintrc : '.jshintrc'
      },//options
      all : ['development/terminalfour/js/*.js']
    },//jshint
    */

    uglify: {
      options: {
        banner: '<%= pkg.warning %>/**\n * Client: <%= pkg.clientName %>\n * Project: <%= pkg.projectName %>\n * Version: <%= pkg.version %>\n * Description: <%= pkg.description %>\n * Copyright <%= grunt.template.today("yyyy") %>\n * Created by <%= pkg.developer %>\n * on behalf of TERMINALFOUR\n * www.terminalfour.com\n */\n',
        preserveComments : 'some',
        mangle : true
      },//options
      build: {
        src: 'development/terminalfour/src/js/*.js',
        dest: 'www-root/style-assets/js/t4-custom.min.js'
      }//build
    }, //uglify

    sass: {
      dist: {
        options: {
          style: 'expanded',
          //Uncomment the line below to add Compass into the project
          //compass: true,
        },//options
        files: {
          'www-root/style-assets/css/style.css': 'development/terminalfour/src/sass/style.scss'
        }//files
      }//dist
    },//sass

    //Uncomment this region to add csslint to the project
    /*
    csslint: {
      strict: {
        options: {
          csslintrc: '.csslintrc',
          formatters: [
            {id: 'text', dest: 'report/csslint.txt'}
          ]
        },
        src: ['www-root/style-assets/css/style.css']
      }
    },//csslint
    */

    //Uncomment the block below to add text replace to the project
    /*
    replace: {
      css: {
        src: ['www-root/style-assets/css/style.css'],
        overwrite: true,
        replacements: []
      }//css
    },//replace

    */

    //Uncomment the region below to add HTML Validation into the project

    validation: {
      options: {
        reset: true,
        path: 'report/validation-status.json',
        reportpath: 'report/validation-report.json'
      },//options
      files: ['www-root/**/*.html']
    },//validation


    includereplace: {
      dist: {
        options: {
          includesDir: 'development/terminalfour/src/html/includes'
        },
        files: [
          {src: '**/*.html', dest: 'www-root/', expand: true, cwd: 'development/terminalfour/src/html/'}
        ]
      }
    },//includereplace

    copy: {
      main: {
        files: [
          {expand: true, cwd: 'development/lib/', src: ['./**'], dest: 'www-root/style-assets/lib/', filter: 'isFile'}
        ]
      },//main
      media: {
          files: [{
              expand: true, flatten: true, src: ['development/terminalfour/src/media/*'], dest: 'www-root/style-assets/media/', filter: 'isFile'
          }]
      }
    },//copy

    watch: {
      options: { livereload: true },
      sass: {
        files: ['development/**/**/**/*.scss'],

        //Uncomment the line below and delete the other tasks line to add csslint into the project
        //tasks: ['sass:dist','csslint:strict']

        //Uncomment the line below to add in text replace
        //tasks: ['sass:dist','replace-pre']

        tasks: ['sass:dist']

      },//sass

      scripts: {
        files: ['development/terminalfour/src/js/*.js'],
        //Uncomment the line below and delete the other "tasks:['uglify:build'] to add JSHint into the project"
        //tasks: ['jshint','uglify:build']
        tasks: ['uglify:build']
      },//scripts

      htmlcompile: {
        files: ['development/terminalfour/src/html/**/*.html'],
        tasks: ['includereplace']
      },//htmlcompile

      copymedia: {
          files: ['development/terminalfour/src/html/**/*.html', 'development/**/**/**/*.scss'],
          tasks: ['copy:media']
      }

      //Uncomment the region below to add HTML Validation into the project (Dont forget to add a comment on the line above after the HTML compile curly braces right before the comment)
      // html: {
      //   files: ['www-root/**/*.html'],
      //   tasks: ['validation']
      // }

    },//watch

    /*  Grunt SVG sprite
        https://www.npmjs.com/package/grunt-svg-sprite
        For more options see https://github.com/jkphl/svg-sprite/blob/master/docs/configuration.md
    */
    svg_sprite: {

        svg_files: {
            expand: true,
            cwd: 'development/terminalfour/src/media',
            src			: ['**/*.svg'],
            dest		: 'www-root/style-assets/media/',
            options: {
                mode: {
                    defs: true
                }
            }
        }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['server']);

  /*grunt.registerTask('replace-pre', function() {
    var cssReplacements = grunt.file.readJSON('replacements.json');
    grunt.config('replace.css.replacements', cssReplacements);
    grunt.task.run('replace');
  });
  */
  grunt.registerTask('server', [
    'express',
    'watch',
    'express-keepalive'
  ]);

};
