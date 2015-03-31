module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        'babel': {
            options: {
                optional: ['runtime'],
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
                files: {
                    'build/grunt/bundle.js': 'build/grunt/application.js'
                }
            }
        }

    });

    grunt.registerTask('default', ['babel', 'browserify']);

};
