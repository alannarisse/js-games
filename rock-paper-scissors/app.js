const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoiceImg
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceImg = "<img src='images/" + e.target.id + ".png' class='small'>"
  userChoiceDisplay.innerHTML = userChoiceImg
  generateComputerChoice()
  getResult()
}))
 
function generateComputerChoice() { 
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
  // change to switch
  if (randomNumber === 1) { 
    computerChoice = 'rock'
  }
  if (randomNumber === 2) { 
    computerChoice = 'paper'
  }
  if (randomNumber === 3) { 
    computerChoice = 'scissors'
  }
  computerChoiceImg = `<img class="small" src="images/${computerChoice}.png">`
  computerChoiceDisplay.innerHTML = computerChoiceImg
}

function getResult() { 
  if (computerChoice === userChoice) { 
    result = "It\'s a draw"
  }
  if (
    computerChoice === 'rock' && userChoice === 'paper' ||
    computerChoice === 'paper' && userChoice === 'scissors' ||
    computerChoice === 'scissors' && userChoice === 'rock'
  )
  { 
    result = "You win!"
  }
  if (
    computerChoice === 'rock' && userChoice === 'scissors' ||
    computerChoice === 'paper' && userChoice === 'rock' ||
    computerChoice === 'scissors' && userChoice === 'paper'
  )
  { 
    result = "You lose :("
  }

  resultDisplay.innerHTML = result
}