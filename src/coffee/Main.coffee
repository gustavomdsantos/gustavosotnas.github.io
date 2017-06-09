define [
  "views/AppView" # faz download do código do AppView
], (AppView) ->

  ###
  # Classe principal do gustavosotnas.github.io. É criado um novo app e dado
  # comando para renderizar a página.
  #
  # @author gustavosotnas
  ###
  class Main
    ###*
     * @main gustavosotnas.github.io
     *
     * Cria uma instância de AppView (principal view do web app) a renderiza,
     * define cor da toolbar de navegadores para dispositivos móveis e exibe uma
     * mensagem de informação no console de que o web app está rodando.
    ###
    constructor: ->
      appView = new AppView
      appView.render()

      console.log(" ===================================\n
                    gustavosotnas.github.io is running!\n
                    ===================================")

  # cria uma instância da classe e executa ela mesma
  new Main()