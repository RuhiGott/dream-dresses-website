var isTouchScreen = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));

let option = document.querySelectorAll(".option");

if (isTouchScreen) {

    option.forEach((event) => {
        event.addEventListener("click", () => {
            if (event.classList.contains("active")) {
            event.classList.remove("active");
            } else {
            event.classList.add("active");
            }
        });
        });
} 
