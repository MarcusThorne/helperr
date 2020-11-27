const removeObject = () => {
  var button = document.querySelector(".back-to-top")

  addEventListener("scroll", function() {
    if (window.scrollY > 100) {
      button.style.display = 'block'
      button.style.visibility = 'visible'
    } else {
      button.style.display = 'none'
      button.style.visibility = 'hidden'
    }
  })
}

export { removeObject };