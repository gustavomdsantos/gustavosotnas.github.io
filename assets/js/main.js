(function() {
  define(["views/app"], function(App) {
    var Main;
    Main = (function() {
      function Main() {
        var app;
        app = new App;
        $('body').html(app.render().el);
      }

      console.log("====================================\n gustavosotnas.github.io is running!\n ===================================");

      return Main;

    })();
    return new Main();
  });

}).call(this);
