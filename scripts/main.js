(function() {
  $(function() {
    var $slides, $slideshow, next_slide, pause_slideshow, slide_count, slideshow_index, slideshow_timeout;
    $slideshow = $('ul.slideshow');
    $slides = $slideshow.children('li');
    slideshow_index = 0;
    slideshow_timeout = null;
    slide_count = $slides.length;
    $slides.hide().eq(slideshow_index).show();
    pause_slideshow = function() {
      return clearTimeout(slideshow_timeout);
    };
    next_slide = function() {
      pause_slideshow();
      return slideshow_timeout = setTimeout(function() {
        slideshow_index++;
        slideshow_index %= slide_count;
        $slides.fadeOut().eq(slideshow_index).fadeIn();
        return next_slide();
      }, 4000);
    };
    return next_slide();
  });
}).call(this);
