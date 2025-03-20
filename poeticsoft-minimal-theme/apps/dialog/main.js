/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/apps/dialog/main.js ***!
  \*********************************/
(function ($) {
  var $dialog = $('#Dialog');
  var $slides = $dialog.find('.Slide');
  /* Init slides */

  $slides.each(function () {
    var $this = $(this);
    $this.removeClass('Current');

    if (location.pathname == '/') {
      $this.find('.wp-block-button.common.home').remove();
    }

    if ($this.hasClass('First')) {
      $this.addClass('Current');
      $this.find('.wp-block-button.common.root').remove();
    }
  });
  /* Slides height */

  var calculateSize = function calculateSize() {
    var width = 0;
    var height = 0;
    $slides.each(function () {
      var $this = $(this);
      width = Math.max(height, $this.outerWidth());
      height = Math.max(height, $this.outerHeight());
    });
    $dialog.height(width);
    $dialog.height(height);
  };

  window.addEventListener('resize', calculateSize);
  calculateSize();
  /* Hash changes */

  var hashchanged = function hashchanged() {
    var hash = location.hash;
    var $targetSlide = $dialog.find(hash);

    if ($targetSlide.length) {
      $slides.each(function () {
        $(this).removeClass('Current');
      });
      $targetSlide.addClass('Current');
    }
  };

  window.addEventListener('hashchange', hashchanged);
  hashchanged();
})(jQuery);
/******/ })()
;
//# sourceMappingURL=main.js.map