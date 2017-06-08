(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "text!templates/views/header/PersonNameView.htm", "css!styles/views/header/PersonNameView.css"], function($, _, Backbone, PersonNameViewTemplate) {

    /**
     * View responsável por exibir o nome do proprietário do site.
     *
     * @extends {Backbone.View}
     * @example
     * personNameView = new PersonNameView "Gustavo Moraes"
     * personNameView.render()
     *
     * @author gustavosotnas
     */
    var PersonNameView;
    return PersonNameView = (function(superClass) {
      extend(PersonNameView, superClass);

      function PersonNameView() {
        return PersonNameView.__super__.constructor.apply(this, arguments);
      }

      PersonNameView.prototype.el = "#header-view";

      PersonNameView.prototype.template = _.template(PersonNameViewTemplate);


      /**
       * O nome do proprietário do site.
       * @type {String}
       */

      PersonNameView.prototype.personName = "";


      /**
       * Construtor de PersonNameView.
       * @param  {String} name o nome do proprietário do site.
       */

      PersonNameView.prototype.initialize = function(name) {
        return this.personName = name;
      };


      /**
       * Renderiza a view com o nome do proprietário do site.
       *
       * @uses this.template template da view.
       * @uses this.personName o nome do proprietário do site.
       * @return {PersonNameView} ela mesma.
       */

      PersonNameView.prototype.render = function() {
        this.$el.append(this.template({
          personName: this.personName
        }));
        return this;
      };

      return PersonNameView;

    })(Backbone.View);
  });

}).call(this);
