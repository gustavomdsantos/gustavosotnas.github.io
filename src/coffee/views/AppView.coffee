define [
  "jquery"
  "underscore"
  "backbone"
  "views/HeaderView"
  "views/FooterView"
  "text!templates/views/AppView.htm"
], ($, _, Backbone, HeaderView, FooterView, AppViewTemplate) ->

  class AppView extends Backbone.View

    el: 'body'
    template: _.template AppViewTemplate
    subViews: [
      HeaderView
      FooterView
    ]

    renderSubViews: ->
      _.each @subViews, (subView) ->
        _subView = new subView
        _subView.render()

    render: ->
      @$el.html @template
      @renderSubViews()

      @