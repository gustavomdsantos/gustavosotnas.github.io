define [
  "jquery"
  "underscore"
  "backbone"
  "jquery-css-in-hex"
  "browser-toolbar-tinter"
  "views/HeaderView"
  "views/FooterView"
  "text!templates/views/AppView.htm"
], ($, _, Backbone, jQueryCSSinHEX, BrowserToolbarTinter, HeaderView,
  FooterView, AppViewTemplate) ->

  ###*
   * View-pai da aplicação.
   *
   * @extends {Backbone.View}
   * @example
   * appView = new AppView
   * appView.render()
   *
   * @author gustavosotnas
  ###
  class AppView extends Backbone.View

    ###*
     * Escopo da view.
     * @type {String}
    ###
    el: 'body'
    ###*
     * Template no formato Underscore.js Template que define o esqueleto da
     * estrutura da página HTML.
     *
     * @type {_.template}
    ###
    template: _.template AppViewTemplate

    ###*
     * Lista de views que serão renderizadas dentro da view.
     * @type {Backbone.View[]}
    ###
    subViews: [
      HeaderView
      FooterView
    ]

    ###*
     * Instancia e renderiza automaticamente todas as subviews de uma view.
     * @uses this.subViews a lista de views.
    ###
    renderSubViews: ->
      for subView in @subViews
        _subView = new subView
        _subView.render()

    ###*
     * Renderiza a view de acordo com o seu template e suas possíveis subviews
     * que tiverem sido definidas na classe, além de tingir a toolbar de
     * navegadores para dispositivos móveis (usando o "BrowserToolbarTinter")
     * com a mesma cor usada no header do site.
     *
     * @uses this.template template da view.
     * @return {AppView} ela mesma.
    ###
    render: ->
      @$el.html @template
      @renderSubViews()

      BrowserToolbarTinter.tint $("header").css "background-color"

      @