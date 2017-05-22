define [
  "jquery"
  "underscore"
  "backbone"
  "text!templates/views/header/PersonImageView.htm"
  "css!styles/views/header/PersonImageView.css"
], ($, _, Backbone, PersonImageViewTemplate) ->

  class PersonImageView extends Backbone.View

    el: "#header-view"
    template: _.template PersonImageViewTemplate

    personName: ""
    personImage: ""

    initialize: (name, image) ->
      @personName = name
      @personImage = image

    render: ->
      @$el.append @template
        personName: @personName
        personImage: @personImage
      @