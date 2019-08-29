// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: './_scss/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    './css/index.css': './_scss/index.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        './*.css',
                        './css/*.css',
                        './*.html',
                        './**.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        
        cssmin: {
          options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              './css/styles.min.css': ['./css/styles.css']
            }
          }
        },
        
        concat_css:{
            options:{
                baseDir: './css/'
            },
            files:{
                'index.css' : ['index.css']
            }
        },
        
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files:{
                    './js/main.min.js' : ['./js/jquery.min.js', './js/bootstrap.js', './js/main.js']
                }
            }
        },
        
        bowercopy: {
          options: {
            srcPrefix: './bower_components'
          },
          scripts: {
            options: {
              destPrefix: 'app/vendor'
            },
            files: {
              'js/vendor/jquery/jquery.min.js': 'jquery/dist/jquery.min.js',
              'js/vendor/angular/angular.min.js': 'angular/angular.min.js',
              'js/vendor/angular-route/angular-route.min.js': 'angular-route/angular-route.min.js',
              'js/vendor/angular-animate/angular-animate.js': 'angular-animate/angular-animate.js',
              'js/vendor/ngmap/ng-map.min.js': 'ngmap/build/scripts/ng-map.min.js',
              'css/vendor/boostrap/css/boostrap.min.css' : 'bootstrap/dist/css/bootstrap.min.css',
              'css/vendor/components-font-awesome/css/font-awesome.min.css' : 'components-font-awesome/css/font-awesome.min.css'
            }
          }
        }
    }); 
    
    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bowercopy');
    
    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('minify', ['cssmin', 'uglify']);
    grunt.registerTask('bower', ['bowercopy']);
};