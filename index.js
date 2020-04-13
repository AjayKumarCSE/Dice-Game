var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);
var imageName1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").src = imageName1;
var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);
var imageName2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").src = imageName2;
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins!";
}else{
  document.querySelector("h1").textContent = "Draw!";
}
