
let player = {
name:"Michelle",
chips:1
}
console.log(player.name)
let cards = []

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el") 


playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1;
    if (random === 1) {
        return 11
    } else if (random > 10) {
        return 10
    } 
    else {
        return random
    }

}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard +  secondCard
    renderGame()
}


function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {

    if ( isAlive === true && hasBlackJack === false) {
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame()
    }
}

