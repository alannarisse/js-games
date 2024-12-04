//fun games from free code camp video by Ania Kubow https://www.youtube.com/watch?v=ec8vSKJuZTk&list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V&index=5

document.addEventListener('DOMContentLoaded', () => { 
const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'icecream',
    img: 'images/icecream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'icecream',
    img: 'images/icecream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  }
]
  
  cardArray.sort(() => 0.5 - Math.random())
  //let totalPts = document.querySelector('#total')
  //totalPts.textContent = cardArray.length/2
  const gridDisplay = document.querySelector('#grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenIds = []
  let cardsWon = []
  let message = document.querySelector("#message");


function createBoard() { 
  for (let i = 0; i < cardArray.length; i++) { 
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    //console.log(card)
    gridDisplay.appendChild(card)
  }
}


function checkForMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      message.textContent ='You have clicked the same image!'

    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      message.textContent ='You found a match!'
      cards[optionOneId].setAttribute('src', 'images/yay.png')
      cards[optionTwoId].setAttribute('src', 'images/yay.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      message.textContent ='Sorry, try again'
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

function flipCard() { 
  let cardId = this.getAttribute('data-id')
  //console.log(cardId, cardArray[cardId].name)
  cardsChosen.push(cardArray[cardId].name)
  //console.log(cardsChosen)
  cardsChosenIds.push(cardId)
  console.log('cards chosen ids', cardsChosenIds)

  this.setAttribute('src', cardArray[cardId].img)
  
  if(cardsChosen.length ===2) {
    setTimeout(checkForMatch, 500)
   }
}

createBoard()

})