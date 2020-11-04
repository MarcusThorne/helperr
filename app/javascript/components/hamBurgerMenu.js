const hamBurger = () => {
  // setting a varible for the ham burger class and inactive class
  var on = document.querySelector(".hamburger-on");
  var hamburger = document.querySelector(".hamburger");
  var placeHolder = document.querySelector(".hamburger-placeholder")

  // enabling the code to understand when someone has clicked on the ham burger sybmol
  on.addEventListener("click", activate => {
    // turn ham-burger-active one when someone has clicked on the on
    hamburger.classList.toggle("hamburger-active");
    on.classList.toggle("hamburger-off");
    placeHolder.classList.toggle("hamburger-placeholder-active");
    console.log("Ham Burger Active");
    var active = document.querySelector(".hamburger-active");

    if (hamburger.classList.contains("hamburger-active")){
      active.animate([
        // keyframes
        { width: '0' },
        { width: '72vw' }
      ], {
        // timing options
        duration: 300,
      });
    } else {
      hamburger.animate([
        // keyframes
        { width: '144vw' },
        { width: '0vw' }
      ], {
        // timing options
        duration: 600,
      });
    };
  });
};

export { hamBurger };
