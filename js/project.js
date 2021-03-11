/** @format */

let htmlBtn = document.querySelector(".htmlcss-btn");
let htmlDiv = document.querySelector(".html-div");

let jsBtn = document.querySelector(".js-btn");
let jsDiv = document.querySelector(".js-div");

htmlBtn.addEventListener("click", function () {
  htmlDiv.classList.add("display-project");
  jsDiv.classList.remove("display-project");
});

jsBtn.addEventListener("click", function () {
  jsDiv.classList.add("display-project");
  htmlDiv.classList.remove("display-project");
});
