define [
    "views/AppView" # executa AppView
], (AppView) ->

    class Main
        constructor: () ->
            appView = new AppView
            $('body').html appView.render().el
	        console.log("====================================\n
                         gustavosotnas.github.io is running!\n
                         ===================================")
    return new Main() # cria uma classe e executa ela mesma