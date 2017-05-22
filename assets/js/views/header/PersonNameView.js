(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "text!templates/views/header/PersonNameView.htm", "css!styles/views/header/PersonNameView.css"], function($, _, Backbone, PersonNameViewTemplate) {
    var PersonNameView;
    return PersonNameView = (function(superClass) {
      extend(PersonNameView, superClass);

      function PersonNameView() {
        return PersonNameView.__super__.constructor.apply(this, arguments);
      }

      PersonNameView.prototype.el = "#header-view";

      PersonNameView.prototype.template = _.template(PersonNameViewTemplate);

      PersonNameView.prototype.personName = "";

      PersonNameView.prototype.initialize = function(name) {
        return this.personName = name;
      };

      PersonNameView.prototype.render = function() {
        this.$el.append(this.template({
          personName: this.personName
        }));
        return this;
      };

      return PersonNameView;

    })(Backbone.View);
  });

}).call(this);
