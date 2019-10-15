module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            build: {
                files: {
                    'dist/css/havryliuk_header.css': 'src/css/main.less'
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'dist/css/havryliuk_header.min.css': 'dist/css/havryliuk_header.css'
                }
            }
        },
        watch: {
            css: {
                files: 'src/css/**/*.less',
                tasks: ['less', 'cssmin'],
            }
        }
});
    grunt.registerTask('default', ['less', 'cssmin']);
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
