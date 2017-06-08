(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "text!templates/views/header/PersonImageView.htm", "css!styles/views/header/PersonImageView.css"], function($, _, Backbone, PersonImageViewTemplate) {

    /*
    View responsável por exibir a imagem do proprietário do site.
    
    @extend {Backbone.View}
    @example personImageView = new PersonImageView "Gustavo Moraes", "https://pt.gravatar.com/userimage/101482200/5cf69c93667f2dd15fbbd97dc5ed0a44.png?size=256"
    personImageView.render()
    
    @author gustavosotnas
     */
    var PersonImageView;
    return PersonImageView = (function(superClass) {
      extend(PersonImageView, superClass);

      function PersonImageView() {
        return PersonImageView.__super__.constructor.apply(this, arguments);
      }

      PersonImageView.prototype.el = "#header-view";

      PersonImageView.prototype.template = _.template(PersonImageViewTemplate);


      /*
      O nome do proprietário do site.
      @type {String}
       */

      PersonImageView.prototype.personName = "";


      /*
      A URL da imagem do proprietário do site.
      @type {String}
       */

      PersonImageView.prototype.personImage = "";


      /*
      Construtor de PersonImageView.
      
      @param  {String} name o nome do proprietário do site.
      @param  {String} image a URL da imagem do proprietário do site.
       */

      PersonImageView.prototype.initialize = function(name, image) {
        this.personName = name;
        return this.personImage = image;
      };


      /*
      Renderiza a view com o nome e imagem do proprietário do site.
      
      @uses this.template template da view.
      @uses this.personName o nome do proprietário do site.
      @uses this.personImage a URL da imagem do proprietário do site.
      @return {PersonImageView} ela mesma.
       */

      PersonImageView.prototype.render = function() {
        this.$el.append(this.template({
          personName: this.personName,
          personImage: this.personImage
        }));
        return this;
      };

      return PersonImageView;

    })(Backbone.View);
  });

}).call(this);
