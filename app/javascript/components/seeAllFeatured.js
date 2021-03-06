const seeAllFeatured = () => {
  var btn = document.querySelector("#seeAllBtn2");
  var showCard = document.querySelector(".featured");

  function topPlacement() {
    if (document.querySelector(".professions").classList.contains("see-all-active")) {
      return 9500;
    } else {
      return 7400;
    }
  }

  function bottomPlacement() {
    if (document.querySelector(".professions").classList.contains("see-all-active")) {
      return 4900;
    } else {
      return 2800;
    }
  }

  btn.addEventListener("click", function() {
    showCard.classList.toggle("see-all-active");
    btn.classList.toggle("reverse");
    console.log("Clicked see all button");

    if (showCard.classList.contains("see-all-active")) {
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

export { seeAllFeatured };
