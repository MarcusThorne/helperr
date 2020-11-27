const moveSearchImage = () => {
  var image = document.querySelector('.search')

  function position() {
    var margin = (50 / 100) * Math.round(window.scrollY)
    return "50% " + margin + "px"
  }

  addEventListener('scroll', function(){
    if (window.scrollY === 0) {
      image.style.backgroundPosition = '50% 0px';
    } 
    else if (window.scrollY > 0 && window.scrollY < 900) {
      image.style.backgroundPosition = position();
    }
  })
};

export { moveSearchImage };