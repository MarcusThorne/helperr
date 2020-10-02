const seeAll = () => {
  var btn = document.querySelector("#seeAllBtn")
  var showCard = document.querySelector(".professions");

  btn.addEventListener("click", function() {
    showCard.classList.toggle("active");
    btn.classList.toggle("reverse");
    window.scroll(0,findPos(btn));
    console.log("click");
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
