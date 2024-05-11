let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg = "images/dice" + randomNumber1 + ".png";
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImg);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw";
}else{
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

function roll(){
  location.reload();
}
