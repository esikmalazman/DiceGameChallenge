var randomNumber1 = Math.floor(Math.random() * 6) + 1; //range number 1-6

var randomImage = "dice" + randomNumber1 + ".png"; //change pics names random;y  dice 1-6 .png

var randomImageSource = "images/" + randomImage; //change pics base on name

var image1 = document.querySelectorAll("img")[0]; // set variable  base on selector

image1.setAttribute("src", randomImageSource); // change attribute src to another variable

//

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //range number 1-6

var randomImage2 = "dice" + randomNumber2 + ".png"; //change pics names random;y  dice 1-6 .png

var randomImageSource2 = "images/" + randomImage2; //change pics base on name

var image2 = document.querySelectorAll("img")[1]; // set variable  base on selector

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🔥 Player 1 Wins!!  ";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = " Player 2 Wins!!  🔥";
} else {
  document.querySelector("h1").textContent = "DRAW";
}
