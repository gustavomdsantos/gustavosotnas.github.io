(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "text!templates/views/AppView.htm", "text!templates/fragments/TintBrowserToolbar.htm", "css!styles/views/AppView.css"], function($, _, Backbone, AppViewTemplate, TintBrowserToolbarTemplate) {
    var AppView;
    return AppView = (function(superClass) {
      var _template, _tintBrowserToolbar, _tintBrowserToolbarTemplate;

      extend(AppView, superClass);

      function AppView() {
        return AppView.__super__.constructor.apply(this, arguments);
      }

      AppView.prototype.el = 'body';

      AppView.prototype.appColor = "#009688";

      _template = _.template(AppViewTemplate);

      _tintBrowserToolbarTemplate = _.template(TintBrowserToolbarTemplate);

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
