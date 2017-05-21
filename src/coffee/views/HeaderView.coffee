define [
  "jquery"
  "underscore"
  "backbone"
  "text!templates/views/HeaderView.htm"
  "css!styles/views/HeaderView.css"
], ($, _, Backbone, HeaderViewTemplate) ->

  class HeaderView extends Backbone.View

    el: 'header'

    _template = _.template HeaderViewTemplate

    render: ->
      @$el.html _template
      @