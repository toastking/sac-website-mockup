module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    validation: {
    options: {
        reset: grunt.option('reset') || false,
        stoponerror: false,
        remoteFiles: ['index.html'], //or 
        relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors 
    },
    files: {
        src: ['<%= yeoman.app %>/*.html',
              '!<%= yeoman.app %>/index.html',
              '!<%= yeoman.app %>/modules.html',
              '!<%= yeoman.app %>/404.html']
    }
},
bootlint: {
    options: {
      stoponerror: false,
      relaxerror: []
    },
    files: ['index.html'],
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-bootlint');

  // Default task(s).
  grunt.registerTask('default', ['validation']);
  grunt.registerTask('default', ['bootlint']);
  

};