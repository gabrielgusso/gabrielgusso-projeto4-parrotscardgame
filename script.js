const numberOfCards = prompt(
  "Com quantas castas você quer jogar?(Escolha um numero par de 4 a 14)"
);
const list = document.querySelector(".cards");

for (
  let i = 0;
  numberOfCards > i &&
  numberOfCards % 2 === 0 &&
  numberOfCards >= 4 &&
  numberOfCards <= 14;
  i++
) {
  list.innerHTML =
    list.innerHTML +
    `<li class="card" onclick="flip(this)">
    <div class="face first">
      <img src="img/front.png" alt="front-card" />
    </div>
    <div class="face back-face-default">
      <img src="img/fiestaparrot.gif" alt="back-card" />
    </div>
  </li>`;
}

function flip(element) {
  const child1 = element.children[0];
  const child2 = element.children[1];
  child1.classList.toggle("front-face");
  child2.classList.toggle("back-face");
}
