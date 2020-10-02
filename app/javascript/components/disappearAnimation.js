const disappearAnimation = () => {
  $(window).scroll(function() {
    var hT = $('#animation').offset().top,
        hH = $('#animation').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        console.log('You scrolled to animation');
        setTimeout(fade_out, 4000);

        function fade_out() {
          $("#animation").fadeOut().empty();
        }
    }
 });
}

export {disappearAnimation};