const backToTop = () => {
  var button = document.querySelector(".back-to-top")

  button.addEventListener("click", function() {
    window.scroll({ top: 0, behavior: 'smooth' });
  })
}

export { backToTop };