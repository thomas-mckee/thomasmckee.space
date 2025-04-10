const texts = [
    "Hello, I'm Thomas.",
    "I'm a computer engineering student."
];

let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typingSpeed = 75;
const deletingSpeed = 50;
const pauseTime = 1000;

const textElement = document.getElementById('text');

function type() {
    if (index >= texts.length) index = 0;
    currentText = texts[index]

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            index++;
            setTimeout(type, 500);
        } else {
            setTimeout(type, deletingSpeed);
        }
    } else {
        textElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(type, pauseTime);
        } else {
            setTimeout(type, typingSpeed);
        }
    }
}

window.onload = function() {
    type();  // Call the typing function when the page loads
};