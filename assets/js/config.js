
/*
  O primeiro arquivo JS a ser carregado. Toma cuidado de configurar todos os
  caminhos necessários.
 */

(function() {
  requirejs.config({
    baseUrl: "assets/js",
    paths: {
      jquery: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min', 'lib/jquery.min'],
      underscore: ['http://underscorejs.org/underscore-min', 'lib/underscore-min'],
      backbone: ['http://backbonejs.org/backbone-min', 'lib/backbone-min'],
      styles: '../css/',
      templates: '../../src/templates/'
    },
    shim: {
      jquery: {
        exports: "$"
      },
      underscore: {
        exports: "_"
      },
      backbone: {
        deps: ["jquery", "underscore"],
        exports: "Backbone"
      }
    },
    map: {
      '*': {
        'css': 'lib/require/css.min',
        'text': 'lib/require/text'
      }
    }
  });

  require(["Main"]);

}).call(this);
