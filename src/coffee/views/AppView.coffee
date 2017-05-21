define [
  "jquery"
  "underscore"
  "backbone"
  "views/HeaderView"
  "text!templates/views/AppView.htm"
], ($, _, Backbone, HeaderView, AppViewTemplate) ->

  class AppView extends Backbone.View

    el: 'body'
    subViews:
      headerView: new HeaderView

    _template = _.template AppViewTemplate

    render: ->
      @$el.html _template
      @renderSubViews()

      @

    renderSubViews: ->
      _.each @subViews, (subView) ->
        subView.render()