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

      $this.find('.wp-block-button.common.root').remove()
    }
  })

  /* Slides height */

  let delay

  const calculateSize = () => {

    $dialog.removeClass('Calculated')

    if(delay) {

      clearTimeout(delay)
    }

    let width = 0;
    let height = 0;

    $slides.each(function() {

      const $this = $(this)
      width = Math.ceil(Math.max(height, $this.outerWidth()))
      height = Math.ceil(Math.max(height, $this.outerHeight()))
    })
    $dialog.height(width)
    $dialog.height(height)
    
    delay = setTimeout(() => {

      $dialog.addClass('Calculated')

    }, 200)
  }

  window.addEventListener(
    'resize',
    calculateSize
  )

  calculateSize()
  
  /* Hash changes */

  const hashchanged = () => {

    const hash = location.hash
    const $targetSlide = hash ?
      $dialog.find(hash)
      :
      $dialog.find('.Slide.First')

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

  setTimeout(() => {
    
    hashchanged()

  }, 600)

})(jQuery);