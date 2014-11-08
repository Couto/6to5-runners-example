module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-6to5');

    grunt.initConfig({
        '6to5': {
            options: {
                sourceMap: true,
                modules: 'umd'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['**/*.js'],
                    dest: 'build/grunt'
                }]
            }
        }
    });

    grunt.registerTask('default', ['6to5']);

};
