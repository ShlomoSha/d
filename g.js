const arrow = document.querySelector('.compass-arrow');
const headingDisplay = document.querySelector('.compass-heading');

if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (event) => {
        const alpha = event.alpha; // זווית ביחס לצפון מגנטי
        const heading = 360 - alpha; // חישוב צפון אמיתי
        arrow.style.transform = `translateX(-50%) rotate(${heading}deg)`;
        headingDisplay.textContent = `Heading: ${heading.toFixed(0)}°`;
    });
} else {
    headingDisplay.textContent = "DeviceOrientation API not supported on this device.";
}
