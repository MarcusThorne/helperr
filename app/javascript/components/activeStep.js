const activeStep = () => {
  var step1 = document.querySelector(".step1")
  var step2 = document.querySelector(".step2")
  var step3 = document.querySelector(".step3")
  var step4 = document.querySelector(".step4")
  var step5 = document.querySelector(".step5")
  var step6 = document.querySelector(".step6")

  step1.addEventListener("click", function() {
    step1.classList.toggle("active-step")
    step2.classList.remove("active-step")
    step3.classList.remove("active-step")
    step4.classList.remove("active-step")
    step5.classList.remove("active-step")
    step6.classList.remove("active-step")
  })

  step2.addEventListener("click", function() {
    step2.classList.toggle("active-step")
    step1.classList.remove("active-step")
    step3.classList.remove("active-step")
    step4.classList.remove("active-step")
    step5.classList.remove("active-step")
    step6.classList.remove("active-step")
  })

  step3.addEventListener("click", function() {
    step3.classList.toggle("active-step")
    step1.classList.remove("active-step")
    step2.classList.remove("active-step")
    step4.classList.remove("active-step")
    step5.classList.remove("active-step")
    step6.classList.remove("active-step")
  })

  step4.addEventListener("click", function() {
    step4.classList.toggle("active-step")
    step1.classList.remove("active-step")
    step2.classList.remove("active-step")
    step3.classList.remove("active-step")
    step5.classList.remove("active-step")
    step6.classList.remove("active-step")
  })

  step5.addEventListener("click", function() {
    step5.classList.toggle("active-step")
    step1.classList.remove("active-step")
    step2.classList.remove("active-step")
    step3.classList.remove("active-step")
    step4.classList.remove("active-step")
    step6.classList.remove("active-step")
  })

  step6.addEventListener("click", function() {
    step6.classList.toggle("active-step")
    step1.classList.remove("active-step")
    step2.classList.remove("active-step")
    step3.classList.remove("active-step")
    step4.classList.remove("active-step")
    step5.classList.remove("active-step")
  })
}

export {activeStep};