let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false //  玩家還沒開始玩遊戲，當然沒有二十一點

// 1. Create a variable called isAlive and assign it to true

// 2. Flip its value to false in the appropriate code block 

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true // 玩家有二十一點
} else {
    console.log("You're out of the game! 😭")
}

// 3. Log it out to check that you're doing it right