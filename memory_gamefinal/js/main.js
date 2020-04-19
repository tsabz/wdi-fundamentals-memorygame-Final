console.log("Up and running!");

let cardOne = "queen";
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king";


const cards = ["queen", "queen", "king", "king"];
cardInPlay = []; 

cardOne = cards[0];
cardTwo = cards[2];
cardInPlay.push(cardOne); 
cardInPlay.push(cardTwo); 

cardId = [];
cardId.push(cardOne);
cardId.push(cardTwo);

function checkForMatch(){
if (cardInPlay[0] === cardInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

function flipCard(cardId) {
	  console.log("user flipped" + cards[cardId])
	  checkForMatch()
if (cardInPlay[0] === cardInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
};
flipCard(0);
flipCard(2);
