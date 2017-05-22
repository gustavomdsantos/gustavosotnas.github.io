define [
  "jquery"
  "underscore"
  "backbone"
  "text!templates/views/FooterView.htm"
  "css!styles/views/FooterView.css"
], ($, _, Backbone, FooterViewTemplate) ->

  class FooterView extends Backbone.View

    el: 'footer'

    _template = _.template FooterViewTemplate

    render: ->
      $('footer').html _template # Estranhamente o $el não funciona aqui
      @