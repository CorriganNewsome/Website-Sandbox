"use strict";

const btn = document.getElementsByClassName(".btn");
const h1 = document.querySelector(".title");
document.addEventListener("click", () => {
  console.log("click works");
  h1.style.color = "#ff0000";
});
