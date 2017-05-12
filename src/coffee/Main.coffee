define [
    "views/AppView" # faz download do código do AppView
], (AppView) ->

    class Main
        constructor: ->
            appView = new AppView
            appView.render()
	        console.log(" ===================================\n
                         gustavosotnas.github.io is running!\n
                         ===================================")
    return new Main() # cria uma classe e executa ela mesma