const a1 = document.querySelector(".a1")
const a2 = document.querySelector(".a2")
const a3 = document.querySelector(".a3")
const a4 = document.querySelector(".a4")

// window.addEventListener("deviceorientation", e =>{
//     a1.textContent = "al: " + e.alpha
//     a2.textContent = "b: " + e.beta
//     a3.textContent = "g: " + e.gamma
//     a4.textContent = 'the north' + 360 - e.alpha
// })

window.addEventListener("deviceorientation", (event) => {
    const alpha = event.alpha; // הכיוון ביחס לצפון מגנטי
    const compassHeading = 360 - alpha; // חישוב הצפון האמיתי
    console.log(`Compass Heading: ${compassHeading.toFixed(2)}°`);
    a1.textContent = `al: ${compassHeading}` 
});
