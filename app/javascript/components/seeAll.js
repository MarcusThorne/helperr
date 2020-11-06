const seeAll = () => {
  var btn = document.querySelector("#seeAllBtn")
  var showCard = document.querySelector(".professions");
  var chevron = document.querySelector(".chevron")

  btn.addEventListener("click", function() {
    showCard.classList.toggle("see-all-active");
    chevron.classList.toggle("reverse");
    console.log("click");
    
    if (showCard.classList.contains("see-all-active")){
      window.scroll({ top: 1600, behavior: 'smooth' });
      showCard.animate([
        // keyframes
        { height: '100%' },
        { height: 'auto' }
      ], {
        // timing options
        duration: 375,
      });
    } else {
      window.scroll({ top: 600, behavior: 'smooth' });
      showCard.animate([
        // keyframes
        { height: 'auto' },
        { height: '100%' }
      ], {
        // timing options
        duration: 375,
      });
    };
  });

  function findPos(obj) {
    var curtop = -600;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
  }
}

export { seeAll };
