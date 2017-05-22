(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
    var Person;
    return Person = (function(superClass) {
      extend(Person, superClass);

      function Person() {
        return Person.__super__.constructor.apply(this, arguments);
      }

      Person.prototype.defaults = {
        name: "Foobar",
        skills: ["Programmer", "Photographer", "Football player"],
        profileImage: "http://placehold.it/256x256",
        email: "example@example.com",
        socialNetworks: {
          blogsite: "http://example.com",
          facebook: "https://www.facebook.com/zuck",
          instagram: "https://www.instagram.com/instagram"
        }
      };

      return Person;

    })(Backbone.Model);
  });

}).call(this);
