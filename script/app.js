const text = ["Developer", "Marketer", "Photographer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  var element = document.querySelector(".typing");

  if (element) {
    element.textContent = letter;
  }
  if (letter === currentText) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();

// console.log("test");
// make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".container");
// ("nav-open");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// sticky navigation bar
const sectionHeroEl = document.querySelector(".introduction");
const parentEl = document.querySelector(".container");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting == false) headerEl.classList.add("sticky");
    if (ent.isIntersecting == true) headerEl.classList.remove("sticky");
  },
  {
    //in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
