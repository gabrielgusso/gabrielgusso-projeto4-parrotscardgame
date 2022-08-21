let list = []
const cardPair = []
let counter = 0
startGame()


function startGame(){
  const array = [
    "bobrossparrot",
    "bobrossparrot",
    "explodyparrot",
    "explodyparrot",
    "fiestaparrot",
    "fiestaparrot",
    "metalparrot",
    "metalparrot",
    "revertitparrot",
    "revertitparrot",
    "tripletsparrot",
    "tripletsparrot",
    "unicornparrot",
    "unicornparrot",
  ]
 list = []
const numberOfCards = prompt("Com quantas castas você quer jogar?(Escolha um numero par de 4 a 14)")
if (numberOfCards >= 4 && numberOfCards <= 14 && numberOfCards % 2 === 0) {



for (
  let i = 0; numberOfCards > i; i++ ) {

      list.push(`<li class="card canClick" onclick="flip(this)">
      <div class="face first">
        <img src="img/front.png" alt="front-card" />
      </div>
      <div class="face back-face-default">
        <img src="img/${array[i]}.gif" alt="back-card" />
      </div>
    </li>`) 
    
  }
  addList()
}
else {
  alert("Você deve inserir valores pares entre 4 e 14.")
  startGame()
}

function addList(){
  const listHTML = document.querySelector(".cards")
  list.sort(comparador)

  listHTML.innerHTML = list
  listHTML.innerHTML = listHTML.innerHTML.replaceAll(',', '')

  }
  function comparador() {
    return Math.random() - 0.5;
  }
}

// function twoFunctions(){
//   checkCard()
//   flip()
// }

// function checkCard(element2){
//   if(element2.classList.contains('canClick') === true){
//     element2.classList.add("clickedCard")
//     element2.classList.remove("canClick")
//     cardPair.push(element2)
//     if(cardPair.length === 2){
//       checkPair()
//     }
//   }
// }



function flip(element) {
  const child1 = element.children[0];
  const child2 = element.children[1];
  counter++
  if(element.classList.contains('canClick') === true){
    element.classList.add("clickedCard")
    element.classList.remove("canClick")
    cardPair.push(element)

    if(cardPair.length === 2){
      checkPair()
    }
  }
  
  if(element.classList.contains("ok") === true){
    console.log("acertou")
    child1.classList.add("front-face");
    child2.classList.add("back-face");
  } else {
  child1.classList.add("front-face");
  child1.classList.add("turn");
  child2.classList.add("back-face");
  child2.classList.add("turn2");
  
  }

}

function checkPair(){
  if(cardPair[0].querySelector(".back-face-default").innerHTML === cardPair[1].querySelector(".back-face-default").innerHTML){
    cardPair[0].classList.add("ok")
    cardPair[1].classList.add("ok")
    
    cardPair[0].classList.remove("clickedCard")
    cardPair[1].classList.remove("clickedCard")

    cardPair[0].children[0].classList.remove("turn")
    cardPair[0].children[1].classList.remove("turn2")

    cardPair[1].children[0].classList.remove("turn")
    cardPair[1].children[1].classList.remove("turn2")
    cardPair.pop()
    cardPair.pop()
    gameFinished()
   
  } else {
    setTimeout(flipCardsBack, 1000);
    // for (i = 0; i < list.length; i++) {
    //   list[i].classList.remove('canClick');
  // }
  
}
}

function flipCardsBack(){
  const frontFace = document.querySelectorAll(".turn")
  const backFace = document.querySelectorAll(".turn2")
  
  for(let i = 0; cardPair.length > i;i++){
    
  frontFace[i].classList.remove("front-face");
  frontFace[i].classList.remove("turn");
  backFace[i].classList.remove("back-face");
  backFace[i].classList.remove("turn2");
  cardPair[i].classList.remove("clickedCard");
  cardPair[i].classList.add("canClick");
  }
  cardPair.pop()
  cardPair.pop()
  
//   for (i = 0; i < list.length; i++) {
//     const canClick = document.querySelectorAll(".clickedCard")
//     console.log(canClick[i])
//     canClick[i].classList.add("canClick")
//     canClick[i].classList.remove("clickedCard")
// }
}

function gameFinished(){
  let i = 0
  const checkOk = document.querySelectorAll(".ok")
  console.log(checkOk)
  for (let j = 0; j < checkOk.length; j++){
    i++
    

    // console.log(checkOk.forEach("ok"))
    // if (  checkOk[j].includes("ok") === true ){
    //   console.log("aeaea")
    //   i++;
    // }
  }
    if(list.length === i){
      alert("Você ganhou em "+ counter +" jogadas!")
    }
  
}
