const scrollTo = () => {
  var button1 = document.querySelector(".social1")
  var button2 = document.querySelector(".social2")
  var button3 = document.querySelector(".social3")
  var button4 = document.querySelector(".social4")
  var button5 = document.querySelector(".social5")
  var button6 = document.querySelector(".social6")

  button1.addEventListener("click", function() {
    window.scroll({ top: 2450, behavior: 'smooth' })
    var step1 = document.querySelector(".step1")
    var step2 = document.querySelector(".step2")
    var step3 = document.querySelector(".step3")
    var step4 = document.querySelector(".step4")
    var step5 = document.querySelector(".step5")
    var step6 = document.querySelector(".step6")
    
    step1.classList.toggle("active-step")
    step2.classList.remove("active-step")
    step3.classList.remove("active-step")
    step4.classList.remove("active-step")
    step5.classList.remove("active-step")
    step6.classList.remove("active-step")
  })

  button2.addEventListener("click", function() {
    window.scroll({ top: 2450, behavior: 'smooth' })
    var step1 = document.querySelector(".step1")
    var step2 = document.querySelector(".step2")
    var step3 = document.querySelector(".step3")
    var step4 = document.querySelector(".step4")
    var step5 = document.querySelector(".step5")
    var step6 = document.querySelector(".step6")
    
    step1.classList.remove("active-step")
    step2.classList.toggle("active-step")
    step3.classList.remove("active-step")
    step4.classList.remove("active-step")
    step5.classList.remove("active-step")
    step6.classList.remove("active-step")
  })

  button3.addEventListener("click", function() {
    window.scroll({ top: 2450, behavior: 'smooth' })
    var step1 = document.querySelector(".step1")
    var step2 = document.querySelector(".step2")
    var step3 = document.querySelector(".step3")
    var step4 = document.querySelector(".step4")
    var step5 = document.querySelector(".step5")
    var step6 = document.querySelector(".step6")
    
    step1.classList.remove("active-step")
    step2.classList.remove("active-step")
    step3.classList.toggle("active-step")
    step4.classList.remove("active-step")
    step5.classList.remove("active-step")
    step6.classList.remove("active-step")
  })

  button4.addEventListener("click", function() {
    window.scroll({ top: 2450, behavior: 'smooth' })
    var step1 = document.querySelector(".step1")
    var step2 = document.querySelector(".step2")
    var step3 = document.querySelector(".step3")
    var step4 = document.querySelector(".step4")
    var step5 = document.querySelector(".step5")
    var step6 = document.querySelector(".step6")
    
    step1.classList.remove("active-step")
    step2.classList.remove("active-step")
    step3.classList.remove("active-step")
    step4.classList.toggle("active-step")
    step5.classList.remove("active-step")
    step6.classList.remove("active-step")
  })

  button5.addEventListener("click", function() {
    window.scroll({ top: 2450, behavior: 'smooth' })
    var step1 = document.querySelector(".step1")
    var step2 = document.querySelector(".step2")
    var step3 = document.querySelector(".step3")
    var step4 = document.querySelector(".step4")
    var step5 = document.querySelector(".step5")
    var step6 = document.querySelector(".step6")
    
    step1.classList.remove("active-step")
    step2.classList.remove("active-step")
    step3.classList.remove("active-step")
    step4.classList.remove("active-step")
    step5.classList.toggle("active-step")
    step6.classList.remove("active-step")
  })

  button6.addEventListener("click", function() {
    window.scroll({ top: 2450, behavior: 'smooth' })
    var step1 = document.querySelector(".step1")
    var step2 = document.querySelector(".step2")
    var step3 = document.querySelector(".step3")
    var step4 = document.querySelector(".step4")
    var step5 = document.querySelector(".step5")
    var step6 = document.querySelector(".step6")
    
    step1.classList.remove("active-step")
    step2.classList.remove("active-step")
    step3.classList.remove("active-step")
    step4.classList.remove("active-step")
    step5.classList.remove("active-step")
    step6.classList.toggle("active-step")
  })
}

export { scrollTo };