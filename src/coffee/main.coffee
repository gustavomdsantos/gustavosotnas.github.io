define [
    "views/app" # executa app
], () ->

    class Main
        constructor: () ->
	        console.log("====================================\n
                         gustavosotnas.github.io is running!\n
                         ===================================")
    return new Main() # cria uma classe e executa ela mesma