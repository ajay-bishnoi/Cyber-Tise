"use strict";
// --------NavBar-----------//
function openNav() {
  document.querySelector(".closeNav").classList.toggle("start-0");
  document.querySelector("body").classList.toggle("overflow_hide");
  document.querySelector(".menu").classList.toggle("cross");
}

function navWorking() {
  if (window.innerWidth <= 992) {
    document.querySelector("body").classList.remove("overflow_hide");
    document.querySelector(".closeNav").classList.toggle("start-0");
    document.querySelector(".menu").classList.toggle("cross");
  }
}
// ------ preLoader ------- //
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      let loadingOverlay = document.getElementById("loadingOverlay");
      loadingOverlay.style.display = "none";
      document.querySelector("body").classList.remove("overflow_hidden");
    }, 1000);
  });
});
// --------- accordion --------- //
let accitem = document.querySelectorAll(".accordion_item");
accitem.forEach((e, arrow) => {
  e.addEventListener("click", function () {
    const activeAcc = document.querySelector(".active");
    e.classList.toggle("active");
    activeAcc.classList.toggle("addBorder");
    activeAcc && activeAcc.classList.remove("active");
  });
});
// -------- back to top button ------------ //
let mybutton = document.getElementById("myBtn");
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", () => {
  if (window.innerWidth < 992 && window.scrollY > 1050) {
    mybutton.setAttribute("style", "display: flex;");
  } else if (window.innerWidth >= 992 && window.scrollY > 400) {
    mybutton.setAttribute("style", "display: flex;");
  } else {
    mybutton.setAttribute("style", "display: none;");
  }
});
// aos animation
AOS.init({
  duration: 1200,
  once: true,
});
