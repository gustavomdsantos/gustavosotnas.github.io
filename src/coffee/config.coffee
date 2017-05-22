###
  O primeiro arquivo JS a ser carregado. Toma cuidado de configurar todos os
  caminhos necessários.
###

# Configura RequireJS
requirejs.config
  baseUrl: "assets/js"
  paths:
    jquery: [
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min',
      # Se o download da biblioteca pelo CDN falhar, carrega localmente
      'lib/jquery.min'
    ]
    underscore: [
      'http://underscorejs.org/underscore-min',
      'lib/underscore-min'
    ]
    backbone: [
      'http://backbonejs.org/backbone-min',
      'lib/backbone-min'
    ]
    typed: 'lib/typed.min'
    styles: '../css/'
    templates: '../../src/templates/'
  shim:
    jquery:
      exports: "$" # explicita nome da lib que deve ser usado no código (opcional)
    underscore:
      exports: "_" # explicita nome da lib que deve ser usado no código (opcional)
    backbone:
      deps: ["jquery", "underscore"]
      exports: "Backbone" # explicita nome da lib que deve ser usado no código (opcional)
    typed:
      deps: ["jquery"]
      exports: "Typed"
  map:
    '*':
      'css': 'lib/require/css.min'
      'text': 'lib/require/text'

require(["Main"]) # Carrega script principal