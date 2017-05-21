(function() {
  define(["views/AppView", "text!templates/fragments/TintBrowserToolbar.htm"], function(AppView, TintBrowserToolbarTemplate) {
    var Main;
    Main = (function() {
      var _appColor, _template, _tintBrowserToolbar;

      _appColor = "#009688";

      _template = _.template(TintBrowserToolbarTemplate);

      function Main() {
        var appView;
        appView = new AppView;
        appView.render();
        _tintBrowserToolbar(_appColor);
        console.log(" ===================================\n gustavosotnas.github.io is running!\n ===================================");
      }

      _tintBrowserToolbar = function(toolbarColor) {
        return $('head').append(_template({
          color: toolbarColor
        }));
      };

      return Main;

    })();
    return new Main();
  });

}).call(this);
