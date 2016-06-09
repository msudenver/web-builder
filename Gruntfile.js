module.exports = function(grunt) {
  // Load the various tasks required
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-copy');


  //Uncommment the line below to add JSHint into the project (Ctrl+f to find all regions needed to be uncommented in order to add in JSHint)
  //grunt.loadNpmTasks('grunt-contrib-jshint');

  //Uncomment the line below to add csslint to the project (Ctrl+f to find all regions needed to be uncommented in order to add in csslint)
  //grunt.loadNpmTasks('grunt-contrib-csslint');

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
           targetDir: '_/components/lib',
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
      all : ['_/components/terminalfour/js/*.js']
    },//jshint
    */

    uglify: {
      options: {
        banner: '<%= pkg.warning %>/**\n * Client: <%= pkg.clientName %>\n * Project: <%= pkg.projectName %>\n * Version: <%= pkg.version %>\n * Description: <%= pkg.description %>\n * Copyright <%= grunt.template.today("yyyy") %>\n * Created by <%= pkg.developer %>\n * on behalf of TERMINALFOUR\n * www.terminalfour.com\n */\n',
        preserveComments : 'some',
        mangle : true
      },//options
      build: {
        src: '_/components/terminalfour/js/*.js',
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
          'www-root/style-assets/css/framework.css': '_/components/terminalfour/sass/framework.scss',
          'www-root/style-assets/css/style-local.css': '_/components/terminalfour/sass/style.scss',
          'www-root/style-assets/css/style.css': '_/components/terminalfour/sass/style.scss'
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

    replace: {
      css: {
        src: ['www-root/style-assets/css/style.css'],
        overwrite: true,
        replacements: []
      }//css
    },//replace
    
    //Uncomment the region below to add HTML Validation into the project
    /*
    validation: {
      options: {
        reset: true,
        path: 'report/validation-status.json',
        reportpath: 'report/validation-report.json'
      },//options
      files: ['*.html']
    },//validation
    */

    includereplace: {
      dist: {
        options: {
          includesDir: '_/components/terminalfour/html/includes'
        },
        files: [
          {src: '**/*.html', dest: 'www-root/', expand: true, cwd: '_/components/terminalfour/html/src/'}
        ]
      }
    },//includereplace
    
    copy: {
      main: {
        files: [
          {expand: true, cwd: '_/components/lib/', src: ['./**'], dest: 'www-root/style-assets/lib/', filter: 'isFile'}
        ]
      }//main
    },//copy

    watch: {
      options: { livereload: true },
      sass: {
        files: ['_/components/**/*.scss'],
        
        //Uncomment the line below and delete the other tasks line to add csslint into the project
        //tasks: ['sass:dist','csslint:strict','replace-pre']
        tasks: ['sass:dist','replace-pre']
      },//sass
      scripts: {
        files: ['_/components/terminalfour/js/*.js'],
        //Uncomment the line below and delete the other "tasks:['uglify:build'] to add JSHint into the project"
        //tasks: ['jshint','uglify:build']
        tasks: ['uglify:build']
      },//scripts
      htmlcompile: {
        files: ['_/components/terminalfour/html/src/**/*.html'],
        tasks: ['includereplace']
      }//htmlcompile
      
      //Uncomment the region below to add HTML Validation into the project (Dont forget to add a comment on the line above after the HTML compile curly braces right before the comment)
      // html: {
      //   files: ['www-root/**/*.html'],
      //   tasks: ['validation']
      // }

    },//watch
    
  });

  // Default task(s).
  grunt.registerTask('default', ['server']);
  
  grunt.registerTask('replace-pre', function() {
    var cssReplacements = grunt.file.readJSON('replacements.json');
    grunt.config('replace.css.replacements', cssReplacements);
    grunt.task.run('replace');
  });
  
  grunt.registerTask('server', [
    'express',
    'copy',
    'watch',
    'express-keepalive'
  ]);

};