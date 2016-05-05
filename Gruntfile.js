module.exports = function(grunt) {
    grunt.loadNpmTasks('ntypescript');
 
    grunt.initConfig({
        ntypescript: {
            options: {
                project: '.'
            },
	    default: {}
        },
    });
 
    grunt.registerTask('default', ['ntypescript']);
};
