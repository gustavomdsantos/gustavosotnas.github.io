(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
    var App;
    return App = (function(_super) {
      __extends(App, _super);

      function App() {
        return App.__super__.constructor.apply(this, arguments);
      }

      App.prototype.tagName = 'h1';

      App.prototype.id = 'helloworld';

      App.prototype.initialize = function() {
        return console.log("Executando app");
      };

      App.prototype.render = function() {
        this.$el.html('Hello World <em>com jQuery</em>');
        return this;
      };

      return App;

    })(Backbone.View);
  });

}).call(this);
