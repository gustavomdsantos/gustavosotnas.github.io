(function() {
  define(["views/AppView"], function(AppView) {

    /*
     * Classe principal do gustavosotnas.github.io. É criado um novo app e dado
     * comando para renderizar a página.
     *
     * @author gustavosotnas
     */
    var Main;
    Main = (function() {

      /**
       * @main gustavosotnas.github.io
       *
       * Cria uma instância de AppView (principal view do web app) a renderiza,
       * define cor da toolbar de navegadores para dispositivos móveis e exibe uma
       * mensagem de informação no console de que o web app está rodando.
       */
      function Main() {
        var appView;
        appView = new AppView;
        appView.render();
        console.log(" ===================================\n gustavosotnas.github.io is running!\n ===================================");
      }

      return Main;

    })();
    return new Main();
  });

}).call(this);
