let firstCard = 10
let secondCard = 21
let sum = firstCard + secondCard
let hasBlackJack = false 
let isAlive = true
let message = ""

// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("message-el")

function startGame(){
     // 3. Render the sum on the page using this format -> "Sum: 14"
     sumEl.textContent = "Sum: " + sum
    
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



