define [
  "jquery"
  "underscore"
  "backbone"
  "text!templates/views/FooterView.htm"
  "css!styles/views/FooterView.css"
], ($, _, Backbone, FooterViewTemplate) ->

  class FooterView extends Backbone.View

    el: 'footer'
    template: _.template FooterViewTemplate

    render: ->
      @$el.html @template
      @