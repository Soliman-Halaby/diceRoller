// GAME 1

const button = document.querySelector(".rollButton");
const dice = document.querySelector(".diceImage");
const diceUrl = [
  "./assets/images/game_1/dice2.svg",
  "./assets/images/game_1/dice1.svg",
  "./assets/images/game_1/dice3.svg",
  "./assets/images/game_1/dice4.svg",
  "./assets/images/game_1/dice5.svg",
  "./assets/images/game_1/dice6.svg",
];
const audio = document.querySelector(".audio");
const result = document.querySelector(".diceText");

// --------- GAME 1 ------------- //

button.addEventListener("click", (event) => {
  audio.currentTime = 0;
  const roller = Math.ceil(Math.random() * 6);
  dice.src = diceUrl[roller - 1];
  dice.style.animation = "spin_animation 0.30s";
  setTimeout(function () {
    dice.style.animation = "none";
  }, 250);
  audio.play();
  result.textContent = `Well done , you hit a ${roller} !`;
});
