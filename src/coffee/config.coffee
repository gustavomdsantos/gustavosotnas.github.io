###
# config: Script de inicialização do projeto no RequireJS.
# Responsável por configurar todos os caminhos de libs necessários.
#
# É o primeiro arquivo JS a ser carregado (depois do próprio RequireJS, no
# `index.html`.
#
# @author gustavosotnas
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
    "jquery-css-in-hex": 'lib/jquery-css-in-hex'
    "browser-toolbar-tinter": 'lib/browser-toolbar-tinter'
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
    "jquery-css-in-hex":
      deps: ["jquery"]
      exports: "jquery-css-in-hex"
    "browser-toolbar-tinter":
      deps: ["jquery", "underscore"]
      exports: "Tinter"
  map:
    '*':
      'css': 'lib/require/css.min'
      'text': 'lib/require/text'

# Carrega o script principal do projeto
require(["Main"])