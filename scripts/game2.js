// --------- GAME 2 ------------- //
const audio = document.querySelector(".audio");

const diceUrl2 = [
  "./assets/images/game_2/dice1.svg",
  "./assets/images/game_2/dice2.svg",
  "./assets/images/game_2/dice3.svg",
  "./assets/images/game_2/dice4.svg",
  "./assets/images/game_2/dice5.svg",
  "./assets/images/game_2/dice6.svg",
];
const button2 = document.querySelector(".rollButton2");
const number = document.querySelector(".gameTwoNumber");
const result2 = document.querySelector(".diceText2");

// When user select a number
number.addEventListener("input", (event) => {
  // Remove current dices everytime that the user choose a new number
  const diceRemoval = document.querySelectorAll(".diceImage2");
  for (const diceRemove of diceRemoval) {
    diceRemove.remove();
  }

  const numberValue = number.value;
  const containerDice = document.querySelector(".imageContainer2");
  for (let i = 0; i <= numberValue - 1; i++) {
    // Create a the number of dice the user selected
    const dice2 = document.createElement("img");
    dice2.classList.add("diceImage2");
    dice2.setAttribute("src", "./assets/images/game_2/dice1.svg");
    containerDice.appendChild(dice2);
  }
});

// When user click on Roll

button2.addEventListener("click", (event) => {
  audio.currentTime = 0;
  let total = 0;
  const dice2 = document.querySelectorAll(".diceImage2");
  for (const element of dice2) {
    const roller2 = Math.ceil(Math.random() * 6);
    // Choose a random picture of dice of the array with all the pictures
    element.src = diceUrl2[roller2 - 1];
    element.style.animation = "spin_animation2 0.30s ";
    audio.play();
    setTimeout(function () {
      element.style.animation = "none ";
    }, 250);
    audio.play();
    total += roller2;
  }
  result2.textContent = `Your total is ${total} !`;
});
