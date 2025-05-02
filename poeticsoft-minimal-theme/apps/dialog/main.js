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
    if (location.pathname == '/') {
      $this.find('.wp-block-button.common.home').remove();
    }
    if ($this.hasClass('First')) {
      $this.find('.wp-block-button.common.root').remove();
    }
  });

  /* Slides height */

  var calculateSize = function calculateSize() {
    $dialog.removeClass('Calculated');
    var width = 0;
    var height = 0;
    setTimeout(function () {
      $slides.each(function () {
        var $this = $(this);
        width = Math.ceil(Math.max(height, $this.outerWidth()));
        height = Math.ceil(Math.max(height, $this.outerHeight()));
      });
      $dialog.height(width);
      $dialog.height(height);
      $dialog.addClass('Calculated');
    }, 100);
  };
  window.addEventListener('resize', calculateSize);
  setTimeout(function () {
    calculateSize();
  }, 800);

  /* Hash changes */

  var hashchanged = function hashchanged() {
    $slides.each(function () {
      $(this).removeClass('Current');
    });
    var hash = location.hash;
    var $targetSlide = hash ? $dialog.find(hash) : $dialog.find('.Slide.First');
    setTimeout(function () {
      if ($targetSlide.length) {
        $targetSlide.addClass('Current');
      }
    }, 600);
  };
  window.addEventListener('hashchange', hashchanged);
  setTimeout(function () {
    hashchanged();
  }, 1000);
})(jQuery);
/******/ })()
;
//# sourceMappingURL=main.js.map