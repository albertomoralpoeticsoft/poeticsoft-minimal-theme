(function ($) {
  
  const $dialog = $('#Dialog')
  const $slides = $dialog.find('.Slide')

  /* Init slides */

  $slides.each(function() {
      
    const $this = $(this)     

    $this.removeClass('Current')

    if(location.pathname == '/') {

      $this.find('.wp-block-button.common.home').remove()
    }
  
    if($this.hasClass('First')) {

      $this.addClass('Current')

      $this.find('.wp-block-button.common.root').remove()
    }
  })

  /* Slides height */

  const calculateSize = () => {

    let width = 0;
    let height = 0;

    $slides.each(function() {
      
      const $this = $(this)
      width = Math.max(height, $this.outerWidth())
      height = Math.max(height, $this.outerHeight())
    })

    $dialog.height(width)
    $dialog.height(height)
  }

  window.addEventListener(
    'resize',
    calculateSize
  )

  calculateSize()
  
  /* Hash changes */

  const hashchanged = () => {

    const hash = location.hash
    const $targetSlide = $dialog.find(hash)

    if($targetSlide.length) {      

      $slides.each(function() {
        
        $(this).removeClass('Current')
      })

      $targetSlide.addClass('Current')
    }
  }

  window.addEventListener(
    'hashchange', 
    hashchanged
  )

  hashchanged()

})(jQuery);