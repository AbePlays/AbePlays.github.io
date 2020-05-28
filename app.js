// Loading Screen Animation

const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 3000);
}

init();

// Tween Animation
// const tl = TimelineMax();

// iPhone Animation
function iphoneAnimation() {
  const iPhone = document.querySelector(".ios__img");
  var iPhonePos = iPhone.getBoundingClientRect().top;
  var screenPos = window.innerHeight;

  if (iPhonePos < screenPos) {
    iPhone.classList.add("img__appear");
  }
}

window.addEventListener("scroll", iphoneAnimation);
