define [
  "jquery"
  "underscore"
  "backbone"
  "css!styles/appView.css"
], ($, _, Backbone) ->

  class AppView extends Backbone.View

    el: 'body'

    _template = _.template """
    <h1 id="helloworld">Hello World</h1>
    """

    initialize: ->
      console.log "Pronto para renderizar AppView"

    render: ->
      @$el.html _template
      $('#helloworld').append ' <em>com jQuery</em>'
      console.log "Renderizada AppView"

      @