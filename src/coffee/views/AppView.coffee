define [
  "jquery"
  "underscore"
  "backbone"
  "css!styles/appView.css"
], ($, _, Backbone) ->

  class AppView extends Backbone.View

    el: '#helloworld'

    initialize: ->
      console.log "Pronto para renderizar AppView"

    render: ->
      @$el.append ' <em>com jQuery</em>'
      console.log "Renderizada AppView"

      @