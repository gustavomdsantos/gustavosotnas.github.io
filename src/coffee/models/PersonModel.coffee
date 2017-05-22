define [
  "jquery"
  "underscore"
  "backbone"
], ($, _, Backbone) ->

  class Person extends Backbone.Model
    defaults:
      name: "Foobar"
      skills: [
        "Programmer"
        "Photographer"
        "Football player"
      ]
      profileImage: "http://placehold.it/256x256"
      email: "example@example.com"
      socialNetworks:
        blogsite: "http://example.com"
        facebook: "https://www.facebook.com/zuck"
        instagram: "https://www.instagram.com/instagram"
