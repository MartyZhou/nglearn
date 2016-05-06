module.exports = function(grunt) {
    grunt.loadNpmTasks('ntypescript');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        ntypescript: {
            options: {
                project: '.'
            },
	    default: {}
        },

	connect: {
	    server: {
		options: {
		    port: 5555,
		    base: 'src'
		}
	    }
	},

	watch: {
	}
    });
 
    grunt.registerTask('default', ['ntypescript']);
    grunt.registerTask('dev', ['ntypescript', 'connect', 'watch']);
};
