(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "typed", "text!templates/views/header/PersonSkillsView.htm", "css!styles/views/header/PersonSkillsView.css"], function($, _, Backbone, Typed, PersonSkillsViewTemplate) {

    /**
     * View responsável por exibir a lista de habilidades do proprietário do site
     * na forma de animação de uma pessoa digitando e apagando texto num editor de
     * texto.
     *
     * @extends {Backbone.View}
     * @example
     * personSkillsView = new PersonSkillsView ["Engenheiro de Software", "Artista gráfico", "Produtor musical"]
     * personSkillsView.render()
     *
     * @author gustavosotnas
     */
    var PersonSkillsView;
    return PersonSkillsView = (function(superClass) {
      var _enableTypedSkills;

      extend(PersonSkillsView, superClass);

      function PersonSkillsView() {
        return PersonSkillsView.__super__.constructor.apply(this, arguments);
      }

      PersonSkillsView.prototype.el = "#header-view";

      PersonSkillsView.prototype.template = _.template(PersonSkillsViewTemplate);


      /**
       * A lista de habilidades do proprietário do site.
       * @type {String[]}
       */

      PersonSkillsView.prototype.personSkills = [];


      /**
       * Construtor de PersonSkillsView.
       * @param  {String[]} skills a lista de habilidades do proprietário do site.
       */

      PersonSkillsView.prototype.initialize = function(skills) {
        return this.personSkills = skills;
      };


      /**
       * Ativa a animação de digitação da lista de habilidades do proprietário do
       * site, usando a biblioteca Typed.js
       *
       * @uses Typed lib Typed.js, faz animação com a digitação de uma pessoa.
       * @see https://github.com/mattboldt/typed.js
       */

      _enableTypedSkills = function() {
        return $("#typed-person-skills").typed({
          stringsElement: $("#person-skills-view"),
          startDelay: 500,
          typeSpeed: 80,
          backDelay: 3000,
          backSpeed: 10,
          loop: true
        });
      };


      /**
       * Renderiza a view com a lista de habilidades.
       *
       * @uses this.template template da view.
       * @uses this.personSkills a lista de habilidades do proprietário do site.
       * @return {PersonSkillsView} ela mesma.
       */

      PersonSkillsView.prototype.render = function() {
        this.$el.append(this.template({
          personSkills: this.personSkills
        }));
        _enableTypedSkills();
        return this;
      };

      return PersonSkillsView;

    })(Backbone.View);
  });

}).call(this);
