define [
  "jquery"
  "underscore"
  "backbone"
  "css!styles/views/AppView.css"
], ($, _, Backbone) ->

  class AppView extends Backbone.View

    el: 'body'
    appColor: "#009688" # Teal 500

    _template = _.template """
    <header>
      <div class="container">
        <h1 id="helloworld">Hello World</h1>
      </div>
    </header>
    """

    _tintBrowserToolbarTemplate = _.template """
    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="<%= color %>">
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="<%= color %>">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="<%= color %>">
    """

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