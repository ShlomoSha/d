const a1 = document.querySelector("a1")
const a2 = document.querySelector("a2")
const a3 = document.querySelector("a3")

window.addEventListener("deviceorientation", e =>{
    a1.textContent = e.alpha
    a2.textContent = e.beta
    a3.textContent = e.gamma
    a4.textContent = 'the north' + 360 - e.alpha
})