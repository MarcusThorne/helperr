const seeSideways = () => {
  var btn1 = document.querySelector("#seeAllBtn4");
  var btn2 = document.querySelector("#seeAllBtn5");
  var featured = document.querySelector(".featured-left-right");
  
  btn1.addEventListener("click", function() {
    console.log("Left Button Clicked")

    featured.animate([
      // keyframes
      { transform: 'translate3D(9%, 0%, 0)' }
    ], {
      // timing options
      duration: 600,
    });

    setTimeout(() => { 
      var value = parseInt(window.getComputedStyle(featured).marginLeft) + 584 + 'px'
      featured.style.marginLeft = value;
    }, 600);

  })
  
  btn2.addEventListener("click", function() {
    console.log("Right Button Clicked")
    featured.animate([
      // keyframes
      { transform: 'translate3D(-9%, 0%, 0)' }
    ], {
      // timing options
      duration: 600,
    });
    
    setTimeout(() => { 
      var value = parseInt(window.getComputedStyle(featured).marginLeft) - 584 + 'px'
      featured.style.marginLeft = value;
    }, 600);
    
    
  });
}

export { seeSideways };
