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
        relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors 
    },
    files: {
        src: ['index.html']
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
  grunt.registerTask('default', ['validation','bootlint']);

};