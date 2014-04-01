module.exports = function(grunt) {
  // Load the various tasks required
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-text-replace');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    bower: {
      install: {
         options: {
           targetDir: '_/components/lib',
           layout: 'byComponent',
           cleanup: true
         }//options
      }//install
    },//bower
    
    jshint: {
      options: {
        jshintrc : '.jshintrc'
      },//options
      all : ['_/components/terminalfour/js/*.js']
    },//jshint
    
    uglify: {
      options: {
        banner: '<%= pkg.warning %>/**\n * Client: <%= pkg.clientName %>\n * Project: <%= pkg.projectName %>\n * Version: <%= pkg.version %>\n * Description: <%= pkg.description %>\n * Copyright <%= grunt.template.today("yyyy") %>\n * Created by <%= pkg.developer %>\n * on behalf of TERMINALFOUR\n * www.terminalfour.com\n */\n',
        preserveComments : 'some',
        mangle : true
      },//options
      build: {
        src: '_/components/terminalfour/js/*.js',
        dest: 'style-assets/js/t4-custom.min.js'
      }//build
    }, //uglify
    
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: true,
          banner : '<%= pkg.warning %>/**\n * Client: <%= pkg.clientName %>\n * Project: <%= pkg.projectName %>\n * Version: <%= pkg.version %>\n * Description: <%= pkg.description %>\n * Copyright <%= grunt.template.today("yyyy") %>\n * Created by <%= pkg.developer %>\n * on behalf of TERMINALFOUR\n * www.terminalfour.com\n */\n'
        },//options
        files: {
          'style-assets/css/framework.css': '_/components/terminalfour/sass/framework.scss',
          'style-assets/css/style-local.css': '_/components/terminalfour/sass/style.scss',
          'style-assets/css/style.css': '_/components/terminalfour/sass/style.scss'
        }//files
      }//dist
    },//sass
    
    csslint: {
      strict: {
        options: {
          csslintrc: '.csslintrc',
          formatters: [
            {id: 'text', dest: 'report/csslint.txt'}
          ]
        },
        src: ['style-assets/css/style.css']
      }
    },//csslint
    
    replace: {
      css: {
        src: ['style-assets/css/style.css'],
        overwrite: true,
        replacements: []
      }//css
    },//replace
    
    validation: {
      options: {
        reset: true,
        path: 'report/validation-status.json',
        reportpath: 'report/validation-report.json'
      },//options
      files: ['*.html']
    },//validation

    watch: {
      options: { livereload: true },
      sass: {
        files: ['_/components/**/*.scss'],
        tasks: ['sass:dist','csslint:strict','replace-pre']
      },//sass
      scripts: {
        files: ['_/components/terminalfour/js/*.js'],
        tasks: ['jshint','uglify:build']
      },//scripts
      html: {
        files: ['html/**/*.html'],
        tasks: ['validation']
      }//html
    },//watch
    
  });

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  
  grunt.registerTask('replace-pre', function() {
    var cssReplacements = grunt.file.readJSON('replacements.json');
    grunt.config('replace.css.replacements', cssReplacements);
    grunt.task.run('replace');
  });

};