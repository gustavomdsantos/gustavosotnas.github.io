define [
  "jquery"
  "underscore"
  "backbone"
  "text!templates/views/header/PersonNameView.htm"
  "css!styles/views/header/PersonNameView.css"
], ($, _, Backbone, PersonNameViewTemplate) ->

  ###*
   * View responsável por exibir o nome do proprietário do site.
   *
   * @extends {Backbone.View}
   * @example
   * personNameView = new PersonNameView "Gustavo Moraes"
   * personNameView.render()
   *
   * @author gustavosotnas
  ###
  class PersonNameView extends Backbone.View

    el: "#header-view"
    template: _.template PersonNameViewTemplate

    ###*
     * O nome do proprietário do site.
     * @type {String}
    ###
    personName: ""

    ###*
     * Construtor de PersonNameView.
     * @param  {String} name o nome do proprietário do site.
    ###
    initialize: (name) ->
      @personName = name

    ###*
     * Renderiza a view com o nome do proprietário do site.
     *
     * @uses this.template template da view.
     * @uses this.personName o nome do proprietário do site.
     * @return {PersonNameView} ela mesma.
    ###
    render: ->
      @$el.append @template
        personName: @personName
      @