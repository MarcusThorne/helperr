const hamBurger = () => {
  // setting a varible for the ham burger class and inactive class
  var on = document.querySelector(".ham-burger-on");
  var inactive = document.querySelector(".ham-burger-inactive");

  // enabling the code to understand when someone has clicked on the ham burger sybmol
  on.addEventListener("click", activate => {
    // turn ham-burger-active one when someone has clicked on the on
    inactive.classList.toggle("ham-burger-active");
    on.classList.toggle("ham-burger-off");
    console.log("Ham Burger Active");
    var active = document.querySelector(".ham-burger-active");

    if (inactive.classList.contains("ham-burger-active")){
      active.animate([
        // keyframes
        { transform: 'scaleX(0.5) translate(-150%, 0)' }, 
        { transform: 'scaleX(1) translate(0, 0)' }
      ], { 
        // timing options
        duration: 250,
      });
    } else {
      inactive.animate([ 
        // keyframes
        { width: '120%' },
        { width: '60%' }
      ], { 
        // timing options
        duration: 250,
      });
    };
  });
};

export { hamBurger };
  