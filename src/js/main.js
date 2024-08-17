"use strict"

// Variabler
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");


// Händelsehanterare
openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);


//funktion som öppnar/stänger menyn
function toggleMenu() {
  let navMenuEl = document.getElementById("nav-menu");

  let style = window.getComputedStyle(navMenuEl);

  //kontroll om menyn är öppen/stängd

  if (style.display === "none") {
      navMenuEl.style.display = "block";
  } else {
      navMenuEl.style.display = "none";
  }
}

