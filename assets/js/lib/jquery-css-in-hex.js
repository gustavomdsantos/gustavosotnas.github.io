/**
 * jQuery.css in HEX
 * Script that makes jQuery.css("background-color") and jQuery.css("color")
 * always return in HEX format.
 *
 * (c) 2017 Gustavo Moraes and Erick Petrucelli
 *
 * http://jsfiddle.net/ErickPetru/E7wFK/1/
 * https://stackoverflow.com/a/6177502
 */
$.cssHooks.backgroundColor = {
  get: function(elem) {
    if (elem.currentStyle)
      var bg = elem.currentStyle["background-color"];
    else if (window.getComputedStyle)
      var bg = document.defaultView.getComputedStyle(elem,
        null).getPropertyValue("background-color");
    if (bg.search("rgb") == -1)
      return bg;
    else {
      bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
    }
  }
}
$.cssHooks.color = {
  get: function(elem) {
    if (elem.currentStyle)
      var bg = elem.currentStyle["color"];
    else if (window.getComputedStyle)
      var bg = document.defaultView.getComputedStyle(elem,
        null).getPropertyValue("color");
    if (bg.search("rgb") == -1)
      return bg;
    else {
      bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
    }
  }
}