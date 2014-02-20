module.exports = function(grunt) {

  grunt.initConfig({
    compass : {
      dev : {
        options: {              // Target options
          sassDir : 'public/styles',
          cssDir : 'public/styles/build',
          debugInfo : true,
          noLineComments : true
        }
      }
    }
  })
  grunt.loadNpmTasks('grunt-contrib-compass');
};
