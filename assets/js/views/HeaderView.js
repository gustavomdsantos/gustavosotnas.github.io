(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "text!templates/views/HeaderView.htm", "css!styles/views/HeaderView.css"], function($, _, Backbone, HeaderViewTemplate) {
    var HeaderView;
    return HeaderView = (function(superClass) {
      var _template;

      extend(HeaderView, superClass);

      function HeaderView() {
        return HeaderView.__super__.constructor.apply(this, arguments);
      }

      HeaderView.prototype.el = 'header';

      _template = _.template(HeaderViewTemplate);

      HeaderView.prototype.render = function() {
        this.$el.html(_template);
        return this;
      };

      return HeaderView;

    })(Backbone.View);
  });

}).call(this);
