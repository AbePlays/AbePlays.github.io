// Loading Screen Animation

const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 0);
}

init();

// iPhone Animation
function iphoneAnimation() {
  const iPhone = document.querySelector(".ios__img");
  var iPhonePos = iPhone.getBoundingClientRect().top;
  var screenPos = window.innerHeight / 1.5;

  if (iPhonePos < screenPos) {
    iPhone.classList.add("img__appear");
  }
}

window.addEventListener("scroll", iphoneAnimation);

// Methodology Animation
function cardAnimation() {
  const cards = document.querySelectorAll(".card");

  var cardPos = cards[0].getBoundingClientRect().top;
  var screenPos = window.innerHeight / 1.5;

  if (cardPos < screenPos) {
    cards.forEach((card) => {
      card.classList.add("card__appear");
    });
  }
}

window.addEventListener("scroll", cardAnimation);

// Footer Animation
function footerAnimation() {
  const links = document.querySelector(".footer__links");

  var linkPos = links.getBoundingClientRect().top;
  var screenPos = window.innerHeight;

  if (linkPos < screenPos) {
    links.classList.add("links__appear");
  }
}

window.addEventListener("scroll", footerAnimation);
