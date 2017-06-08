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

  ###*
   * View responsável pelo cabeçalho do tipo banner da página.
   *
   * @extends {Backbone.View}
   * @example
   * footerView = new FooterView
   * footerView.render()
   *
   * @author gustavosotnas
  ###
  class HeaderView extends Backbone.View

    el: 'header'
    template: _.template HeaderViewTemplate
    subViews: [
      PersonImageView
      PersonNameView
      PersonSkillsView
    ]
    ###*
     * Model que contêm as informações da pessoa que é proprietária do site.
     * @type {Person}
    ###
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

    ###*
     * Personalização da função "renderSubViews" para subviews de HeaderView,
     * que precisam de informações do model como parâmetro para se renderizarem.
     *
     * @uses this.subViews a lista de subviews.
    ###
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

    ###*
     * @private Ativa o efeito paralaxe em todos os elementos HTML que tiverem a
     * classe '.bgParallax'.
     *
     * @param  {number} speed a velocidade do efeito paralaxe. Quanto maior o
     * número, a imagem tenderá a ficar estática, quanto menor o número, mais a
     * imagem se movimentará (0 fará a imagem se movimentar como se não tivesse
     * o efeito paralaxe).
     * @example
     * _enableParallax 3
     * @see https://tableless.com.br/parallax-simples-com-jquery-e-css
    ###
    _enableParallax = (speed) ->
      $('.bgParallax').each ->
        $obj = $(@)
        $(window).scroll ->
          yPos = -($(window).scrollTop() / speed)
          bgpos = '50% ' + yPos + 'px'
          $obj.css 'background-position', bgpos

    ###*
     * Renderiza a view com suas subviews e ativando o efeito paralaxe.
     *
     * @uses this.template template da view.
     * @return {HeaderView} ela mesma.
    ###
    render: ->
      parallaxSpeed = 3

      @$el.html @template
      @renderSubViews()
      _enableParallax parallaxSpeed

      @