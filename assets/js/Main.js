(function() {
  define(["views/AppView"], function(AppView) {
    var Main;
    Main = (function() {
      function Main() {
        var appView;
        appView = new AppView;
        appView.render();
      }

      console.log(" ===================================\n gustavosotnas.github.io is running!\n ===================================");

      return Main;

    })();
    return new Main();
  });

}).call(this);
