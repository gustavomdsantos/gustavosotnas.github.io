(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "typed", "text!templates/views/header/PersonSkillsView.htm", "css!styles/views/header/PersonSkillsView.css"], function($, _, Backbone, Typed, PersonSkillsViewTemplate) {
    var PersonSkillsView;
    return PersonSkillsView = (function(superClass) {
      var _enableTypedSkills;

      extend(PersonSkillsView, superClass);

      function PersonSkillsView() {
        return PersonSkillsView.__super__.constructor.apply(this, arguments);
      }

      PersonSkillsView.prototype.el = "#header-view";

      PersonSkillsView.prototype.template = _.template(PersonSkillsViewTemplate);

      PersonSkillsView.prototype.personSkills = [];

      PersonSkillsView.prototype.initialize = function(skills) {
        return this.personSkills = skills;
      };

      _enableTypedSkills = function() {
        return $("#typed-person-skills").typed({
          stringsElement: $("#person-skills-view"),
          startDelay: 500,
          typeSpeed: 80,
          backDelay: 3000,
          backSpeed: 10,
          loop: true
        });
      };

      PersonSkillsView.prototype.render = function() {
        this.$el.append(this.template({
          personSkills: this.personSkills
        }));
        _enableTypedSkills();
        return this;
      };

      return PersonSkillsView;

    })(Backbone.View);
  });

}).call(this);
