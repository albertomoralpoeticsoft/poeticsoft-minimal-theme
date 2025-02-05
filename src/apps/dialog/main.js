(function ($) {
  
  const $dialog = $('#Dialog')
  const $slides = $dialog.find('.Slide')

  const calculateHeight = () => {

    let height = 0;
    $slides.each(function() {
      
      const $this = $(this)
      height = Math.max(height, $this.outerHeight())
    })

    $dialog.height(height)
  }

  window.addEventListener(
    'resize',
    calculateHeight
  )

  calculateHeight()

})(jQuery);