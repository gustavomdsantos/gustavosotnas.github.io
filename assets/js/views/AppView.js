(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "views/HeaderView", "views/FooterView", "text!templates/views/AppView.htm"], function($, _, Backbone, HeaderView, FooterView, AppViewTemplate) {
    var AppView;
    return AppView = (function(superClass) {
      var _subViews, _template;

      extend(AppView, superClass);

      function AppView() {
        return AppView.__super__.constructor.apply(this, arguments);
      }

      AppView.prototype.el = 'body';

      _subViews = [new HeaderView, new FooterView];

      _template = _.template(AppViewTemplate);

      AppView.prototype.renderSubViews = function() {
        return _.each(_subViews, function(subView) {
          return subView.render();
        });
      };

      AppView.prototype.render = function() {
        this.$el.html(_template);
        this.renderSubViews();
        return this;
      };

      return AppView;

    })(Backbone.View);
  });

}).call(this);
