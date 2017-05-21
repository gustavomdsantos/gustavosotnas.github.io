define [
  "jquery"
  "underscore"
  "backbone"
  "text!templates/views/AppView.htm"
  "text!templates/fragments/TintBrowserToolbar.htm"
  "css!styles/views/AppView.css"
], ($, _, Backbone, AppViewTemplate, TintBrowserToolbarTemplate) ->

  class AppView extends Backbone.View

    el: 'body'
    appColor: "#009688" # Teal 500

    _template = _.template AppViewTemplate
    _tintBrowserToolbarTemplate = _.template TintBrowserToolbarTemplate

    initialize: ->
      console.log "Pronto para renderizar AppView"

    _tintBrowserToolbar = (toolbarColor) ->
      $('head').append _tintBrowserToolbarTemplate
        color: toolbarColor

    render: ->
      @$el.html _template
      $('#helloworld').append ' <em>com jQuery</em>'
      _tintBrowserToolbar @appColor

      console.log "Renderizada AppView"

      @