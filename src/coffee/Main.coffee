define [
  "views/AppView" # faz download do código do AppView
  "text!templates/fragments/TintBrowserToolbar.htm"
], (AppView, TintBrowserToolbarTemplate) ->

  ###
  # Classe principal do gustavosotnas.github.io. É criado um novo app e dado
  # comando para renderizar a página.
  #
  # @author gustavosotnas
  ###
  class Main

    ###*
     * Cor base do gustavosotnas.github.io: Google's Material Design Teal 500.
     * @type {String}
    ###
    _appColor = "#009688"
    ###*
     * Template das tags HTML que definem a cor da toolbar para navegadores para
     * dispositivos móveis.
     * @type {_.template}
    ###
    _template = _.template TintBrowserToolbarTemplate

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

      Main.tintBrowserToolbar _appColor

      console.log(" ===================================\n
                    gustavosotnas.github.io is running!\n
                    ===================================")

    ###*
     * @static Função utilitária que faz "pintar" a toolbar de navegadores para
     * dispositivos móveis (Google Chrome for Android, por exemplo).
     *
     * @param {String} toolbarColor a hex color da toolbar desejada
     * @example
     * Main.tintBrowserToolbar("#FF0000")
    ###
    @tintBrowserToolbar: (toolbarColor) ->
      $('head').append _template
        color: toolbarColor

  # cria uma instância da classe e executa ela mesma
  new Main()
  # faz "export" dos métodos estáticos (@static) de Main para ficarem globais
  window.Main = Main