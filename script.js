"use strict";

let welcomeBtn = document.getElementById("btn");
let h1 = document.getElementById("title");

document.body.addEventListener("click", () => {
  h1.style.color = "red";
  removeStyle();
});

let removeStyle = () => {
  document.body.addEventListener("click", () => {
    h1.style.color = "black";
  });
};
