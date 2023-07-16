let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false 
let isAlive = true
let message = ""

let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")

// Create a new function called startGame() that calls renderGame()





function startGame(){
     sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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
    console.log("Drawing a new card from the deck!")
    let card = 6;
    sum += card;
    startGame()
}

