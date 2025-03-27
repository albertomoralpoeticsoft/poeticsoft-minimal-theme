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
      $this.find('.wp-block-button.common.root').remove();
    }
  });
  /* Slides height */

  var delay;

  var calculateSize = function calculateSize() {
    $dialog.removeClass('Calculated');

    if (delay) {
      clearTimeout(delay);
    }

    var width = 0;
    var height = 0;
    $slides.each(function () {
      var $this = $(this);
      width = Math.ceil(Math.max(height, $this.outerWidth()));
      height = Math.ceil(Math.max(height, $this.outerHeight()));
    });
    $dialog.height(width);
    $dialog.height(height);
    delay = setTimeout(function () {
      $dialog.addClass('Calculated');
    }, 200);
  };

  window.addEventListener('resize', calculateSize);
  calculateSize();
  /* Hash changes */

  var hashchanged = function hashchanged() {
    var hash = location.hash;
    var $targetSlide = hash ? $dialog.find(hash) : $dialog.find('.Slide.First');

    if ($targetSlide.length) {
      $slides.each(function () {
        $(this).removeClass('Current');
      });
      $targetSlide.addClass('Current');
    }
  };

  window.addEventListener('hashchange', hashchanged);
  setTimeout(function () {
    hashchanged();
  }, 600);
})(jQuery);
/******/ })()
;
//# sourceMappingURL=main.js.map