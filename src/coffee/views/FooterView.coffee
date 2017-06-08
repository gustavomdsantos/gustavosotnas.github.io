define [
  "jquery"
  "underscore"
  "backbone"
  "text!templates/views/FooterView.htm"
  "css!styles/views/FooterView.css"
], ($, _, Backbone, FooterViewTemplate) ->

  ###*
   * View responsável pelo rodapé da página.
   *
   * @extends {Backbone.View}
   * @example
   * footerView = new FooterView
   * footerView.render()
   *
   * @author gustavosotnas
  ###
  class FooterView extends Backbone.View

    el: 'footer'
    template: _.template FooterViewTemplate

    ###*
     * Renderiza a view.
     *
     * @uses this.template template da view.
     * @return {FooterView} ela mesma.
    ###
    render: ->
      @$el.html @template
      @