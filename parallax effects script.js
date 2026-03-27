(function () {
        const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    },
});
    })();


var winScrollTop = 0;
$.fn.is_on_screen = function(){    
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

function parallax() { 
  var scrolled = $(window).scrollTop();
  $('.parallax-section ').each(function(){ 
    if ($(this).is_on_screen()) {	
      var firstTop = $(this).offset().top; 
      var $span = $(this).find("img");
      var moveTop = (firstTop - winScrollTop) * 0.3; // speed
      $span.css("transform", "translate3d(0, " + -moveTop + "px, 0)");
      $span.css("will-change", "transform");
    }
  });
}

$(window).scroll(function(e){
  winScrollTop = $(this).scrollTop();
  parallax();
});