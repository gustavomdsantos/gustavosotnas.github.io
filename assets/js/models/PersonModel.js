(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone"], function($, _, Backbone) {

    /*
    Modelo de dados pessoais e profissionais de uma pessoa, o proprietário do
    site.
    
    @extend {Backbone.Model}
    @example gustavo = new Person
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
     */
    var Person;
    return Person = (function(superClass) {
      extend(Person, superClass);

      function Person() {
        return Person.__super__.constructor.apply(this, arguments);
      }


      /*
      Estrutura de dados padrão do Model `Person`. Os valores atribuídos são
      apenas para fins de exemplo.
      
      @type {Object}
       */

      Person.prototype.defaults = {

        /*
        O nome da pessoa.
        @type {String}
         */
        name: "Foobar",

        /*
        A lista de habilidades da pessoa.
        @type {String[]}
         */
        skills: ["Programmer", "Photographer", "Football player"],

        /*
        A URL da imagem de perfil da pessoa.
        @type {String}
         */
        profileImage: "http://placehold.it/256x256",

        /*
        O endereço de e-mail da pessoa, para entrar em contato.
        @type {String}
         */
        email: "example@example.com",

        /*
        Links para sites, blogs e redes sociais da pessoa.
        Podem ser incluídos quantos links quiser desde que especifique o nome
        da rede social corretamente.
        @type {Object}
         */
        socialNetworks: {
          blogsite: "http://example.com",
          facebook: "https://www.facebook.com/zuck",
          instagram: "https://www.instagram.com/instagram"
        }
      };

      return Person;

    })(Backbone.Model);
  });

}).call(this);
