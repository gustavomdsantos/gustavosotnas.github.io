(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "css!styles/appView.css"], function($, _, Backbone) {
    var AppView;
    return AppView = (function(superClass) {
      extend(AppView, superClass);

      function AppView() {
        return AppView.__super__.constructor.apply(this, arguments);
      }

      AppView.prototype.el = '#helloworld';

      AppView.prototype.initialize = function() {
        return console.log("Pronto para renderizar AppView");
      };

      AppView.prototype.render = function() {
        this.$el.append(' <em>com jQuery</em>');
        console.log("Renderizada AppView");
        return this;
      };

      return AppView;

    })(Backbone.View);
  });

}).call(this);
