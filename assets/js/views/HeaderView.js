(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "views/header/PersonImageView", "views/header/PersonNameView", "views/header/PersonSkillsView", "models/PersonModel", "text!templates/views/HeaderView.htm", "css!styles/views/HeaderView.css"], function($, _, Backbone, PersonImageView, PersonNameView, PersonSkillsView, Person, HeaderViewTemplate) {

    /*
    View responsável pelo cabeçalho do tipo banner da página.
    
    @extend {Backbone.View}
    @example footerView = new FooterView
    footerView.render()
    
    @author gustavosotnas
     */
    var HeaderView;
    return HeaderView = (function(superClass) {
      var _enableParallax;

      extend(HeaderView, superClass);

      function HeaderView() {
        return HeaderView.__super__.constructor.apply(this, arguments);
      }

      HeaderView.prototype.el = 'header';

      HeaderView.prototype.template = _.template(HeaderViewTemplate);

      HeaderView.prototype.subViews = [PersonImageView, PersonNameView, PersonSkillsView];


      /*
      Model que contêm as informações da pessoa que é proprietária do site.
      @type {Person}
       */

      HeaderView.prototype.person = new Person({
        name: "Gustavo Moraes",
        skills: ["Engenheiro de Software", "Artista gráfico", "Produtor musical"],
        profileImage: "https://pt.gravatar.com/userimage/101482200/5cf69c93667f2dd15fbbd97dc5ed0a44.png?size=256",
        email: "gustavosotnas1@gmail.com",
        socialNetworks: {
          blogsite: "https://about.me/gustavosotnas",
          linkedin: "https://www.linkedin.com/in/gustavosotnas",
          facebook: "https://www.facebook.com/zuck",
          instagram: "https://www.instagram.com/instagram",
          googleplus: "https://plus.google.com/109623607463450650771",
          twitter: "https://twitter.com/gustavosotnas",
          soundcloud: "https://soundcloud.com/gustavosotnas",
          pinterest: "https://br.pinterest.com/gustavosotnas1",
          github: "https://github.com/gustavosotnas",
          bitbucket: "https://bitbucket.org/gustavosotnas",
          gitlab: "https://gitlab.com/gustavosotnas"
        }
      });


      /*
      Personalização da função "renderSubViews" para subviews de HeaderView,
      que precisam de informações do model como parâmetro para se renderizarem.
      
      @uses this.subViews a lista de subviews.
       */

      HeaderView.prototype.renderSubViews = function() {
        var _personImageView, _personNameView, _personSkillsView, i, len, ref, results, subView;
        ref = this.subViews;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          subView = ref[i];
          switch (subView.name) {
            case "PersonImageView":
              _personImageView = new subView(this.person.get("name"), this.person.get("profileImage"));
              results.push(_personImageView.render());
              break;
            case "PersonNameView":
              _personNameView = new subView(this.person.get("name"));
              results.push(_personNameView.render());
              break;
            case "PersonSkillsView":
              _personSkillsView = new subView(this.person.get("skills"));
              results.push(_personSkillsView.render());
              break;
            default:
              results.push(void 0);
          }
        }
        return results;
      };


      /*
      @private Ativa o efeito paralaxe em todos os elementos HTML que tiverem a
      classe '.bgParallax'.
      
      @param  {number} speed a velocidade do efeito paralaxe. Quanto maior o
      número, a imagem tenderá a ficar estática, quanto menor o número, mais a
      imagem se movimentará (0 fará a imagem se movimentar como se não tivesse
      o efeito paralaxe).
      @example   _enableParallax 3
      @see https://tableless.com.br/parallax-simples-com-jquery-e-css
       */

      _enableParallax = function(speed) {
        return $('.bgParallax').each(function() {
          var $obj;
          $obj = $(this);
          return $(window).scroll(function() {
            var bgpos, yPos;
            yPos = -($(window).scrollTop() / speed);
            bgpos = '50% ' + yPos + 'px';
            return $obj.css('background-position', bgpos);
          });
        });
      };


      /*
      Renderiza a view com suas subviews e ativando o efeito paralaxe.
      
      @uses this.template template da view.
      @return {HeaderView} ela mesma.
       */

      HeaderView.prototype.render = function() {
        var parallaxSpeed;
        parallaxSpeed = 3;
        this.$el.html(this.template);
        this.renderSubViews();
        _enableParallax(parallaxSpeed);
        return this;
      };

      return HeaderView;

    })(Backbone.View);
  });

}).call(this);
