(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
    var AppView;
    return AppView = (function(_super) {
      __extends(AppView, _super);

      function AppView() {
        return AppView.__super__.constructor.apply(this, arguments);
      }

      AppView.prototype.tagName = 'h1';

      AppView.prototype.id = 'helloworld';

      AppView.prototype.initialize = function() {
        return console.log("Executando app");
      };

      AppView.prototype.render = function() {
        this.$el.html('Hello World <em>com jQuery</em>');
        return this;
      };

      return AppView;

    })(Backbone.View);
  });

}).call(this);
