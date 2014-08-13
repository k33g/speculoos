module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json'),
    npmTasks = [
      'grunt-contrib-copy',
      'grunt-contrib-uglify'
    ];

  grunt.initConfig({
    pkg: pkg,
    uglify: {
      main: {
        options: {
          sourceMap: true
        },
        files: {
          'speculoos.min.js': 'speculoos.js'
        }
      }
    },
    copy: {
      main: {
        src: 'dev/lib/speculoos.js',
        dest: './speculoos.js'
      }
    }
  });

  npmTasks.forEach(function(task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask('default', ['copy', 'uglify']);
};