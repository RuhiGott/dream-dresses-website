var isTouchScreen = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
var displayElement = document.getElementById('touchscreen-instructions');

if (isTouchScreen) {
    displayElement.textContent = "(click for more information)";
} 

else {
    displayElement.textContent = "(hover for more information)";
}
