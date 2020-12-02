const reviewDots = () => {
  var dot1 = document.querySelector(".dot1")
  var dot2 = document.querySelector(".dot2")
  var dot3 = document.querySelector(".dot3")
  var dot4 = document.querySelector(".dot4")
  var reviews = document.querySelector(".reviews")

  dot1.addEventListener("click", function() {
    dot1.classList.toggle("active-review")
    dot2.classList.remove("active-review")
    dot3.classList.remove("active-review")
    dot4.classList.remove("active-review")
    reviews.style.marginLeft = "0px"
  })

  dot2.addEventListener("click", function() {
    dot1.classList.remove("active-review")
    dot2.classList.toggle("active-review")
    dot3.classList.remove("active-review")
    dot4.classList.remove("active-review")
    reviews.style.marginLeft = "-896px"
  })

  dot3.addEventListener("click", function() {
    dot1.classList.remove("active-review")
    dot2.classList.remove("active-review")
    dot3.classList.toggle("active-review")
    dot4.classList.remove("active-review")
    reviews.style.marginLeft = "-1792px"
  })

  dot4.addEventListener("click", function() {
    dot1.classList.remove("active-review")
    dot2.classList.remove("active-review")
    dot3.classList.remove("active-review")
    dot4.classList.toggle("active-review")
    reviews.style.marginLeft = "-2688px"
  })
}

const nextReview = () => {
  var button = document.querySelector(".review-right")
  var reviews = document.querySelector(".reviews")
  var dot1 = document.querySelector(".dot1")
  var dot2 = document.querySelector(".dot2")
  var dot3 = document.querySelector(".dot3")
  var dot4 = document.querySelector(".dot4")

  button.addEventListener("click", function() {
    reviews.animate([
      // keyframes
      { transform: 'translate3D(-25%, 0%, 0)' }
    ], {
      // timing options
      duration: 1000,
    });

    setTimeout(() => {
      if (reviews.style.marginLeft === "") {
        reviews.style.marginLeft = '-896px'
        dotActive()
      } else if (reviews.style.marginLeft === "-2688px") { 
        reviews.style.marginLeft = "0px"
        dotActive()
      } else {
        reviews.style.marginLeft = parseInt(reviews.style.marginLeft) + -896 + "px"
        dotActive()
      }
    }, 1000);
    

    function dotActive() {
      if (reviews.style.marginLeft === "0px") {
        dot1.classList.toggle("active-review")
        dot2.classList.remove("active-review")
        dot3.classList.remove("active-review")
        dot4.classList.remove("active-review")
      } else if (reviews.style.marginLeft === '-896px') {
        dot1.classList.remove("active-review")
        dot2.classList.toggle("active-review")
        dot3.classList.remove("active-review")
        dot4.classList.remove("active-review")
      } else if (reviews.style.marginLeft === '-1792px') {
        dot1.classList.remove("active-review")
        dot2.classList.remove("active-review")
        dot3.classList.toggle("active-review")
        dot4.classList.remove("active-review")
      } else if (reviews.style.marginLeft === "-2688px") {
        dot1.classList.remove("active-review")
        dot2.classList.remove("active-review")
        dot3.classList.remove("active-review")
        dot4.classList.toggle("active-review")
      }
    }
  })
}

const previousReview = () => {
  var button = document.querySelector(".review-left")
  var reviews = document.querySelector(".reviews")
  var dot1 = document.querySelector(".dot1")
  var dot2 = document.querySelector(".dot2")
  var dot3 = document.querySelector(".dot3")
  var dot4 = document.querySelector(".dot4")

  button.addEventListener("click", function() {
    reviews.animate([
      // keyframes
      { transform: 'translate3D(10%, 0%, 0)' }
    ], {
      // timing options
      duration: 500,
    });

    setTimeout(() => {
      if (reviews.style.marginLeft === "") {
        reviews.style.marginLeft = "-2688px"
        dotActive();
      } else if (reviews.style.marginLeft === "0px") {
        reviews.style.marginLeft = "-2688px"
        dotActive();
      } else {
        reviews.style.marginLeft = parseInt(reviews.style.marginLeft) + 896 + "px"
        dotActive();
      }
    }, 1000);

    function dotActive() {
      if (reviews.style.marginLeft === "-2688px") {
        dot4.classList.toggle("active-review")
        dot2.classList.remove("active-review")
        dot3.classList.remove("active-review")
        dot1.classList.remove("active-review")
      } else if (reviews.style.marginLeft === '-1792px') {
        dot1.classList.remove("active-review")
        dot3.classList.toggle("active-review")
        dot2.classList.remove("active-review")
        dot4.classList.remove("active-review")
      } else if (reviews.style.marginLeft === '-896px') {
        dot1.classList.remove("active-review")
        dot3.classList.remove("active-review")
        dot2.classList.toggle("active-review")
        dot4.classList.remove("active-review")
      } else if (reviews.style.marginLeft === "0px") {
        dot4.classList.remove("active-review")
        dot2.classList.remove("active-review")
        dot3.classList.remove("active-review")
        dot1.classList.toggle("active-review")
      }
    }
  })
}

export { reviewDots, nextReview, previousReview }