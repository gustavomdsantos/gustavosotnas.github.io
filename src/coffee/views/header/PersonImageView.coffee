define [
  "jquery"
  "underscore"
  "backbone"
  "text!templates/views/header/PersonImageView.htm"
  "css!styles/views/header/PersonImageView.css"
], ($, _, Backbone, PersonImageViewTemplate) ->

  ###
  View responsável por exibir a imagem do proprietário do site.

  @extend {Backbone.View}
  @example personImageView = new PersonImageView "Gustavo Moraes", "https://pt.gravatar.com/userimage/101482200/5cf69c93667f2dd15fbbd97dc5ed0a44.png?size=256"
  personImageView.render()

  @author gustavosotnas
  ###
  class PersonImageView extends Backbone.View

    el: "#header-view"
    template: _.template PersonImageViewTemplate

    ###
    O nome do proprietário do site.
    @type {String}
    ###
    personName: ""
    ###
    A URL da imagem do proprietário do site.
    @type {String}
    ###
    personImage: ""

    ###
    Construtor de PersonImageView.

    @param  {String} name o nome do proprietário do site.
    @param  {String} image a URL da imagem do proprietário do site.
    ###
    initialize: (name, image) ->
      @personName = name
      @personImage = image

    ###
    Renderiza a view com o nome e imagem do proprietário do site.

    @uses this.template template da view.
    @uses this.personName o nome do proprietário do site.
    @uses this.personImage a URL da imagem do proprietário do site.
    @return {PersonImageView} ela mesma.
    ###
    render: ->
      @$el.append @template
        personName: @personName
        personImage: @personImage
      @