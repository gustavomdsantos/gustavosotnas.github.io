
/**
 * Browser Toolbar Tinter
 * Utility that tints the toolbar of browsers for mobile devices (Google Chrome
 * for Android, for example.
 *
 * Requires Require.js, jQuery and Underscore.js.
 *
 * (c) 2017 Gustavo Moraes (gustavosotnas) and Ravi Delixan (ravi-delixan)
 * https://stackoverflow.com/a/37630385
 */

(function() {
  define(["jquery", "underscore"], function($, _) {
    var BrowserToolbarTinter;
    BrowserToolbarTinter = (function() {
      var _template;

      function BrowserToolbarTinter() {}

      _template = _.template("<!-- Browser Toolbar Tinter -->\n<!-- Chrome, Firefox OS and Opera -->\n<meta name=\"theme-color\" content=\"<%= color %>\">\n<!-- Windows Phone -->\n<meta name=\"msapplication-navbutton-color\" content=\"<%= color %>\">\n<!-- iOS Safari -->\n<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\">");


      /**
       * @static Função utilitária que faz "pintar" a toolbar de navegadores para
       * dispositivos móveis (Google Chrome for Android, por exemplo).
       *
       * @param {String} toolbarColor a hex color da toolbar desejada
       * @example
       * BrowserToolbarTinter.tint("#FF0000")
       */

      BrowserToolbarTinter.tint = function(toolbarColor) {
        var existMetadata, i, len, metadata, metadatas, results;
        metadatas = $('meta[name=theme-color], [name=msapplication-navbutton-color]');
        existMetadata = metadatas.length;
        if (!existMetadata) {
          return $('head').append(_template({
            color: toolbarColor
          }));
        } else {
          results = [];
          for (i = 0, len = metadatas.length; i < len; i++) {
            metadata = metadatas[i];
            results.push(metadata.content = toolbarColor);
          }
          return results;
        }
      };

      return BrowserToolbarTinter;

    })();
    return window.BrowserToolbarTinter = BrowserToolbarTinter;
  });

}).call(this);
