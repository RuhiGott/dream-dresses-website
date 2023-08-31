var isTouchScreen = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));

let help_box = document.querySelectorAll(".help-box");

if (isTouchScreen) {

    help_box.forEach((event) => {
        event.addEventListener("click", () => {
            if (event.classList.contains("active")) {
            event.classList.remove("active");
            } else {
            event.classList.add("active");
            }
        });
        });
} 
