define [
  "views/AppView" # faz download do código do AppView
  "text!templates/fragments/TintBrowserToolbar.htm"
], (AppView, TintBrowserToolbarTemplate) ->

  class Main

    _appColor = "#009688" # Teal 500
    _template = _.template TintBrowserToolbarTemplate

    constructor: ->
      appView = new AppView
      appView.render()

      _tintBrowserToolbar _appColor

      console.log(" ===================================\n
                    gustavosotnas.github.io is running!\n
                    ===================================")

    _tintBrowserToolbar = (toolbarColor) ->
      $('head').append _template
        color: toolbarColor

  return new Main() # cria uma classe e executa ela mesma