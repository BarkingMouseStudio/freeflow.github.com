$ ->

  $slideshow = $('ul.slideshow')

  $slides = $slideshow.children('li')

  slideshow_index = 0
  slideshow_timeout = null
  slide_count = $slides.length

  $slides.hide().eq(slideshow_index).show()

  pause_slideshow = ->
    clearTimeout(slideshow_timeout)

  next_slide = ->
    pause_slideshow()

    slideshow_timeout = setTimeout ->
      slideshow_index++
      slideshow_index %= slide_count

      $slides.fadeOut().eq(slideshow_index).fadeIn()
      next_slide()
    , 4000

  next_slide()
