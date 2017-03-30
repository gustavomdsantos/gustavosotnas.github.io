###
gustavosotnas\gustavosotnas.github.io

Licensed under the MIT license
For full copyright and license information, please see the LICENSE file

@author     Gustavo Moraes (https://gustavosotnas.github.io) <gustavosotnas1@gmail.com>
@copyright  2017 Gustavo Moraes (https://gustavosotnas.github.io)
@link       https://github.com/gustavosotnas/gustavosotnas.github.io
@license    http://choosealicense.com/licenses/MIT  MIT License
###

module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.initConfig
    watch:
      coffee:
        files: 'src/coffee/*.coffee'
        tasks: ['coffee:compile']

    coffee:
      compile:
        expand: true,
        flatten: true,
        cwd: "#{__dirname}/src/coffee",
        src: ['**/*.coffee'],
        dest: 'assets/js/',
        ext: '.js'