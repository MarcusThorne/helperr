const seeSideways = () => {
  var btn1 = document.querySelector("#seeAllBtn4");
  var btn2 = document.querySelector("#seeAllBtn5");
  var featured = document.querySelector(".left-right");

  btn1.addEventListener("click", function() {
    console.log("Left Button Clicked")

    featured.animate([
      // keyframes
      { transform: 'translate3D(8%, 0%, 0)' }
    ], {
      // timing options
      duration: 400,
    });

    setTimeout(() => {
      var value = parseInt(window.getComputedStyle(featured).marginLeft) + 268 + 'px';
      featured.style.marginLeft = value;
    }, 600);

    if (828 === parseInt(window.getComputedStyle(document.querySelector(".featured")).width)) {
      if (-1 < parseInt(window.getComputedStyle(featured).marginLeft)) {
        var value1 = -2144 + 'px';
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
      var value = (-2144 - 268)  + 'px';
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
      { transform: 'translate3D(-8%, 0%, 0)' }
    ], {
      // timing options
      duration: 400,
    });

    setTimeout(() => {
      var value = parseInt(window.getComputedStyle(featured).marginLeft) - 268 + 'px'
      featured.style.marginLeft = value;
    }, 400);


    if (828 === parseInt(window.getComputedStyle(document.querySelector(".featured")).width)) {
      if (-2143 > parseInt(window.getComputedStyle(featured).marginLeft)) {
        var value1 = 268 + 'px';
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
      var value = 268 + 'px';
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
