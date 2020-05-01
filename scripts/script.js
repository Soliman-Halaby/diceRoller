// We take from the HTML the different class we need
const button = document.querySelector('.rolldice')
const dice = document.querySelector('.dice1')
const diceUrl = ['./images/game_1/dice1.png' ,  './images/game_1/dice2.png' , './images/game_1/dice3.png' ,  './images/game_1/dice4.png' ,  './images/game_1/dice5.png' ,  './images/game_1/dice6.png']
const audio = document.querySelector('.audio')
const result= document.querySelector('.var')


// --------- GAME 1 ------------- //

button.addEventListener('click' , (event) => 
{
    audio.currentTime = 0
    const roller = Math.ceil(Math.random()* 6)
    dice.src = diceUrl[roller - 1]
    dice.style.animation =  'spin_animation 0.30s'
    setTimeout(function()
    {
       dice.style.animation =  'none'
    } , 250)
    audio.play()
    result.textContent = `Well done , you hit a ${roller} !`

})

// --------- GAME 2 ------------- // 

const diceUrl2 = ['./images/game_2/dice1_80x80.png' ,  './images/game_2/dice2_80x80.png' ,  './images/game_2/dice3_80x80.png' ,  './images/game_2/dice4_80x80.png' ,  './images/game_2/dice5_80x80.png' ,  './images/game_2/dice6_80x80.png' , ]
const button2 = document.querySelector('.rolldice2')
const number = document.querySelector('.number') 
const result2 = document.querySelector('.var-2')

// When user select a number 
number.addEventListener('input' , (event) =>
{
    // Remove current dices everytime that the user choose a new number
    const diceRemoval = document.querySelectorAll('.dice2')
    for(const diceRemove of diceRemoval)
    {
        diceRemove.remove()
    }

    const numberValue = number.value
    const containerDice = document.querySelector('.container_dice')
    for(let i=0; i<= numberValue - 1; i++)
    {
        // Create a the number of dice the user selected
        const dice2 = document.createElement('img')
        dice2.classList.add('dice2')
        dice2.setAttribute('src' ,  './images/game_2/dice1_80x80.png')
        containerDice.appendChild(dice2)
    }
})



// When user click on Roll

button2.addEventListener('click' , (event) =>
{
    audio.currentTime = 0
    let total = 0
    const dice2 = document.querySelectorAll('.dice2')
    for(const element of dice2)
    {
        const roller2 = Math.ceil(Math.random()* 6)
        // Choose a random picture of dice of the array with all the pictures
        element.src = diceUrl2[roller2 - 1]
        element.style.animation =  'spin_animation2 0.30s '
        audio.play()
        setTimeout(function()
        {
          element.style.animation = 'none '
        } , 250)
        audio.play()
        total += roller2

    }
    result2.textContent = `Your total is ${total} !`
    
})

// --------- GAME 3 ------------- // 

const button3 = document.querySelector('.rolldice3')
const number3 = document.querySelector('.number_game3') 
const faces = document.querySelector('.faces')
const result3 = document.querySelector('.var-3')
const containerDice3 = document.querySelector('.container_dice3')
const dice3 = document.createElement('img')
const average = document.querySelector('.average')

// When user selects the number of dice 

number3.addEventListener('input', (event) => 
{
    const diceRemoval3 = document.querySelectorAll('.dice3')
    for(const diceRemove of diceRemoval3)
    {
        diceRemove.remove()
    }
    const num = faces.value 
    const number3Value = number3.value
    for(let i = 0; i <= number3Value - 1; i++)
    {
        const dice3 = document.createElement('img')
        dice3.classList.add('dice3')
        dice3.setAttribute('src' ,  `./images/game_3/${num}faces/dice1_${num}faces.png`)
        containerDice3.appendChild(dice3)
    }
})

// When user selects the number of faces

faces.addEventListener('input' , (event) => 
{
    const diceRemoval3 = document.querySelectorAll('.dice3')
    for(const diceRemove of diceRemoval3)
    {
        diceRemove.remove()
    }
    const facesValue = faces.value
    dice3.classList.add('dice3')
    containerDice3.appendChild(dice3)
    
    // Different picture appear depending of value of faces the user created
    switch (facesValue)
    {
        case '6' :
            dice3.setAttribute('src' ,  './images/game_3/6faces/dice1_6faces.png')
            break;
        
        case '10' :
            dice3.setAttribute('src' ,  './images/game_3/10faces/dice1_10faces.png')
            break;
        
        case '12' : 
            dice3.setAttribute('src' ,  './images/game_3/12faces/dice1_12faces.png')
            break;
        
        default :
            dice3.setAttribute('src' ,  './images/game_3/20faces/dice1_20faces.png')
            break;
    }
})

// When user click on Roll

button3.addEventListener('click' , (event) => 

{
    audio.currentTime = 0
    let avg = 0
    let total2 = 0
    const dice3 = document.querySelectorAll('.dice3')
    for(const element3 of dice3)
    {
        const num = faces.value 
        const roller3 = Math.ceil(Math.random() * num)
        element3.src = `./images/game_3/${num}faces/dice${roller3}_${num}faces.png`
        element3.style.animation = 'spin_animation2 0.30s '
        audio.play()
        setTimeout(function()
        {
          element3.style.animation = 'none '
        } , 250)
        audio.play()
        total2 += roller3
        result3.textContent = `Good job ! You hit a ${total2} !`
        avg = total2 /number3.value
        average.textContent = `Your average is ${avg} !`
    }
})

// Animation Animated on Scroll

AOS.init({
    duration: 1100,
})