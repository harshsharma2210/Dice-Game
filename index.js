let randomNumber1 = parseInt(Math.random() * 6) + 1;
let randomNumber2 = parseInt(Math.random() * 6) + 1;

let newSrc1="images/dice"+randomNumber1+".png";
let newSrc2="images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src", newSrc1);
document.querySelector(".img2").setAttribute("src", newSrc2);

function winorlose() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerText = "Draw!";
  }
}

winorlose();