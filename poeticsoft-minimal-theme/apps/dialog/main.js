/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/apps/dialog/main.js ***!
  \*********************************/
(function ($) {
  var $dialog = $('#Dialog');
  var $slides = $dialog.find('.Slide');

  var calculateHeight = function calculateHeight() {
    var height = 0;
    $slides.each(function () {
      var $this = $(this);
      height = Math.max(height, $this.outerHeight());
    });
    $dialog.height(height);
  };

  window.addEventListener('resize', calculateHeight);
  calculateHeight();
})(jQuery);
/******/ })()
;
//# sourceMappingURL=main.js.map