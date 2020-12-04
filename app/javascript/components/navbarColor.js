const navbarColor = () => {
  window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar-container')
    let windowPosition = window.scrollY > 80

    navbar.classList.toggle('scrolling-active', windowPosition)
  })
}

export {navbarColor};