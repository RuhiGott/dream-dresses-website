function toggleMedia() {
    var reporters = document.querySelector(".reporters");
    var multiple = document.querySelector(".multiple");
    var toHide = document.querySelectorAll(".multiple-out");
    
      reporters.style.display = "grid";
      multiple.style.display = "block";

      toHide.forEach(function(element) {
        element.style.display = "none";
    });

}

function toggleMediaBack() {
    console.log("test");
    var reporters = document.querySelector(".reporters");
    var multiple = document.querySelector(".multiple");
    var toShow = document.querySelectorAll(".multiple-out");
    
      reporters.style.display = "none";
      multiple.style.display = "none";

      toShow.forEach(function(element) {
        element.style.display = "block";
    });

}