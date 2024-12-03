// a whack-a-mole game from Ania Kubow on youtube https://www.youtube.com/watch?v=ec8vSKJuZTk&list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V&index=6

//time  stamp: https://youtu.be/ec8vSKJuZTk?si=IMruVzWiRA_tMxUT&t=3895

const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const best = document.querySelector('#best')
best.textContent = localStorage.getItem("best");
const startGameButton = document.querySelector('.start')
const clearBestScoreButton = document.querySelector('.clear')

let result = 0
let hitPosition
let currentTime
let timerId = null
let countDownTimerId = null

function randomSquareGenerator() { 
  squares.forEach(square => { 
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')
  hitPosition = randomSquare.id
}

squares.forEach(square => { 
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) { 
    result++
    score.textContent = result
    hitPosition = null
    }
  })
})


function countDown() { 
  currentTime--

  timeLeft.textContent = currentTime

  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('Game over! Your score is: ' + result)
    score.textContent = 0
    currentTime = 30
    startGameButton.style.display = 'block'
    bestScore()
  } 
}

function bestScore() { 
    if (result > localStorage.getItem("best")) {
      localStorage.setItem('best', result);
    }
      best.textContent = localStorage.getItem("best");
}

function clearBestScore() { 
    clearBestScoreButton.addEventListener('click', (e) => {
      localStorage.setItem('best', '0');
      best.textContent = localStorage.getItem("best");
})
}

function startGame() { 
  startGameButton.addEventListener('click', (e) => {
    currentTime = 30
    timerId = setInterval(randomSquareGenerator, 700)
    countDownTimerId = setInterval(countDown, 1000)
    countDown()
    startGameButton.style.display = 'none'
    
})
}
startGame()
clearBestScore()