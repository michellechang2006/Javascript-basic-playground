let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.


function putToShelf() {
    for (let i = 0; i < fruit.length; i++) {
        var array = fruit[i];
        console.log(array)
        if (fruit[i] === "🍎") {
            appleShelf.textContent += fruit[i]
        } else {
            orangeShelf.textContent += fruit[i]
        }
    }

}
putToShelf()



