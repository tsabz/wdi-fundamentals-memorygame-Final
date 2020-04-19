console.log("Up and running!");


const cards = [
{
 rank: "queen",
 suit: "hearts",	
 cardImage:	"images/queen-of-hearts.png",
},
{
 rank: "queen",
 suit: "diamonds",	
 cardImage:	"images/queen-of-diamonds.png",	
},
{
 rank: "king",	
 suit: "hearts",	
 cardImage:	"images/king-of-hearts.png",
 },
 {
 rank: "king",	
 suit: "diamonds",	
 cardImage:	"images/king-of-diamonds.png",
 }
];

cardInPlay = []; 


cardInPlay.push("queen"); 

cardInPlay.push("king"); 

cardId = [];
cardId.push("queen");
cardId.push("king");

function checkForMatch(){
if (cardInPlay[0] === cardInPlay[2]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

function flipCard(cardId) {
	  console.log("user flipped" + cards[cardId].rank) 
	  console.log("images/queen-of-hearts.png") 
	  console.log("hearts")
	  console.log("images/king-of-hearts.png")
	  console.log("hearts")
	checkForMatch()
if (cardInPlay[0] === cardInPlay[2]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
};
flipCard(0);
flipCard(2);
 
