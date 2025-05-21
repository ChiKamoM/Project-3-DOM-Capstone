'use strict';
for (var i = 0; i < document.querySelectorAll(".show-modal").length; i++) {
    document.querySelectorAll(".show-modal")[i].addEventListener("click",function () {
     document.querySelector(".modal").classList.remove("hidden")
     document.querySelector(".close-modal").addEventListener("click", function () {
        document.querySelector(".modal").classList.add("hidden")
     })
    })  
}