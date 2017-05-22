(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "typed", "models/PersonModel", "text!templates/views/HeaderView.htm", "css!styles/views/HeaderView.css"], function($, _, Backbone, Typed, Person, HeaderViewTemplate) {
    var HeaderView;
    return HeaderView = (function(superClass) {
      var _enableTypedSkills;

      extend(HeaderView, superClass);

      function HeaderView() {
        return HeaderView.__super__.constructor.apply(this, arguments);
      }

      HeaderView.prototype.el = 'header';

      HeaderView.prototype.template = _.template(HeaderViewTemplate);

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

      _enableTypedSkills = function() {
        return $("#typed-person-skills").typed({
          stringsElement: $("#person-skills"),
          startDelay: 500,
          typeSpeed: 80,
          backDelay: 3000,
          backSpeed: 10,
          loop: true
        });
      };

      HeaderView.prototype.render = function() {
        this.$el.html(this.template({
          personName: this.person.get("name"),
          personImage: this.person.get("profileImage"),
          personSkills: this.person.get("skills")
        }));
        _enableTypedSkills();
        return this;
      };

      return HeaderView;

    })(Backbone.View);
  });

}).call(this);
