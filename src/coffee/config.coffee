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
        underscore: 'lib/underscore-min'
        backbone: 'lib/backbone-min'

require(["main"]) # Carrega script principal