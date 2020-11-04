const seeAll = () => {
  var btn = document.querySelector("#seeAllBtn")
  var showCard = document.querySelector(".professions");
  var chevron = document.querySelector(".chevron")

  btn.addEventListener("click", function() {
    showCard.classList.toggle("active");
    chevron.classList.toggle("reverse");
    console.log("click");
    
    if (showCard.classList.contains("active")){
      window.scroll({ top: 1900, behavior: 'smooth' });
      showCard.animate([
        // keyframes
        { height: '590px' },
        { height: 'auto' }
      ], {
        // timing options
        duration: 250,
      });
    } else {
      window.scroll({ top: 850, behavior: 'smooth' });
      showCard.animate([
        // keyframes
        { height: 'auto' },
        { height: '590px' }
      ], {
        // timing options
        duration: 100,
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
