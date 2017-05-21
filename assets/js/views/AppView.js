(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "css!styles/appView.css"], function($, _, Backbone) {
    var AppView;
    return AppView = (function(superClass) {
      var _template, _tintBrowserToolbar, _tintBrowserToolbarTemplate;

      extend(AppView, superClass);

      function AppView() {
        return AppView.__super__.constructor.apply(this, arguments);
      }

      AppView.prototype.el = 'body';

      AppView.prototype.appColor = "#009688";

      _template = _.template("<h1 id=\"helloworld\">Hello World</h1>");

      _tintBrowserToolbarTemplate = _.template("<!-- Chrome, Firefox OS and Opera -->\n<meta name=\"theme-color\" content=\"<%= color %>\">\n<!-- Windows Phone -->\n<meta name=\"msapplication-navbutton-color\" content=\"<%= color %>\">\n<!-- iOS Safari -->\n<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"<%= color %>\">");

      AppView.prototype.initialize = function() {
        return console.log("Pronto para renderizar AppView");
      };

      _tintBrowserToolbar = function(toolbarColor) {
        return $('head').append(_tintBrowserToolbarTemplate({
          color: toolbarColor
        }));
      };

      AppView.prototype.render = function() {
        this.$el.html(_template);
        $('#helloworld').append(' <em>com jQuery</em>');
        _tintBrowserToolbar(this.appColor);
        console.log("Renderizada AppView");
        return this;
      };

      return AppView;

    })(Backbone.View);
  });

}).call(this);
