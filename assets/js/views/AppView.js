(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "views/HeaderView", "text!templates/views/AppView.htm"], function($, _, Backbone, HeaderView, AppViewTemplate) {
    var AppView;
    return AppView = (function(superClass) {
      var _template;

      extend(AppView, superClass);

      function AppView() {
        return AppView.__super__.constructor.apply(this, arguments);
      }

      AppView.prototype.el = 'body';

      AppView.prototype.subViews = {
        headerView: new HeaderView
      };

      _template = _.template(AppViewTemplate);

      AppView.prototype.render = function() {
        this.$el.html(_template);
        this.renderSubViews();
        return this;
      };

      AppView.prototype.renderSubViews = function() {
        return _.each(this.subViews, function(subView) {
          return subView.render();
        });
      };

      return AppView;

    })(Backbone.View);
  });

}).call(this);
