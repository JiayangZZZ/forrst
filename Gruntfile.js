module.exports = function(grunt) {

  grunt.initConfig({
    compass : {
      dev : {
        options: {              // Target options
          sassDir : 'public/styles',
          cssDir : 'public/styles/build',
          noLineComments : true
        }
      }
    }
  })
  grunt.loadNpmTasks('grunt-contrib-compass');
};
