let cards = []; // array -ordered list of item
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-El")
let sumEl = document.querySelector("#sum-El");
console.log(sumEl);
let cradsEl = document.getElementById("cards-el");

let player= {
   name:"Abhishek",
   chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name +  ":  Rupees" + player.chips;

function getRandonCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive=true;
  let firstCard = getRandonCard();
  let secondCard = getRandonCard();
  cards=[firstCard , secondCard];
  sum=firstCard+secondCard;
  renderGame();
}

function renderGame() {
  //Render out firstcard and secondCard
  cradsEl.textContent = "Cards: ";
  for (const element of cards) {
    cradsEl.textContent += element + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new Card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got the Blackjack!";
    hasBlackJack = true;
  } else {
    message = "Your're out of te game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandonCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
  
}

