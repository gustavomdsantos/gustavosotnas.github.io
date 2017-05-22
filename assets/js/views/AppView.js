(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "views/HeaderView", "views/FooterView", "text!templates/views/AppView.htm"], function($, _, Backbone, HeaderView, FooterView, AppViewTemplate) {
    var AppView;
    return AppView = (function(superClass) {
      extend(AppView, superClass);

      function AppView() {
        return AppView.__super__.constructor.apply(this, arguments);
      }

      AppView.prototype.el = 'body';

      AppView.prototype.template = _.template(AppViewTemplate);

      AppView.prototype.subViews = [HeaderView, FooterView];

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

      AppView.prototype.render = function() {
        this.$el.html(this.template);
        this.renderSubViews();
        return this;
      };

      return AppView;

    })(Backbone.View);
  });

}).call(this);
