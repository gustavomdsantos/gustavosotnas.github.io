###*
 * Browser Toolbar Tinter
 * Utility that tints the toolbar of browsers for mobile devices (Google Chrome
 * for Android, for example.
 *
 * Requires Require.js, jQuery and Underscore.js.
 *
 * (c) 2017 Gustavo Moraes (gustavosotnas) and Ravi Delixan (ravi-delixan)
 * https://stackoverflow.com/a/37630385
###

define [
  "jquery"
  "underscore"
], ($, _) ->

  class BrowserToolbarTinter
    _template = _.template """
      <!-- Browser Toolbar Tinter -->
      <!-- Chrome, Firefox OS and Opera -->
      <meta name="theme-color" content="<%= color %>">
      <!-- Windows Phone -->
      <meta name="msapplication-navbutton-color" content="<%= color %>">
      <!-- iOS Safari -->
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    """

    ###*
     * @static Função utilitária que faz "pintar" a toolbar de navegadores para
     * dispositivos móveis (Google Chrome for Android, por exemplo).
     *
     * @param {String} toolbarColor a hex color da toolbar desejada
     * @example
     * BrowserToolbarTinter.tint("#FF0000")
    ###
    @tint: (toolbarColor) ->
      metadatas = $('meta[name=theme-color],
                         [name=msapplication-navbutton-color]')
      existMetadata = metadatas.length

      if not existMetadata
        $('head').append _template
          color: toolbarColor
      else
        for metadata in metadatas
          metadata.content = toolbarColor;

  # faz "export" dos métodos estáticos (@static) para ficarem globais
  window.BrowserToolbarTinter = BrowserToolbarTinter