const seeSideways = () => {
  var btn1 = document.querySelector("#seeAllBtn4");
  var btn2 = document.querySelector("#seeAllBtn5");
  var featured = document.querySelector(".left-right");

  btn1.addEventListener("click", function() {
    console.log("Left Button Clicked")

    featured.animate([
      // keyframes
      { transform: 'translate3D(292px, 0%, 0)' }
    ], {
      // timing options
      duration: 600,
    });

    setTimeout(() => {
      var value = parseInt(window.getComputedStyle(featured).marginLeft) + 292 + 'px';
      featured.style.marginLeft = value;
    }, 601);

    if (828 === parseInt(window.getComputedStyle(document.querySelector(".featured")).width)) {
      if (-1 < parseInt(window.getComputedStyle(featured).marginLeft)) {
        var value1 = -2336 + 'px';
        featured.style.marginLeft = value1;

        featured.animate([
          // keyframes
          { transform: 'translate3D(-100%, 0%, 0)' }
        ], {
          // timing options
          duration: 500,
        });
      }
    } else if (-1 < parseInt(window.getComputedStyle(featured).marginLeft)) {
      var value = (-2336 - 292)  + 'px';
      featured.style.marginLeft = value;

      featured.animate([
        // keyframes
        { transform: 'translate3D(-100%, 0%, 0)' }
      ], {
        // timing options
        duration: 500,
      });
    }
  })

  btn2.addEventListener("click", function() {
    console.log("Right Button Clicked")

    featured.animate([
      // keyframes
      { transform: 'translate3D(-292px, 0, 0)' }
    ], {
      // timing options
      duration: 601,
    });

    setTimeout(() => {
      var value = parseInt(window.getComputedStyle(featured).marginLeft) - 292 + 'px'
      featured.style.marginLeft = value;
    }, 600);


    if (828 === parseInt(window.getComputedStyle(document.querySelector(".featured")).width)) {
      if (-2143 > parseInt(window.getComputedStyle(featured).marginLeft)) {
        var value1 = 292 + 'px';
        featured.style.marginLeft = value1;

        featured.animate([
          // keyframes
          { transform: 'translate3D(100%, 0%, 0)' }
        ], {
          // timing options
          duration: 500,
        });
      }
    } else if (-2143 > parseInt(window.getComputedStyle(featured).marginLeft)) {
      var value = 292 + 'px';
      featured.style.marginLeft = value;

      featured.animate([
        // keyframes
        { transform: 'translate3D(100%, 0%, 0)' }
      ], {
        // timing options
        duration: 500,
      });
    }
  });
}

export { seeSideways };
