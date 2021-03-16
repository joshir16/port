/** @format */

"use strict";
// =============================================
let closeNavbar = document.querySelector(".navbar");
let container = document.querySelector(".container");

let uncheck = function () {
  document.getElementById("nav_toggle").checked = false;
};

closeNavbar.addEventListener("click", uncheck);
container.addEventListener("click", uncheck);
