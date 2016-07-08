module.exports = (grunt) ->

  # project configuration
  grunt.initConfig(
    pkg: grunt.file.readJSON('package.json')
    coffee:
      compile:
        files: [
          expand: true
          cwd: 'sources/'
          src: ['*.coffee']
          dest: ''
          ext: '.js'
        ,
          expand: true
          cwd: 'sources/scripts/'
          src: ['**/*.coffee']
          dest: 'public/app/js/'
          ext: '.js'
        ]
      compileJoined:
        options:
          join: true
        files: [
          'public/app/js/widgets.js': ['sources/scripts/widgets/**/*.coffee']
          'public/app/js/alytics-test.js': ['sources/scripts/alytics-test/**/*.coffee']
        ]
    jade:
      compile:
        options:
          client: true
          basedir: './'
          namespace: 'JST'
          compileDebug: false
          processName: (filepath) ->
            content = grunt.file.read(filepath)
            match = content.match(/\/\/-\s\[(\S+?)\]/)
            if match?.length
              match[1]
            else
              filepath.replace('sources/templates/', '').replace('sources/scripts/', '').replace('.jade', '')
        files:
          'public/app/js/templates.js': ['sources/templates/**/*.jade', 'sources/scripts/**/*.jade']
      index:
        files:
          'public/index.html': 'sources/views/layouts/alytics-test.jade'
    sass:
      compile:
        files: [
          expand: true
          cwd: 'sources/styles/'
          src: ['**/*.sass']
          dest: 'public/app/css/'
          ext: '.css'
        ]
    watch:
      coffee:
        files: ['sources/**/*.coffee']
        tasks: ['coffee', 'coffee:compileJoined']
      jade:
        files: ['sources/**/*.jade']
        tasks: ['jade']
      sass:
        files: ['sources/**/*.sass']
        tasks: ['sass']
    clean:
      dev: ['public/app/js', 'public/app/css', 'public/**/*.html']
  )

  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')

  # default tasks
  grunt.registerTask('default', ['clean', 'coffee', 'jade', 'sass', 'watch'])
