module.exports = function(grunt) {
    grunt.loadNpmTasks('ntypescript');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    
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
	},

	karma: {
	    build: {
		configFile: 'karma.conf.js',
		browsers: ['PhantomJS']
	    },
	    debug: {
		configFile: 'karma.conf.js'
	    }
	}
    });
 
    grunt.registerTask('default', ['ntypescript']);
    grunt.registerTask('dev', ['ntypescript', 'connect', 'watch']);
    grunt.registerTask('unit', ['ntypescript', 'karma:debug']);
};
