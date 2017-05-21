define [
  "jquery"
  "underscore"
  "backbone"
  "views/HeaderView"
  "text!templates/views/AppView.htm"
], ($, _, Backbone, HeaderView, AppViewTemplate) ->

  class AppView extends Backbone.View

    el: 'body'
    _subViews = [
      new HeaderView
    ]

    _template = _.template AppViewTemplate

    renderSubViews: ->
      _.each _subViews, (subView) ->
        subView.render()

    render: ->
      @$el.html _template
      @renderSubViews()

      @