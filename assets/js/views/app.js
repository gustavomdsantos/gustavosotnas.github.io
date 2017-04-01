(function() {
  var App,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone"], function($, _, Backbone) {});

  App = (function(superClass) {
    extend(App, superClass);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.tagName = 'h1';

    App.prototype.id = 'helloworld';

    App.prototype.initialize = function() {
      console.log("Executando app");
      return this.render;
    };

    App.prototype.render = function() {
      return this.$el.html('Hello World <em>com jQuery</em>');
    };

    return App;

  })(Backbone.View);

}).call(this);
