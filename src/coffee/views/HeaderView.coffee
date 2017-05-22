define [
  "jquery"
  "underscore"
  "backbone"
  "views/header/PersonImageView"
  "views/header/PersonNameView"
  "views/header/PersonSkillsView"
  "models/PersonModel"
  "text!templates/views/HeaderView.htm"
  "css!styles/views/HeaderView.css"
], ($, _, Backbone, PersonImageView, PersonNameView, PersonSkillsView, Person, HeaderViewTemplate) ->

  class HeaderView extends Backbone.View

    el: 'header'
    template: _.template HeaderViewTemplate
    subViews: [
      PersonImageView
      PersonNameView
      PersonSkillsView
    ]
    person: new Person
      name: "Gustavo Moraes"
      skills: [
        "Engenheiro de Software"
        "Artista gráfico"
        "Produtor musical"
      ]
      profileImage:
        "https://pt.gravatar.com/userimage/101482200/5cf69c93667f2dd15fbbd97dc5ed0a44.png?size=256"
      email: "gustavosotnas1@gmail.com"
      socialNetworks:
        blogsite: "https://about.me/gustavosotnas"
        linkedin: "https://www.linkedin.com/in/gustavosotnas"
        facebook: "https://www.facebook.com/zuck"
        instagram: "https://www.instagram.com/instagram"
        googleplus: "https://plus.google.com/109623607463450650771"
        twitter: "https://twitter.com/gustavosotnas"
        soundcloud: "https://soundcloud.com/gustavosotnas"
        pinterest: "https://br.pinterest.com/gustavosotnas1"
        github: "https://github.com/gustavosotnas"
        bitbucket: "https://bitbucket.org/gustavosotnas"
        gitlab: "https://gitlab.com/gustavosotnas"

    renderSubViews: ->
      for subView in @subViews
        switch subView.name
          when "PersonImageView"
            _personImageView = new subView @person.get("name"), @person.get("profileImage")
            _personImageView.render()
          when "PersonNameView"
            _personNameView = new subView @person.get("name")
            _personNameView.render()
          when "PersonSkillsView"
            _personSkillsView = new subView @person.get("skills")
            _personSkillsView.render()

    render: ->
      @$el.html @template
      @renderSubViews()

      @