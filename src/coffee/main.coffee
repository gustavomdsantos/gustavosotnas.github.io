define [
	"jquery"
	"underscore"
	"backbone"
    "views/app" # executa app
], ($, _, Backbone) ->

    class Main
        constructor: () ->
	        console.log("====================================\n
                         gustavosotnas.github.io is running!\n
                         ===================================")
    return new Main() # cria uma classe e executa ela mesma