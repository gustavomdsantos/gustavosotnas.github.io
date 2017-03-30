
/*
    O primeiro arquivo JS a ser carregado. Toma cuidado de configurar todos os 
    caminhos necessários.
 */

(function() {
  requirejs.config({
    baseUrl: "assets/js",
    paths: {
      jquery: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min', 'lib/jquery.min'],
      underscore: 'lib/underscore-min',
      backbone: 'lib/backbone-min'
    }
  });

  require(["main"]);

}).call(this);
