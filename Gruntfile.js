module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            js: {
                files : {
                    'dist/aping-plugin-jsonloader.min.js' : [
                        'src/aping-jsonloader-directive.js'
                    ]
                }
            },
            options: {
                banner: '\n/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
            }
        },
        watch: {
            minifiyJs: {
                files: [
                    'src/aping-jsonloader-directive.js'
                ],
                tasks: ['uglify'],
                options: {
                    spawn: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};

