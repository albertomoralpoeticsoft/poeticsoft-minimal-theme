(function ($) {
  
  const $dialog = $('#Dialog')
  const $slides = $dialog.find('.Slide')

  const calculateHeight = () => {

    let height = 0;
    $slides.each(function() {
      
      const $this = $(this)
      height = Math.max(height, $this.outerHeight())

      $this.find('.wp-block-button__link')
      .each(function() {

        const $button = $(this)
        const link = $button.attr('href')
        const linkid = link ? link.replace('#', '') : ''

        if(linkid == '') { return }

        $button.on(
          'click',
          function() {

            $slides.each(function() { 

              const $link = $(this)

              if($link.attr('id') == linkid) {

                $link.addClass('Current')

              } else {
              
                $link.removeClass('Current')
              }
            })

            return false
          }
        )
      })

      if($this.hasClass('First')) {

        $this.addClass('Current')
      }
    })

    $dialog.height(height)
  }

  window.addEventListener(
    'resize',
    calculateHeight
  )

  calculateHeight()

})(jQuery);