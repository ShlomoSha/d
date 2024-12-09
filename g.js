const a1 = document.querySelector(".a1")
const a2 = document.querySelector(".a2")
const a3 = document.querySelector(".a3")
const a4 = document.querySelector(".a4")

window.addEventListener("deviceorientation", e =>{
    a1.textContent = "al: " + e.alpha
    a2.textContent = "b: " + e.beta
    a3.textContent = "g: " + e.gamma
    a4.textContent = 'the north' + 360 - e.alpha
})