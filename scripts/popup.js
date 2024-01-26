window.addEventListener("load", function(){
    setTimeout(function() {
        // Add blur class to elements other than .popup
        document.querySelectorAll("body > :not(.popup)").forEach(function(element) {
            element.classList.add("blur");
        });

        // Show the popup
        document.querySelector(".popup").style.display = "flex";
    }, 1500);
});

document.querySelector(".x-circle").addEventListener("click", function(){
    // Remove blur class from elements other than .popup
    document.querySelectorAll("body > :not(.popup)").forEach(function(element) {
        element.classList.remove("blur");
    });

    // Hide the popup
    document.querySelector(".popup").style.display = "none";
});
