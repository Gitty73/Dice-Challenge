var firstImage = document.querySelector(".img1");
var secondImage = document.querySelector(".img2");
var H1 = document.querySelector("h1");

var firstRandomNumber = Math.random();
    firstRandomNumber = Math.floor((firstRandomNumber * 6) + 1);

var secondRandomNumber = Math.random();
    secondRandomNumber = Math.floor((secondRandomNumber * 6) + 1);


if(firstRandomNumber === 1){
  firstImage.setAttribute("src", "images/dice1.png");
} else if (firstRandomNumber === 2){
  firstImage.setAttribute("src", "images/dice2.png");
} else if (firstRandomNumber === 3) {
  firstImage.setAttribute("src", "images/dice3.png");
} else if (firstRandomNumber === 4) {
  firstImage.setAttribute("src", "images/dice4.png");
} else if (firstRandomNumber === 5) {
  firstImage.setAttribute("src", "images/dice5.png");
} else if (firstRandomNumber === 6) {
  firstImage.setAttribute("src", "images/dice6.png");
}

if(secondRandomNumber === 1){
  secondImage.setAttribute("src", "images/dice1.png");
} else if (secondRandomNumber === 2){
  secondImage.setAttribute("src", "images/dice2.png");
} else if (secondRandomNumber === 3) {
  secondImage.setAttribute("src", "images/dice3.png");
} else if (secondRandomNumber === 4) {
  secondImage.setAttribute("src", "images/dice4.png");
} else if (secondRandomNumber === 5) {
  secondImage.setAttribute("src", "images/dice5.png");
} else if (secondRandomNumber === 6) {
  secondImage.setAttribute("src", "images/dice6.png");
}


if(firstRandomNumber > secondRandomNumber){
  H1.innerHTML = "<h1>Player 1 Wins <img src='images/flag.png' style = 'width: 10%'></h1>";
} else if(firstRandomNumber < secondRandomNumber){
  H1.innerHTML = "<h1><img src='images/flag.png' style = 'width: 10%'> Player 2 Wins</h1>";
} else {
  H1.innerHTML = "<h1>Oops! Its Tie</h1>";
}
