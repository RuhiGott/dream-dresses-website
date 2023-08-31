var isTouchScreen = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));

let question = document.querySelectorAll(".hover-flex");

if (isTouchScreen) {

    question.forEach((event) => {
        event.addEventListener("click", () => {
            if (event.classList.contains("active")) {
            event.classList.remove("active");
            } else {
            event.classList.add("active");
            }
        });
        });
} 
