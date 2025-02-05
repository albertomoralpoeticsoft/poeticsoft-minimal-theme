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
      $this.find('.wp-block-button__link').each(function () {
        var $button = $(this);
        var link = $button.attr('href');
        var linkid = link ? link.replace('#', '') : '';

        if (linkid == '') {
          return;
        }

        $button.on('click', function () {
          $slides.each(function () {
            var $link = $(this);

            if ($link.attr('id') == linkid) {
              $link.addClass('Current');
            } else {
              $link.removeClass('Current');
            }
          });
          return false;
        });
      });

      if ($this.hasClass('First')) {
        $this.addClass('Current');
      }
    });
    $dialog.height(height);
  };

  window.addEventListener('resize', calculateHeight);
  calculateHeight();
})(jQuery);
/******/ })()
;
//# sourceMappingURL=main.js.map