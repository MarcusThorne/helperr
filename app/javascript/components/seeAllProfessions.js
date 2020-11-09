const seeAllProfessions = () => {
  var btn = document.querySelector("#seeAllBtn1")
  var showCard = document.querySelector(".professions");
  var chevron = document.querySelector(".chevron-professions")

  btn.addEventListener("click", function() {
    showCard.classList.toggle("see-all-active-professions");
    chevron.classList.toggle("reverse");
    console.log("click");
    
    if (showCard.classList.contains("see-all-active-professions")){
      window.scroll({ top: 900, behavior: 'smooth' });
      showCard.animate([
        // keyframes
        { height: '100%' },
        { height: 'auto' }
      ], {
        // timing options
        duration: 375,
      });
    } else {
      window.scroll({ top: 400, behavior: 'smooth' });
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

export { seeAllProfessions };
