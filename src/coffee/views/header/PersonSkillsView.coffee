define [
  "jquery"
  "underscore"
  "backbone"
  "typed"
  "text!templates/views/header/PersonSkillsView.htm"
  "css!styles/views/header/PersonSkillsView.css"
], ($, _, Backbone, Typed, PersonSkillsViewTemplate) ->

  class PersonSkillsView extends Backbone.View

    el: "#header-view"
    template: _.template PersonSkillsViewTemplate

    personSkills: []

    initialize: (skills) ->
      @personSkills = skills

    _enableTypedSkills = ->
      $("#typed-person-skills").typed
        stringsElement: $("#person-skills-view")
        startDelay: 500
        typeSpeed: 80
        backDelay: 3000
        backSpeed: 10
        loop: true

    render: ->
      @$el.append @template
        personSkills: @personSkills
      _enableTypedSkills()
      @