module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'client.tests/karma.conf.js',
                options: {
                    files: [
                        '../bower_components/jquery/dist/jquery.min.js',
                        '../bower_components/angular/angular.min.js',
                        '../bower_components/angular-mocks/angular-mocks.js',
                        '../app/scripts/app.js',
                        'specs/**/*.js'
                    ]
                }
            }
        },
        protractor: {
            options: {
                keepAlive: true,
                noColor: false
            },
            local: {
                options: {
                    configFile: "e2e.tests/e2e.conf.js"
                }
            },
            browserstack: {
                options: {
                    configFile: "e2e.tests/browserstack.conf.js"
                }
            },
            crossbrowser: {
                options: {
                    configFile: "e2e.tests/crossbrowser.conf.js"
                }
            }
        },
        galen: {
            local: {
                // Check all test.js files in the test directory
                src: ['ui.tests/app.js'],
                options: {
                    // Run test on the localhost:3000
                    url: 'http://localhost:9002',
                    devices: {

                        // Run tests in firefox browser, scaled to basic desktop resolution
                        desktop: {
                            deviceName: 'desktop',
                            browser: 'firefox',
                            size: '1280x800'
                        },

                        // Also run them in firefox, but scaled to iPad screen size
                        tablet: {
                            deviceName: 'tablet',
                            browser: 'firefox',
                            size: '768x576'
                        }
                    }
                }
            }
        },
        connect: {
            server: {
                options: {
                    hostname: '*',
                    port: 9002,
                    base: 'app'
                }
            },
            keepalive: {
                options: {
                    hostname: '*',
                    port: 9002,
                    base: 'app',
                    keepalive: true
                }
            }
        },
        copy: {
            libs: {
                files: [
                    // includes files within path
                    {expand: true, cwd: 'bower_components/angular/', src: 'angular.min.js', dest: 'app/scripts/libs/', flatten: true, filter: 'isFile'},
                    {expand: true, cwd: 'bower_components/jquery/dist/', src: 'jquery.min.js', dest: 'app/scripts/libs/', flatten: true, filter: 'isFile'}
                ]
            }
        },
        watch: {
            css: {
                options: {
                    livereload: false
                },
                files: ['app/styles/*.css'],
                tasks: ['galen']
            },
            karma: {
                options: {
                    livereload: false
                },
                files: ['app/scripts/**/*.js', 'client.tests/specs/**/*.js'],
                tasks: ['karma']
            }
        }
    });

    grunt.registerTask('e2e.tests.local', ['connect:server', 'protractor:local']);
    grunt.registerTask('e2e.tests.browserstack', ['connect:server', 'protractor:browserstack']);
    grunt.registerTask('e2e.tests.crossbrowser', ['connect:server', 'protractor:crossbrowser']);
    grunt.registerTask('ui.tests', ['connect:server', 'galen']);
    grunt.registerTask('client.tests', ['karma', 'watch']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-galen');
};