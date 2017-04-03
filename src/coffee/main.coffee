define [
    "views/app" # executa app
], (App) ->

    class Main
        constructor: () ->
            app = new App
            $('body').html app.render().el
	        console.log("====================================\n
                         gustavosotnas.github.io is running!\n
                         ===================================")
    return new Main() # cria uma classe e executa ela mesma