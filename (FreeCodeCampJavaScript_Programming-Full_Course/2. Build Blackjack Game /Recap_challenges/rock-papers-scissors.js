let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomItem(){
let i = Math.floor(Math.random() * 3)
// console.log(i)
console.log(hands[i])
}

randomItem()