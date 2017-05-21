define [
  "jquery"
  "underscore"
  "backbone"
  "views/HeaderView"
  "text!templates/views/AppView.htm"
], ($, _, Backbone, HeaderView, AppViewTemplate) ->

  class AppView extends Backbone.View

    el: 'body'

    _template = _.template AppViewTemplate

    render: ->
      @$el.html _template
      headerView = new HeaderView
      headerView.render()

      @