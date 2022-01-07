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
console.log(btnNavEl);
const headerEl = document.querySelector(".container");
// ("nav-open");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
