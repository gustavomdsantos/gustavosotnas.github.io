(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "text!templates/views/header/PersonImageView.htm", "css!styles/views/header/PersonImageView.css"], function($, _, Backbone, PersonImageViewTemplate) {
    var PersonImageView;
    return PersonImageView = (function(superClass) {
      extend(PersonImageView, superClass);

      function PersonImageView() {
        return PersonImageView.__super__.constructor.apply(this, arguments);
      }

      PersonImageView.prototype.el = "#header-view";

      PersonImageView.prototype.template = _.template(PersonImageViewTemplate);

      PersonImageView.prototype.personName = "";

      PersonImageView.prototype.personImage = "";

      PersonImageView.prototype.initialize = function(name, image) {
        this.personName = name;
        return this.personImage = image;
      };

      PersonImageView.prototype.render = function() {
        this.$el.append(this.template({
          personName: this.personName,
          personImage: this.personImage
        }));
        return this;
      };

      return PersonImageView;

    })(Backbone.View);
  });

}).call(this);
