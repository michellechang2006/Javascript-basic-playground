let firstCard = getRandomCard()
let secondCard = getRandomCard()
// 2. Use getRandomCard() to set the values of firstCard and secondCard
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false 
let isAlive = true
let message = ""

let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")







function renderGame(){
     sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    return 5
}
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
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard();
    sum += card;
     // 3. Use the getRandomCard() to set the value of card
    cards.push(card)
    renderGame()
}

