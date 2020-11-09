const seeAllProfessions = () => {
  var btn = document.querySelector("#seeAllBtn1");
  var showCard = document.querySelector(".professions");
  var chevron = document.querySelector(".chevron-professions");

  btn.addEventListener("click", function() {
    showCard.classList.toggle("see-all-active");
    chevron.classList.toggle("reverse");
    console.log("Clicked see all button");

    function topPlacement() {
      if (window.getComputedStyle(document.querySelector(".professions")).display === 'grid' ) {
        if (window.getComputedStyle(document.querySelector(".professions")).gridTemplateColumns === "224px 224px 224px 224px") {
          return 1650;
        } else {
          return 1920;
        }
      } else {
        return 2150;
      }
    }

    function bottomPlacement() {
      if (window.getComputedStyle(document.querySelector(".professions")).display === 'grid' ) {
        return 750;
      } else {
        return 500;
      }
    }
    
    if (showCard.classList.contains("see-all-active")){
      window.scroll({ top: topPlacement(), behavior: 'smooth' });
      showCard.animate([
        // keyframes
        { height: '100%' },
        { height: 'auto' }
      ], {
        // timing options
        duration: 600,
      });
    } else {
      window.scroll({ top: bottomPlacement(), behavior: 'smooth' });
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
}

export { seeAllProfessions };
