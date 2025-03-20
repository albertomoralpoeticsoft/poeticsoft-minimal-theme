import portfolio from './portfolio'

(function ($) {

  const $portfoliolinks = $('a.portfolio')

  if($portfoliolinks.length) {

    $portfoliolinks
    .on(
      'click',
      function() {

        const $link = $(this)
        const url = $link.attr('href')

        portfolio($, url)

        return false
      }
    )
  }

})(jQuery);