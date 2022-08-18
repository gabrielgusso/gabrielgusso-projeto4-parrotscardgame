const numberOfCards = prompt(
  "Com quantas castas você quer jogar?(Escolha um numero par de 4 a 14)"
);
const list = document.querySelector(".cards");

let i = 0;

while (
  numberOfCards > i &&
  numberOfCards % 2 === 0 &&
  numberOfCards >= 4 &&
  numberOfCards <= 14
) {
  list.innerHTML =
    list.innerHTML +
    `<li class="card"><img src="img/front.png" alt="parrot-card"></li>`;
  i++;
}
