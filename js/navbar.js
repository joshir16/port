/** @format */

"use strict";
// ====================================== CLOSE Navbar
let closeNavbar = document.querySelector(".navbar");
let container = document.querySelector(".container");

let uncheck = function () {
  document.getElementById("nav_toggle").checked = false;
};

closeNavbar.addEventListener("click", uncheck);
container.addEventListener("click", uncheck);

// ====================================== SMOOTH SCROL

document.querySelector(".navbar-list").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("navbar-list-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
