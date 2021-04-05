// --------- GAME 3 ------------- //
const audio = document.querySelector(".audio");

const button3 = document.querySelector(".rollButton");
const number3 = document.querySelector(".gameThreeNumber");
const faces = document.querySelector(".faces");
const result3 = document.querySelector(".diceText");
const containerDice3 = document.querySelector(".imageContainer");
const dice3 = document.createElement("img");
const average = document.querySelector(".average");

// When user selects the number of dice

number3.addEventListener("input", (event) => {
  const diceRemoval3 = document.querySelectorAll(".diceImage");
  for (const diceRemove of diceRemoval3) {
    diceRemove.remove();
  }
  const num = faces.value;
  const number3Value = number3.value;
  for (let i = 0; i <= number3Value - 1; i++) {
    const dice3 = document.createElement("img");
    dice3.classList.add("diceImage");
    dice3.setAttribute(
      "src",
      `./images/game_3/${num}faces/dice1_${num}faces.svg`
    );
    containerDice3.appendChild(dice3);
  }
});

// When user selects the number of faces

faces.addEventListener("input", (event) => {
  const diceRemoval3 = document.querySelectorAll(".diceImage");
  for (const diceRemove of diceRemoval3) {
    diceRemove.remove();
  }
  const facesValue = faces.value;
  dice3.classList.add("diceImage");
  containerDice3.appendChild(dice3);

  // Different picture appear depending of value of faces the user created
  switch (facesValue) {
    case "6":
      dice3.setAttribute("src", "./images/game_3/6faces/dice1_6faces.svg");
      break;

    case "10":
      dice3.setAttribute("src", "./images/game_3/10faces/dice1_10faces.svg");
      break;

    case "12":
      dice3.setAttribute("src", "./images/game_3/12faces/dice1_12faces.svg");
      break;

    default:
      dice3.setAttribute("src", "./images/game_3/20faces/dice1_20faces.svg");
      break;
  }
});

// When user click on Roll

button3.addEventListener("click", (event) => {
  audio.currentTime = 0;
  let avg = 0;
  let total2 = 0;
  const dice3 = document.querySelectorAll(".diceImage");
  for (const element3 of dice3) {
    const num = faces.value;
    const roller3 = Math.ceil(Math.random() * num);
    element3.src = `./images/game_3/${num}faces/dice${roller3}_${num}faces.svg`;
    element3.style.animation = "spin_animation2 0.30s ";
    audio.play();
    setTimeout(function () {
      element3.style.animation = "none ";
    }, 250);
    audio.play();
    total2 += roller3;
    result3.textContent = `Good job ! You hit a ${total2} !`;
    avg = total2 / number3.value;
    average.textContent = `Your average is ${avg} !`;
  }
});
