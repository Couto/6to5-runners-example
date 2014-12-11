module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-6to5');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        '6to5': {
            options: {
                runtime: true,
                experimental: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['**/*.js'],
                    dest: 'build/grunt'
                }]
            }
        },

        'browserify': {
            dist: {
                'build/grunt/bundle.js': ['build/grunt/application.js']
            }
        }

    });

    grunt.registerTask('default', ['6to5', 'browserify']);

};
