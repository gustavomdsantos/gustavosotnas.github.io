define [
  "jquery"
  "underscore"
  "backbone"
  "typed"
  "text!templates/views/header/PersonSkillsView.htm"
  "css!styles/views/header/PersonSkillsView.css"
], ($, _, Backbone, Typed, PersonSkillsViewTemplate) ->

  ###
  View responsável por exibir a lista de habilidades do proprietário do site
  na forma de animação de uma pessoa digitando e apagando texto num editor de
  texto.

  @extend {Backbone.View}
  @example personSkillsView = new PersonSkillsView ["Engenheiro de Software", "Artista gráfico", "Produtor musical"]
  personSkillsView.render()

  @author gustavosotnas
  ###
  class PersonSkillsView extends Backbone.View

    el: "#header-view"
    template: _.template PersonSkillsViewTemplate

    ###
    A lista de habilidades do proprietário do site.
    @type {String[]}
    ###
    personSkills: []

    ###
    Construtor de PersonSkillsView.
    @param  {String[]} skills a lista de habilidades do proprietário do site.
    ###
    initialize: (skills) ->
      @personSkills = skills

    ###
    Ativa a animação de digitação da lista de habilidades do proprietário do
    site, usando a biblioteca Typed.js

    @uses Typed lib Typed.js, faz animação com a digitação de uma pessoa.
    @see https://github.com/mattboldt/typed.js
    ###
    _enableTypedSkills = ->
      $("#typed-person-skills").typed
        stringsElement: $("#person-skills-view")
        startDelay: 500
        typeSpeed: 80
        backDelay: 3000
        backSpeed: 10
        loop: true

    ###
    Renderiza a view com a lista de habilidades.

    @uses this.template template da view.
    @uses this.personSkills a lista de habilidades do proprietário do site.
    @return {PersonSkillsView} ela mesma.
    ###
    render: ->
      @$el.append @template
        personSkills: @personSkills
      _enableTypedSkills()
      @