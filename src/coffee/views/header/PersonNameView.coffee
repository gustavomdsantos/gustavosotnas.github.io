define [
  "jquery"
  "underscore"
  "backbone"
  "text!templates/views/header/PersonNameView.htm"
  "css!styles/views/header/PersonNameView.css"
], ($, _, Backbone, PersonNameViewTemplate) ->

  class PersonNameView extends Backbone.View

    el: "#header-view"
    template: _.template PersonNameViewTemplate

    personName: ""

    initialize: (name) ->
      @personName = name

    render: ->
      @$el.append @template
        personName: @personName
      @