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

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardInPlay[0] === cardInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}