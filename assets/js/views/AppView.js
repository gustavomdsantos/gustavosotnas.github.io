(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "jquery-css-in-hex", "browser-toolbar-tinter", "views/HeaderView", "views/FooterView", "text!templates/views/AppView.htm"], function($, _, Backbone, jQueryCSSinHEX, BrowserToolbarTinter, HeaderView, FooterView, AppViewTemplate) {

    /**
     * View-pai da aplicação.
     *
     * @extends {Backbone.View}
     * @example
     * appView = new AppView
     * appView.render()
     *
     * @author gustavosotnas
     */
    var AppView;
    return AppView = (function(superClass) {
      extend(AppView, superClass);

      function AppView() {
        return AppView.__super__.constructor.apply(this, arguments);
      }


      /**
       * Escopo da view.
       * @type {String}
       */

      AppView.prototype.el = 'body';


      /**
       * Template no formato Underscore.js Template que define o esqueleto da
       * estrutura da página HTML.
       *
       * @type {_.template}
       */

      AppView.prototype.template = _.template(AppViewTemplate);


      /**
       * Lista de views que serão renderizadas dentro da view.
       * @type {Backbone.View[]}
       */

      AppView.prototype.subViews = [HeaderView, FooterView];


      /**
       * Instancia e renderiza automaticamente todas as subviews de uma view.
       * @uses this.subViews a lista de views.
       */

      AppView.prototype.renderSubViews = function() {
        var _subView, i, len, ref, results, subView;
        ref = this.subViews;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          subView = ref[i];
          _subView = new subView;
          results.push(_subView.render());
        }
        return results;
      };


      /**
       * Renderiza a view de acordo com o seu template e suas possíveis subviews
       * que tiverem sido definidas na classe, além de tingir a toolbar de
       * navegadores para dispositivos móveis (usando o "BrowserToolbarTinter")
       * com a mesma cor usada no header do site.
       *
       * @uses this.template template da view.
       * @return {AppView} ela mesma.
       */

      AppView.prototype.render = function() {
        this.$el.html(this.template);
        this.renderSubViews();
        BrowserToolbarTinter.tint($("header").css("background-color"));
        return this;
      };

      return AppView;

    })(Backbone.View);
  });

}).call(this);
