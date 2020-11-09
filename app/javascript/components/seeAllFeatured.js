const seeAllFeatured = () => {
  var btn = document.querySelector("#seeAllBtn2")
  var showCard = document.querySelector(".featured");
  var chevron = document.querySelector(".chevron-featured")

  btn.addEventListener("click", function() {
    showCard.classList.toggle("see-all-active-featured");
    chevron.classList.toggle("reverse");
    console.log("Clicked see all button");
    
    if (showCard.classList.contains("see-all-active-featured")){
      window.scroll({ top: 2500, behavior: 'smooth' });
      showCard.animate([
        // keyframes
        { height: '100%' },
        { height: 'auto' }
      ], {
        // timing options
        duration: 375,
      });
    } else {
      window.scroll({ top: 2000, behavior: 'smooth' });
      showCard.animate([
        // keyframes
        { height: 'auto' },
        { height: '100%' }
      ], {
        // timing options
        duration: 600,
      });
    };
  });

  // function findPos(obj) {
  //   var curtop = -10000;
  //   if (obj.offsetParent) {
  //       do {
  //           curtop += obj.offsetTop;
  //       } while (obj = obj.offsetParent);
  //   return [curtop];
  //   }
  // }
}

export { seeAllFeatured };
