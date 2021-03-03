const card = document.querySelectorAll(".benefit_box");

function flipCard() {
  this.classList.toggle('is-flipped');
}
card.forEach((card) => card.addEventListener("click", flipCard));