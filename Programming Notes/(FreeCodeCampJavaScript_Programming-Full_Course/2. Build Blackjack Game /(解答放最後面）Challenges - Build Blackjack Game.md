
# 💪🏻 這個階段，我們會學到...


- ### [Javascript 資料型態](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Data_structures)
   - #### [array](#Arrays-intro)
   - #### [object](#Object)
   - #### [boolean](#Practice-boolean-conditions)
- ### [if else statements](#If...else-conditionals)
- ###  [comparison operators](#If...else-conditionals)
- ###  [logical operators]()
- ###  [for loops](#Counting-Loops)
- ### [The Math object](#Generating-random-numbers-with-Math.random())
- ### [return statements](#Returning-values)




# 🔗 Section links 

### [✏️ 學習筆記](#學習筆記)

[Add firstCard, secondCard, & sum](#Add-firstCard,-secondCard,-&-sum)

[Your first if..else statement](#Your-first-if..else-statement)

[if...else statement for our game](#if...else-statement-for-our-game)

[Add the hasBlackJack variable](#Add-the-hasBlackJack-variable)

[Add the isAlive variable](#Add-the-isAlive-variable)

[Practice boolean conditions](#Practice-boolean-conditions)

[Add message variable](#Add-message-variable)

[Make start button work](#Make-start-button-work)

[Display message](#Display-message)

[Display sum](#Display-sum)

[Display cards](#Display-cards)

[New card button](#New-card-button)

[Add to sum when newCard is clicked](#Add-to-sum-when-newCard-is-clicked)

[Rename startGame function](#Rename-startGame-function)

[Arrays intro](#Arrays-intro)

[Array indexes](#Array-indexes)

[Arrays with multiple data types](#Arrays-with-multiple-data-types)

[Adding & removing items from arrays](#Adding-&-removing-items-from-arrays)

[Creating cards array](#Creating-cards-array)

[Push new card to array](#Push-new-card-to-array)

[Counting - Loops](#Counting---Loops)

[First array-based for loop](#First-array-based-for-loop)

[For loops, arrays, & DOM](#For-loops-arrays-&-DOM)

[Use loop to render cards](#Use-loop-to-render-cards)

[Returning values](#Returning-values)

[Use function to set card values](#Use-function-to-set-card-values)

[Using Math.random() and Math.floor to create a dice](#Using-Math.random()-and-Math.floor-to-create-a-dice)

[Completing our dice function](#Completing-our-dice-function)

[Make getRandomCard() work](#Make-getRandomCard()-work)

[Assign values in startGame function](#Assign-values-in-startGame-function)

[Logical AND operator](#Logical-AND-operator)

[Write your first logical operator](#Write-your-first-logical-operator)

[Only trigger newCard() if you're allowed to](#Only-trigger-newCard()-if-you're-allowed-to)

[Logical NOT operator (筆者自行補充)](#Logical-NOT-operator-(筆者自行補充))

[create first object](#create-first-object)

[Use an object to store player data](#Use-an-object-to-store-player-data)



### [🏁 Recap Challenge](#Recap-Challenge)


[Objects & functions](#Objects-&-functions)

[if else](#if-else)

[Loops & arrays](#Loops-&-arrays)

[push, pop, unshift, shift challenge](#push,-pop,-unshift,-shift-challenge)

[Logical operators](#Logical-operators)

[Rock papers scissors](#Rock-papers-scissors)

[emojifighter](#emojifighter)

[Sorting fruit](#Sorting-fruit)








# 學習筆記


## [Add firstCard, secondCard, & sum](https://youtu.be/jS4aFq5-91M?t=5547)


**⭐ Passenger counter app 複習題 [Create variable](https://tinyurl.com/28evusbg)**

1. 創建兩個變數，分別宣告為`firstCard`和`secondCard`。其值設定為二到十一中，隨機的數字。

  Create two variables, firstCard and secondCard.  Set their values to a random number between 2-11


2. 創建一個變數`sum`，其值為`firstCard`和`secondCard`的加總。

   Create a variable, sum, and set it to the sum of the two cards


[參考答案](#Challenge-參考答案)


## [Your first if..else statement](https://youtu.be/jS4aFq5-91M?t=5948)



挑戰看看自己編寫`if..else`陳述式語法吧！

1. 請透過`JS`編寫`if..else`陳述式語法，來檢查一個的年齡是否是滿21歲，才能進入夜店。

   Check if the person is old enough to enter the nightclub (21)


2. 將訊息顯示（log)在控制台(console)，（如果未滿二十一歲，則顯示（log)`"You can not enter the club!"`，如果有則顯示（log)`"Welcome!`"）

   Log a suitable message to the console in both cases


```js
// Check if the person is old enough to enter the nightclub (21)

// Log a suitable message to the console in both cases

  

let age = 20

  

// if less than 21 -> "You can not enter the club!"

// else -> "Welcome!"
```




[參考答案](#Challenge-參考答案)



## [if/else...if/else statement](https://youtu.be/jS4aFq5-91M?t=6126)



挑戰看看自己編寫`if/else...if/else statement`陳述式語法吧！

```js
// Check if the person is elegible for a birthday card from the King! (100)

  

let age = 100

  

// if less than 100 -> "Not elegible"

// else if exactly 100 -> "Here is your birthday card from the King!"

// else -> "Not elegible, you have already gotten one"
```



> [MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else)


[參考答案](#Challenge-參考答案)




## [if...else statement for our game](https://youtu.be/jS4aFq5-91M?t=6327)



⭐ 回到我們的Blackjack Game，請透過上單元學到的，來編寫以下程式碼：

```js
// Write the conditional according to these rules:

  

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"

// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"

// else -> "You're out of the game! 😭"
```


[參考答案](#Challenge-參考答案)




## [Add the isAlive variable](https://youtu.be/jS4aFq5-91M?t=6578)


⭐ 回到我們的Blackjack Game，請透過上單元學到的，來編寫以下程式碼：

1. 創建一個變數宣告為 `isAlive`（來檢查玩家是否有出局），並其值為`true`。

   Create a variable called `isAlive` and assign it to true


2. 在`if/else...if/else statement`陳述式的程式碼，請嘗試找找看要在哪個區塊，將`isAlive`的值重新宣告為`false`。

   Flip its value to false in the appropriate code block


3. 將結果顯示（log)在控制台(console)，來檢查結果

   Log it out to check that you're doing it right
   
```js
let firstCard = 10

let secondCard = 11

let sum = firstCard + secondCard

let hasBlackJack = false

// 1. Create a variable called isAlive and assign it to true

  

// 2. Flip its value to false in the appropriate code block

if (sum <= 20) {

console.log("Do you want to draw a new card? 🙂")

} else if (sum === 21) {

console.log("Wohoo! You've got Blackjack! 🥳")

hasBlackJack = true

} else {

console.log("You're out of the game! 😭")

}

  

// 3. Log it out to check that you're doing it right

```



[參考答案](#Challenge-參考答案)



## [Practice boolean conditions](https://youtu.be/jS4aFq5-91M?t=6688)


請在每段程式碼旁，以註解(comments)`//`的方式作答回傳（`console.log`)的布林（`Boolean`）值。

```js
console.log(4 === 3) // 

console.log(5 > 2) //

console.log(12 > 12) //

console.log(3 < 0) //

console.log(3 >= 3) //

console.log(11 <= 11) //

console.log(3 <= 2) //
```



>[MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Boolean)



[參考答案](#Challenge-參考答案)





## [Add message variable](https://youtu.be/jS4aFq5-91M?t=6896)


1. 宣告一個變數為`message`，其值為空格的字串（`" "`)

   Declare a variable called message and assign its value to an empty string


2. 將各區塊的字串作為`message`變數的值。

   Reassign the message variable to the string we're logging out


3. 將這些字串顯示(log)在控制台（console)

   Log it out!

⭐ 請透過以上說明修改以下原始碼：

```js
let firstCard = 10

let secondCard = 11

let sum = firstCard + secondCard + 4

let hasBlackJack = false

let isAlive = true

// 1. Declare a variable called message and assign its value to an empty string

  

// 2. Reassign the message variable to the string we're logging out

if (sum <= 20) {

console.log("Do you want to draw a new card? 🙂")

} else if (sum === 21) {

console.log("Wohoo! You've got Blackjack! 🥳")

hasBlackJack = true

} else {

console.log("You're out of the game! 😭")

isAlive = false

}

  

// 3. Log it out!
```



[參考答案](#Challenge-參考答案)



## [Make start button work](https://youtu.be/jS4aFq5-91M?t=6896)


⭐ 真實的Web開發者，常常會把`JS`、`HTML`和`CSS`一起編程。

1. 創建一個`HTML`按鈕為`START GAME`，並加入監聽事件（event click)，讓使用者點擊一次按鈕後，觸法 `startGame()`函式。

Create a button that says START GAME.   Make it call a startGame() function when clicked


2. 創建一個`startGame()`函式，將以下`JS`原始碼放入`startGame()`。

Create a startGame() function. Move the conditional below (line 11-20) inside the body of the function.


```js
if (sum <= 20) {

message = "Do you want to draw a new card? 🙂"

} else if (sum === 21) {

message = "Wohoo! You've got Blackjack! 🥳"

hasBlackJack = true

} else {

message = "You're out of the game! 😭"

isAlive = false

}

```




[參考答案](#Challenge-參考答案)






## [Display message](https://youtu.be/jS4aFq5-91M?t=7873)



1. 宣告一個變數為 `messageEl`，其值為取出 HTML 內容當中，ID為`message-el`的段落（`<p>`標籤）。

   Store the `message-el` paragraph in a variable called `messageEl`


2. 將這些字串呈現到HTML ，請使用`messageEl.textContent`

   Display the message in the messageEl using messageEl.textContent

```js
let firstCard = 10

let secondCard = 21

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

  

// 1. Store the message-el paragraph in a variable called messageEl

  

function startGame(){

if (sum <= 20) {

message = "Do you want to draw a new card? 🙂"

} else if (sum === 21) {

message = "Wohoo! You've got Blackjack! 🥳"

hasBlackJack = true

} else {

message = "You're out of the game! 😭"

isAlive = false

}

// 2. Display the message in the messageEl using messageEl.textContent

}
```



[參考答案](#Challenge-參考答案)




## [Display sum](https://youtu.be/jS4aFq5-91M?t=8029)


**⭐ Passenger counter app 複習題 [Document Object Model (DOM)](https://tinyurl.com/24fjzhhg)/ [Display count](https://tinyurl.com/2cgr5545)**

1.  宣告一個變數為 `sumEl`，其值為取出 HTML 內容當中，ID為`sum-el`的段落（`<p>`標籤）。

   Store the sum paragraph in a variable called `sumEl`


2. 將玩家的總點數（`sum`變數的值）呈現到HTML 。（呈現的文字，例子：`Sum: 14`）

   Render the sum on the page using this format -> `"Sum: 14"`


```js
let firstCard = 10

let secondCard = 21

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

  

// 2. Store the sum paragraph in a variable called sumEl



let messageEl = document.getElementById("message-el")

  

function startGame(){

// 3. Render the sum on the page using this format -> "Sum: 14"

messageEl.textContent = message

if (sum <= 20) {

message = "Do you want to draw a new card? 🙂"

} else if (sum === 21) {

message = "Wohoo! You've got Blackjack! 🥳"

hasBlackJack = true

} else {

message = "You're out of the game! 😭"

isAlive = false

}

}
```



[參考答案](#Challenge-參考答案)



## [Display cards](https://youtu.be/jS4aFq5-91M?t=8377)


**⭐ Passenger counter app 複習題 [Document Object Model (DOM)](https://tinyurl.com/24fjzhhg)/ [Display count](https://tinyurl.com/2cgr5545)**

1. 宣告一個變數為 `cardsEl`，其值為取出 HTML 內容當中，ID為`cardsEl`的段落（`<p>`標籤）。

Store the cards paragraph in a variable called `cardsEl`


2. 將玩家的第一張庫克牌和第二張庫克牌點數（`firstCard`和`secondCard`變數的值）呈現到HTML 。（呈現的文字，例子：`Cards: 10 4`)

   Render the cars on the page using this format -> `"Cards: 10 4"`

```js
let firstCard = 10

let secondCard = 21

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

  

// 1. Store the cards paragraph in a variable called cardsEl

let sumEl = document.querySelector("#sum-el")

let messageEl = document.getElementById("message-el")

  

function startGame(){

// 2. Render the cars on the page using this format -> "Cards: 10 4"

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
```


[參考答案](#Challenge-參考答案)



## [New card button](https://youtu.be/jS4aFq5-91M?t=8495)


**⭐ Passenger counter app 複習題 [Document Object Model (DOM)](https://tinyurl.com/24fjzhhg)/ [Display count](https://tinyurl.com/2cgr5545)/[functions](https://tinyurl.com/2cgr5545)**

1. 創建一個`HTML`按鈕為`NEW CARD`，並加入監聽事件（event click)，讓使用者點擊一次按鈕後，觸法 `newCard()`函式。

   Create a `NEW CARD` button, make it run `newCard()` on click


2.  創建一個`newCard()`函式，將`"Drawing a new card from the deck!"`字串顯示（log)在控制台(console)。

   Create a function `newCard()` that logs out `"Drawing a new card from the deck!"`


```js
let firstCard = 10

let secondCard = 21

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

  

let sumEl = document.querySelector("#sum-el")

let messageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")

  

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

  

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"

```


[參考答案](#Challenge-參考答案)





## [Add to sum when newCard is clicked](https://youtu.be/jS4aFq5-91M?t=8716)


**⭐ Passenger counter app 複習題 [Document Object Model (DOM)](https://tinyurl.com/24fjzhhg)/ [Display count](https://tinyurl.com/2cgr5545) / [回呼函式 (callback function)](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

1. 創建一個`card`變數，其值設定為`2`到`11`

   Create a `card` variable, and hard code its value to a number (`2-11`)


2. 將sum變數的值加入`card`變數。

   Add the new `card` to the `sum` variable


3. 回呼`startGame()`函式

   Call `startGame()`



[參考答案](#Challenge-參考答案)





## [Rename startGame function](https://youtu.be/jS4aFq5-91M?t=8916)

**⭐ 假如， 我們要和其他開發者一起開發，我們必需須將`startGame()`函式重新命名為`renderGame`，否則其他的開發者要讀以下原始碼時搞混；為何在新增卡片`newCard()`的函式中，還需要「開始遊戲」（回呼`startGame()`函式）。

```js
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

startGame() // 其他開發者：為何在新增卡片`newCard()`的函式中，還需要「開始遊戲」（回呼`startGame()`函式）

}
```



**⭐ Passenger counter app 複習題 [函式 (function)](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)


創建一個函式 `renderGame()`來回呼（callback) `startGame()`函式
Create a new function called startGame() that calls renderGame()


```js
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
```


[參考答案](#Challenge-參考答案)




## [Arrays intro](https://youtu.be/jS4aFq5-91M?t=9251)


1. 創建一個陣列，來列表你的經歷、學歷或技能...等等。
   Create an array that lists your i.e. experience, education, licenses, skills or similar

2. 每個項目必需是字串（strings）
   The items of the array should be strings


> [MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)


[參考答案](#Challenge-參考答案)



## [Array indexes](https://youtu.be/jS4aFq5-91M?t=9580)



```js
// Make the following appear in the console:

// Frontend developer at Xeneta

// People counter for Norstat

// CEO at Scrimba

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]
```



> [MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)




[參考答案](#Challenge-參考答案)



## [Arrays with multiple data types](https://youtu.be/jS4aFq5-91M?t=9831)


1. 創建一個陣列來描述你自己。使用你目前所學的`JS`資料型態。

   Create an array that describes yourself. Use the three primitive data types you've learned


2. 它應該包含你的名字（string 資料型態）、你的年齡（number 資料型態）還有你喜不喜歡披薩（boolean 資料型態）。

It should contain your name (string), your age (number), and whether you like pizza (boolean)



[參考答案](#Challenge-參考答案)



## [Adding & removing items from arrays](https://youtu.be/jS4aFq5-91M?t=9971)


### 🏁 Challenge 1

```js
// Push the newMessage to the messages array, and then log out the array

let messages = [

"Hey, how's it going?",

"I'm great, thank you! How about you?",

"All good. Been working on my portfolio lately."

]

  

let newMessage = "Same here!"
```


[參考答案](#Challenge-參考答案)



### 🏁 Challenge 2


**⭐ Passenger counter app 複習題 [Debugging online](https://tinyurl.com/2cgr5545)**

你如何將移除陣列中，最後一個項目呢？嘗試自行上網（[Google](https://www.google.com/))查詢吧！

```js
// How can you remove the last item in an array? Try to google it!

let messages = [

"Hey, how's it going?",

"I'm great, thank you! How about you?",

"All good. Been working on my portfolio lately."

]
```


[參考答案](#Challenge-參考答案)



## [Creating cards array](https://youtu.be/jS4aFq5-91M?t=10236)



⭐ 嘗試修改以下的原始碼，來創建陣列：


```js
let firstCard = 10

let secondCard = 4

// 1. Create a new array - cards - that contains firstCard and secondCard

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

  

function startGame() {

renderGame()

}

  

function renderGame() {

// 2. Refer to the cards array when rendering out the cards

cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

sumEl.textContent = "Sum: " + sum

if (sum <= 20) {

message = "Do you want to draw a new card?"

} else if (sum === 21) {

message = "You've got Blackjack!"

hasBlackJack = true

} else {

message = "You're out of the game!"

isAlive = false

}

messageEl.textContent = message

}
```



[參考答案](#Challenge-參考答案)




## [Push new card to array](https://youtu.be/jS4aFq5-91M?t=10304)


⭐ 嘗試修改以下的原始碼，來新增項目（`card`變數的值）到`cards`陣列：

```js
function newCard() {

console.log("Drawing a new card from the deck!")

let card = 6;

sum += card;

// Push the card to the cards array

renderGame()

}
```



[參考答案](#Challenge-參考答案)




## [Counting - Loops](https://youtu.be/jS4aFq5-91M?t=10631)


⭐ 嘗試創建你的第一個 `JS loop` 吧！



```js
// Create a for loop that counts from 10 to 100 in steps of 10

// Use console.log to log out the numbers
```



[MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/for)


[參考答案](#Challenge-參考答案)




## [First array-based for loop](https://youtu.be/jS4aFq5-91M?t=11063)



⭐ 嘗試創建第一個`JS`  `array-based for loop`吧！


```js
let cards = [7, 3, 9]


// Create a for loop that logs out all the cards in the array


// Use cards.length to specify how long the loop should run
```


[參考答案](#Challenge-參考答案)



## [For loops, arrays, & DOM](https://youtu.be/jS4aFq5-91M?t=11155)



⭐ 嘗試創建`JS`  `array-based for loop` 結合 [`The DOM`](https://tinyurl.com/2cgr5545) 吧！


```js
let sentence = ["Hello ", "my ", "name ", "is ", "Per"]


let greetingEl = document.getElementById("greeting-el")

  


// Render the sentence in the greetingEl paragraph using a for loop and .textContent
```



[參考答案](#Challenge-參考答案)


## [Use loop to render cards](https://youtu.be/jS4aFq5-91M?t=11335)



```js

let cards = [firstCard,secondCard]


function renderGame(){

sumEl.textContent = "Sum: " + sum

cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

// Create a for loop that renders out all the cards instead of just two

}
```


[參考答案](#Challenge-參考答案)



## [Returning values](https://youtu.be/jS4aFq5-91M?t=11571)


1. 寫一個函式來回傳（`return`) `player1Time` + `player1Time`的值。

Write a function that returns the total race time


2. 創一個變數來回呼（callback)你剛剛寫的函式。

Call/invoke the function and store the returned value in a new variable


3. 將你剛剛寫的變數顯示（`log`)在控制台(`console`)

Finally, log the variable out


```js
// Write a function that returns the total race time

// Call/invoke the function and store the returned value in a new variable

// Finally, log the variable out

  

let player1Time = 102

let player2Time = 107
```



>[MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/return)



[參考答案](#Challenge-參考答案)



## [Use function to set card values](https://youtu.be/jS4aFq5-91M?t=11874)



⭐ 將上個單元我們所學到的 `return`來作答吧!


```js
let firstCard = 10

let secondCard = 4

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

let card = 6;

sum += card;

// 3. Use the getRandomCard() to set the value of card

cards.push(card)

renderGame()

}
```



[參考答案](#Challenge-參考答案)



### [Math.random() * 6](https://youtu.be/jS4aFq5-91M?t=12324)

`randomNumber`變數的值 - `Math.random() * 6`產生隨機數字的範圍為?

In which range will our randomNumber be now?



```js
let randomNumber = Math.random() * 6


console.log(randomNumber)


/*
In which range will our randomNumber be now?

  

From: 

To:

*/
```


[參考答案](#Challenge-參考答案)




## [Using Math.random() and Math.floor to create a dice](https://youtu.be/jS4aFq5-91M?t=12518)


寫`randomNumber`變數的值 - `Math.random() * 6`有可能產生的數字。

Write down all the possible values randomNumber can hold now!



```js
let randomNumber = Math.floor(Math.random() * 6)

  

console.log(randomNumber)

  

/*


Write down all the possible values randomNumber can hold now!

*/
```



[參考答案](#Challenge-參考答案)


## [Completing our dice function](https://youtu.be/jS4aFq5-91M?t=12622)



### 🏁 Challenge 1


修改`randomNumber`變數的值 - `Math.floor( Math.random() * 6 )`，隨機產生數字的範圍為1～6


```js
// Try to modify the expression so that we get a range from 1 to 6

let randomNumber = Math.floor( Math.random() * 6 )

console.log(randomNumber)
```


[參考答案](#Challenge-參考答案)



### 🏁 Challenge 2


創機一個函式`rollDice()`，回傳`return`隨機數字的範圍為1～6。

Create a function, rollDice(), that returns a random number between 1 and 6


```js
let randomNumber = Math.floor( Math.random() * (1 + 6) )

console.log(randomNumber)

  

// Create a function, rollDice(), that returns a random number between 1 and 6
```



[參考答案](#Challenge-參考答案)




## [Make getRandomCard() work](https://youtu.be/jS4aFq5-91M?t=12785)


⭐ 將我們目前所學的`Math.floor`和`Math.random`來運用到我們的庫克牌遊戲吧！


讓函式`getRandomCard()`，回傳`return`隨機數字的範圍為1～13。

Make this function return a random number between 1 and 13



```js
let hasBlackJack = false

let isAlive = true

let message = ""

  

let sumEl = document.querySelector("#sum-el")

let messageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")

  
  
  
  
  

// Make this function return a random number between 1 and 13

function getRandomCard() {

return 5

}

  

function startGame() {

renderGame()

}

  
  

function renderGame(){

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

console.log("Drawing a new card from the deck!")

let card = getRandomCard();

sum += card;

  

cards.push(card)

renderGame()

}
```



[參考答案](#Challenge-參考答案)



## [getRandomNumber function](https://youtu.be/jS4aFq5-91M?t=12960)


寫一個 if...else 陳述式，設定的條件為:「如果隨機產生的數字為`1`，則回傳`11`」及「如果隨機產生的數字為`11 ～ 13`，則回傳`10`」。



```js
function getRandomCard() {

// if 1 -> return 11

// if 11-13 -> return 10

return Math.floor(Math.random() * 13) + 1;


}
```



[參考答案](#Challenge-參考答案)




## [Assign values in startGame function](https://youtu.be/jS4aFq5-91M?t=13146)



```js
let cards = []

let sum = 0

let hasBlackJack = false

let isAlive = false

let message = ""

  

let sumEl = document.querySelector("#sum-el")

let messageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")

  
  
  
  
  
  

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



function startGame() {

isAlive = true

// Generate two random numbers

// Re-assign the cards and sum variables so that the game can start

renderGame()

}
```


[參考答案](#Challenge-參考答案)





## [Write your first logical operator](https://youtu.be/jS4aFq5-91M?t=13600)




```js
let hasSolvedChallenge = false

let hasHintsLeft = false

  

// Create an if statement that checks that both variables are false.

// If so, run the showSolution() function

  

function showSolution() {

console.log("Showing the solution....")

}
```


[參考答案](#Challenge-參考答案)



## [Only trigger newCard() if you're allowed to](https://youtu.be/jS4aFq5-91M?t=13912)


⭐ 繼續完成我們的庫克牌遊戲吧！


```js
function newCard() {

// Only allow the player to get a new card if she IS alive and does NOT have Blackjack

console.log("Drawing a new card from the deck!")

let card = getRandomCard();

sum += card;

cards.push(card)

renderGame()

}

```


[參考答案](#Challenge-參考答案)



## [create first object](https://youtu.be/jS4aFq5-91M?t=14567)


![](https://i.imgur.com/TfIEDrl.jpg)



```js
// Create an object that represents an airbnb castle listing.


// It should contain at least one boolean, one string, one number, and one array


// Log out at least two of the keys using the dot notation
```



[參考答案](#Challenge-參考答案)



## [Use an object to store player data](https://youtu.be/jS4aFq5-91M?t=14768)


### 🏁 Challenge (實作挑戰題)


⭐ 繼續完成我們的庫克牌遊戲吧！


```html
<html>

<head>

<link rel="stylesheet" href="index.css">

</head>

<body>

<h1>Blackjack</h1>

<p id="message-el">Want to play a round?</p>

<p id="cards-el">Cards:</p>

<p id="sum-el">Sum:</p>

<button onclick="startGame()">START GAME</button>

<br>

<button onclick="newCard()">NEW CARD</button>

<!-- 1. Create a paragraph with an id of "player-el" -->

<p id="player-el"></p>

<script src="index.js"></script>

</body>

</html>
```




```js
// js
// 2. Create the player object. Give it two keys, name and chips, and set their values

let cards = []

let sum = 0

let hasBlackJack = false

let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl

  

// 4. Render the player's name and chips in playerEl

  

function getRandomCard() {

let randomNumber = Math.floor( Math.random()*13 ) + 1

if (randomNumber > 10) {

return 10

} else if (randomNumber === 1) {

return 11

} else {

return randomNumber

}

}

  

function startGame() {

isAlive = true

let firstCard = getRandomCard()

let secondCard = getRandomCard()

cards = [firstCard, secondCard]

sum = firstCard + secondCard

renderGame()

}

  

function renderGame() {

cardsEl.textContent = "Cards: "

for (let i = 0; i < cards.length; i++) {

cardsEl.textContent += cards[i] + " "

}

sumEl.textContent = "Sum: " + sum

if (sum <= 20) {

message = "Do you want to draw a new card?"

} else if (sum === 21) {

message = "You've got Blackjack!"

hasBlackJack = true

} else {

message = "You're out of the game!"

isAlive = false

}

messageEl.textContent = message

}

  
  

function newCard() {

if (isAlive === true && hasBlackJack === false) {

let card = getRandomCard()

sum += card

cards.push(card)

renderGame()

}

}
```


[參考答案](#Challenge-參考答案)


# 🏁 Recap Challenge


## [Objects & functions](https://youtu.be/jS4aFq5-91M?t=15317)



```js
// Create a person object that contains three keys: name, age, and county.

// Use yourself as an example to set the values for name, age, and country

  

// Create a function, logData(), that uses the person object to create a

// string in the following format:

// "Per is 35 years old and lives in Norway"

  

// Call the logData() function to verify that it works
```


[參考答案](#Challenge-參考答案)



## [if else](https://youtu.be/jS4aFq5-91M?t=15441)



```js
let age = 15

  

// less than 6 years old -> free

// 6 to 17 years old -> child discount

// 18 to 26 years old -> student discount

// 27 to 66 years old -> full price

// over 66 years old -> senior citizen discount

  

// Create a conditional statement (if/else/else if) that logs out the discount

// the passenger will get based upon the value of the age variable
```



[參考答案](#Challenge-參考答案)



## [Loops & arrays](https://youtu.be/jS4aFq5-91M?t=15614)



```js
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

  

/* Use a for loop to log the following to the console:

  

The 5 largest countries in the world:

- China

- India

- United States

- Indinesia

- Pakistan

*/
```



[參考答案](#Challenge-參考答案)





## [push, pop, unshift, shift challenge](https://youtu.be/jS4aFq5-91M?t=15741)



```js
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

  

/* Use a for loop to log the following to the console:

  

The 5 largest countries in the world:

- China

- India

- United States

- Indinesia

- Pakistan

*/
```




[參考答案](#Challenge-參考答案)




## [Logical operators](https://youtu.be/jS4aFq5-91M)




```js
let dayOfMonth = 13

let weekday = "Tuesday"

  

// If it is Friday the 13th, log out this spooky face: 😱

// Use the logical "AND operator" -> &&
```


[參考答案](#Challenge-參考答案)




## [Rock papers scissors](https://youtu.be/jS4aFq5-91M?t=16070)



```js
let hands = ["rock", "paper", "scissor"]

  

// Create a function that returns a random item from the array
```



[參考答案](#Challenge-參考答案)






## [emojifighter](https://scrimba.com/learn/learnjavascript/emojifighter-co0ae44c3916ad5cbf9d73166)



⭐ 這題算是「實作」魔王題，沒有在YT教學影片中喔～）其實只要把觀念學好，會應用到這題，其實也不會很難啦～


```js
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

  

let stageEl = document.getElementById("stage")

let fightButton = document.getElementById("fightButton")

  

fightButton.addEventListener("click", function() {

// Challenge:

// When the user clicks on the "Pick Fighters" button, pick two random

// emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

})
```




>[HTML&CSS 原始碼](https://scrimba.com/learn/learnjavascript/emojifighter-co0ae44c3916ad5cbf9d73166)



[參考答案](#Challenge-參考答案)







## [Sorting fruit](https://youtu.be/jS4aFq5-91M?t=16252)



```js
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]

let appleShelf = document.getElementById("apple-shelf")

let orangeShelf = document.getElementById("orange-shelf")

  

// Create a function that puts the apples onto the appleShelf

// and the oranges onto the orangeShelf. Use a for loop,

// a conditional statement, and the textContent property.
```



>[HTML&CSS 原始碼](https://scrimba.com/learn/learnjavascript/sorting-fruits-co2224ee0aa71a2ab76471c1c)



[參考答案](#Challenge-參考答案)




# Challenge 參考答案


## ✏️ 學習筆記


### [Add firstCard, secondCard, & sum](https://youtu.be/jS4aFq5-91M?t=5547)

```js
// 1. Create two variables, firstCard and secondCard.

// Set their values to a random number between 2-11

let firstCard = 3; // 值設定為二到十一，隨機的數字

let secondCard = 10; // 值設定為二到十一，隨機的數字

// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondCard;


console.log(sum)
```



### [Your first if..else statement](https://youtu.be/jS4aFq5-91M?t=5948)


```js
// Check if the person is old enough to enter the nightclub (21)

// Log a suitable message to the console in both cases

  

let age = 20

  

// if less than 21 -> "You can not enter the club!"

// else -> "Welcome!"

  

if (age => 20) {

console.log("Welcome!")

} else {

console.log("You can not enter the club!")

}
```

### [if/else...if/else statement](https://youtu.be/jS4aFq5-91M?t=6126)

```js
// Check if the person is elegible for a birthday card from the King! (100)

  

let age = 100

  

// if less than 100 -> "Not elegible"

// else if exactly 100 -> "Here is your birthday card from the King!"

// else -> "Not elegible, you have already gotten one"

  

if (age < 100){

console.log("Not elegible")

} else if (age === 100) {

console.log("Here is your birthday card from the King!")

} else{

console.log("Not elegible, you have already gotten one"

)

}
```


### [if...else statement for our game](https://youtu.be/jS4aFq5-91M?t=6327)

```js
if (sum <= 20) {

console.log("Do you want to draw a new card? 🙂")

} else if (sum === 21) {

console.log("Wohoo! You've got Blackjack! 🥳")

} else {

console.log("You're out of the game! 😭")

}
```



### [Add the isAlive variable](https://youtu.be/jS4aFq5-91M?t=6578)

```js
let firstCard = 10

let secondCard = 11

let sum = firstCard + secondCard

let hasBlackJack = false

// 1. Create a variable called isAlive and assign it to true

let isAlive = true

// 2. Flip its value to false in the appropriate code block

if (sum <= 20) {

console.log("Do you want to draw a new card? 🙂")

} else if (sum === 21) {

console.log("Wohoo! You've got Blackjack! 🥳")

hasBlackJack = true

} else {

console.log("You're out of the game! 😭")

isAlive = false

}

// 3. Log it out to check that you're doing it right

console.log(isAlive)
```


### [Practice boolean conditions](https://youtu.be/jS4aFq5-91M?t=6688)


```js
console.log(4 === 3) // false

console.log(5 > 2) // true

console.log(12 > 12) // false

console.log(3 < 0) // false

console.log(3 >= 3) // true

console.log(11 <= 11) // true

console.log(3 <= 2) // false
```


### [Add message variable](https://youtu.be/jS4aFq5-91M?t=6896)


```js
let firstCard = 10

let secondCard = 21

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""


if (sum <= 20) {

message = "Do you want to draw a new card? 🙂"

} else if (sum === 21) {

message = "Wohoo! You've got Blackjack! 🥳"

hasBlackJack = true

} else {

message = "You're out of the game! 😭"

isAlive = false

}

console.log(message)
```


### [Make start button work](https://youtu.be/jS4aFq5-91M?t=6896)

```js
let firstCard = 10

let secondCard = 21

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

  

// 2. Create a startGame() function. Move the conditional

// below (line 11-20) inside the body of the function.

  

function startGame(){

if (sum <= 20) {

message = "Do you want to draw a new card? 🙂"

} else if (sum === 21) {

message = "Wohoo! You've got Blackjack! 🥳"

hasBlackJack = true

} else {

message = "You're out of the game! 😭"

isAlive = false

}

}

console.log(message)
```




### [Display message](https://youtu.be/jS4aFq5-91M?t=7873)

```js
let firstCard = 10

let secondCard = 21

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

  

// 1. Store the message-el paragraph in a variable called messageEl

let messageEl = document.getElementById("message-el")

  

function startGame(){

if (sum <= 20) {

message = "Do you want to draw a new card? 🙂"

} else if (sum === 21) {

message = "Wohoo! You've got Blackjack! 🥳"

hasBlackJack = true

} else {

message = "You're out of the game! 😭"

isAlive = false

}

// 2. Display the message in the messageEl using messageEl.textContent

messageEl.textContent = message

}
```


👩🏻‍💻 **筆者碎碎念**：要記得`messageEl.textContent = message`要放在`startGame()`函式裡，這樣當使用者點擊`START GAME`，才會觸發（執行）程式碼。


### [Display sum](https://youtu.be/jS4aFq5-91M?t=8029)


```js
let firstCard = 10

let secondCard = 21

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

  

// 2. Store the sum paragraph in a variable called sumEl

let sumEl = document.getElementById("sum-el")

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
```




### [Display cards](https://youtu.be/jS4aFq5-91M?t=8377)

```js
let firstCard = 10

let secondCard = 21

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

  

// 2. Store the cards paragraph in a variable called cardsEl

let sumEl = document.querySelector("#sum-el")

let messageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")

  

function startGame(){

// 3. Render the cars on the page using this format -> "Cards: 10 4"

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
```

### [New card button](https://youtu.be/jS4aFq5-91M?t=8495)

```js

let firstCard = 10

let secondCard = 21

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

  

let sumEl = document.querySelector("#sum-el")

let messageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")

  

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

  

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"

  

function newCard() {

console.log("Drawing a new card from the deck!")

}
```



### [Add to sum when newCard is clicked](https://youtu.be/jS4aFq5-91M?t=8716)


```js
function newCard() {

console.log("Drawing a new card from the deck!")

let card = 6;

sum += card;

// Push the card to the cards array

cards.push(card)

renderGame()

}
```




### [Rename startGame function](#Rename-startGame-function)

```js
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
```


👩🏻‍💻 筆者碎碎念: 記得在HTML文件裡，`onclick`監聽事件的函式名稱也要更改喔～


### [Arrays intro](https://youtu.be/jS4aFq5-91M?t=9251)

```js

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

```


### [Array indexes](https://youtu.be/jS4aFq5-91M?t=9580)

```js

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

  

// Make the following appear in the console:

// Frontend developer at Xeneta

// People counter for Norstat

// CEO at Scrimba

console.log(experience[1])

console.log(experience[2])

console.log(experience[0])
```



### [Arrays with multiple data types](https://youtu.be/jS4aFq5-91M?t=9831)

```js
// Create an array that describes yourself. Use the three primitive data types you've learned

// It should contain your name (string), your age (number), and whether you like pizza (boolean)

let aboutMe = ["Michelle",16,true]

```


### [Adding & removing items from arrays](https://youtu.be/jS4aFq5-91M?t=9971)

#### 🏁 Challenge 1


教學影片中，老師的解答：

```js
// Push the newMessage to the messages array, and then log out the array

  

let messages = [

"Hey, how's it going?",

"I'm great, thank you! How about you?",

"All good. Been working on my portfolio lately."

]

  

let newMessage = "Same here!"

  

messages.push(newMessage)

  

console.log(messages)
```



我的解答：

```js
// Push the newMessage to the messages array, and then log out the array

  

let messages = [

"Hey, how's it going?",

"I'm great, thank you! How about you?",

"All good. Been working on my portfolio lately."

]

  

let newMessage = messages.push("Same here!");

  

console.log(messages)
```



#### 🏁 Challenge 2


```js

// How can you remove the last item in an array? Try to google it!

messages.pop();

console.log(messages)

```



### [Creating cards array](https://youtu.be/jS4aFq5-91M?t=10236)

```js
let firstCard = 10

let secondCard = 4

// 1. Create a new array - cards - that contains firstCard and secondCard

let cards = [firstCard,secondCard]

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

  

let sumEl = document.querySelector("#sum-el")

let messageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")

  

function startGame(){

// 2. Refer to the cards array when rendering out the cards

sumEl.textContent = "Sum: " + sum

cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

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
```



### [Push new card to array](https://youtu.be/jS4aFq5-91M?t=10304)


```js
function newCard() {

console.log("Drawing a new card from the deck!")

let card = 6;

sum += card;

// Push the card to the cards array
cards.push(card)
console.log(cards)
renderGame()

}


### [Counting - Loops](https://youtu.be/jS4aFq5-91M?t=10631)


教學影片中，老師的解答：


```js
// Create a for loop that counts from 10 to 100 in steps of 10

// Use console.log to log out the numbers

for (let i = 10; i < 101; i += 10) {

console.log(i)

}
```


我的解答：


```js
// Create a for loop that counts from 10 to 100 in steps of 10

// Use console.log to log out the numbers

for (let i = 10; i <= 100; i += 10){

console.log(i)

}
```


### [Counting - Loops](https://youtu.be/jS4aFq5-91M?t=10631)



```js
// Create a for loop that counts from 10 to 100 in steps of 10

// Use console.log to log out the numbers

  

for (let i = 10; i < 101; i += 10) {

console.log(i)

}
```


### [First array-based for loop](https://youtu.be/jS4aFq5-91M?t=11063)



```js
let cards = [7, 3, 9]

  

// Create a for loop that logs out all the cards in the array

// Use cards.length to specify how long the loop should run

  

for (let i = 0; i < cards.length; i++) {

console.log(cards[i])

}
```





### [For loops, arrays, & DOM](https://youtu.be/jS4aFq5-91M?t=11155)


```js
let sentence = ["Hello ", "my ", "name ", "is ", "Per"]

let greetingEl = document.getElementById("greeting-el")

  

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {

greetingEl.textContent += sentence[i] + " "

}
```



### [Use loop to render cards](https://youtu.be/jS4aFq5-91M?t=11335)


```js

let cards = [firstCard,secondCard]


function renderGame(){

sumEl.textContent = "Sum: " + sum

cardsEl.textContent = "Cards: "

// Create a for loop that renders out all the cards instead of just two

for (let i = 0; i < cards.length; i++) {

cardsEl.textContent += cards[i] + " ";

}
```





### [Returning values](https://youtu.be/jS4aFq5-91M?t=11571)


```js
// Write a function that returns the total race time

// Call/invoke the function and store the returned value in a new variable

// Finally, log the variable out

  

let player1Time = 102

let player2Time = 107

  

function totalRaceTime() {

return player1Time + player2Time

}

  

let totalTime = totalRaceTime()

  

console.log(totalTime)
```






### [Use function to set card values](https://youtu.be/jS4aFq5-91M?t=11874)


```js
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
```




### [Math.random() * 6](https://youtu.be/jS4aFq5-91M?t=12324)


```js
let randomNumber = Math.random() * 3

  

console.log(randomNumber)

  

/*
In which range will our randomNumber be now?

From: 0

To:5.999999... 
*/
```



### [Using Math.random() and Math.floor to create a dice](https://youtu.be/jS4aFq5-91M?t=12518)


```js
let randomNumber = Math.floor(Math.random() * 6)

  

console.log(randomNumber)

  

/*

  

Write down all the possible values randomNumber can hold now!

  

0,1,2,3,4,5

  
  

*/
```





### [Completing our dice function](https://youtu.be/jS4aFq5-91M?t=12622)


#### 🏁 Challenge 1


```js
// Try to modify the expression so that we get a range from 1 to 6

let randomNumber = Math.floor( Math.random() * (1 + 6) )

console.log(randomNumber)
```



#### 🏁 Challenge 2


```js
// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice(){

return Math.floor( Math.random() * (1 + 6) )

}

console.log(rollDice());
```






### [Make getRandomCard() work](https://youtu.be/jS4aFq5-91M?t=12785)



```js
let hasBlackJack = false

let isAlive = true

let message = ""

  

let sumEl = document.querySelector("#sum-el")

let messageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")

  
  
  
  
  

// Make this function return a random number between 1 and 13

function getRandomCard() {

return Math.floor(Math.random() * 13) + 1

}

  

function startGame() {

renderGame()

}

  
  

function renderGame(){

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

console.log("Drawing a new card from the deck!")

let card = getRandomCard();

sum += card;

  

cards.push(card)

renderGame()

}
```






### [getRandomNumber function](https://youtu.be/jS4aFq5-91M?t=12960)





```js
// 👩🏻‍💻 筆者碎碎念：記得在HTML文件，onclick事件監聽的函式要換成startGame()！
function getRandomCard() {

// if 1 -> return 11

// if 11-13 -> return 10

let random = Math.floor(Math.random() * 13) + 1;

if (random === 1) {

return 11

} else if (random > 10) { // 👩🏻‍💻 筆者碎碎念：random變數-隨機產生的數字範圍是1～13，所以條件設定大於10沒問題，因爲random變數的值不會大於13

return 10

}

else { // 👩🏻‍💻 筆者碎碎念：記得設定，如果random變數-隨機產生的數字不是1或11～13，要怎麼樣？（回傳它原本隨機產生數字的值就好）

return random

}

  

}
```






### [Assign values in startGame function](https://youtu.be/jS4aFq5-91M?t=13146)




```js
let cards = []

let sum = 0

let hasBlackJack = false

let isAlive = false

let message = ""

  

let sumEl = document.querySelector("#sum-el")

let messageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")

  
  
  
  
  
  

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




function startGame() {

// Generate two random numbers

// Re-assign the cards and sum variables so that the game can start

isAlive = true

let firstCard = getRandomCard()

let secondCard = getRandomCard()

cards = [firstCard,secondCard]

sum = firstCard + secondCard

renderGame()

}
```






### [Write your first logical operator](https://youtu.be/jS4aFq5-91M?t=13600)



```js
let hasSolvedChallenge = false

let hasHintsLeft = false

  

// Create an if statement that checks that both variables are false.

// If so, run the showSolution() function

  

if (hasSolvedChallenge === false && hasHintsLeft === false) {

showSolution()

}

  

function showSolution() {

console.log("Showing the solution....")

}
```






### [Only trigger newCard() if you're allowed to](https://youtu.be/jS4aFq5-91M?t=13912)



```js
function newCard() {

// Only allow the player to get a new card if she IS alive and does NOT have Blackjack

if ( isAlive === true && hasBlackJack === false) {

console.log("Drawing a new card from the deck!")

let card = getRandomCard();

sum += card;

cards.push(card)

renderGame()

}

}
```




###  [create first object](https://youtu.be/jS4aFq5-91M?t=14567)



影片中老師的解答：



```js
// Create an object that represents an airbnb castle listing.

// It should contain at least one boolean, one string, one number, and one array

// Log out at least two of the keys using the dot notation

  

let castle = {

title: "Live like a king in my castle",

price: 190,

isSuperHost: true,

images: ["img/castle1.png", "img/caste2.png"]

}

  

console.log(castle.price)

console.log(castle.isSuperHost)
```









我的解答：



```js
// Create an object that represents an airbnb castle listing.

// It should contain at least one boolean, one string, one number, and one array

// Log out at least two of the keys using the dot notation

  
  

let aibnb = {title:"Live like a King in my Castle",

address:"Privateroom in Galway",

guests:4,

rating:4.95,

pricing:190,

SUPERHOST:true

}

  
  

console.log(aibnb.title)

console.log(aibnb.rating)
```












### [Use an object to store player data](https://youtu.be/jS4aFq5-91M?t=14768)



```js
// 2. Create the player object. Give it two keys, name and chips, and set their values

let player = {

name: "Per",

chips: 200

}

let cards = []

let sum = 0

let hasBlackJack = false

let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl

let playerEl = document.getElementById("player-el")

  

// 4. Render the player's name and chips in playerEl

playerEl.textContent = player.name + ": $" + player.chips

  

function getRandomCard() {

let randomNumber = Math.floor( Math.random()*13 ) + 1

if (randomNumber > 10) {

return 10

} else if (randomNumber === 1) {

return 11

} else {

return randomNumber

}

}

  

function startGame() {

isAlive = true

let firstCard = getRandomCard()

let secondCard = getRandomCard()

cards = [firstCard, secondCard]

sum = firstCard + secondCard

renderGame()

}

  

function renderGame() {

cardsEl.textContent = "Cards: "

for (let i = 0; i < cards.length; i++) {

cardsEl.textContent += cards[i] + " "

}

sumEl.textContent = "Sum: " + sum

if (sum <= 20) {

message = "Do you want to draw a new card?"

} else if (sum === 21) {

message = "You've got Blackjack!"

hasBlackJack = true

} else {

message = "You're out of the game!"

isAlive = false

}

messageEl.textContent = message

}

  
  

function newCard() {

if (isAlive === true && hasBlackJack === false) {

let card = getRandomCard()

sum += card

cards.push(card)

renderGame()

}

}
```





## 🏁 Recap Challenge



### [Objects & functions](https://youtu.be/jS4aFq5-91M?t=15317)


影片中，老師的解答：


```js
// Create a person object that contains three keys: name, age, and county.

// Use yourself as an example to set the values for name, age, and country

  

// Create a function, logData(), that uses the person object to create a

// string in the following format:

// "Per is 35 years old and lives in Norway"

  

// Call the logData() function to verify that it works

  

let person = {

name: "Per",

age: 35,

country: "Norway"

}

  

function logData() {

console.log(person.name + " is " + person.age + " years old and lives in " + person.country)

}

  

logData()
```



我的解答：


```js
// Create a person object that contains three keys: name, age, and county.

// Use yourself as an example to set the values for name, age, and country

  

let person = {

name:"Michelle Chang",

age:16,

country:"Taiwan"

}

  

// Create a function, logData(), that uses the person object to create a

// string in the following format:

// "Per is 35 years old and lives in Norway"

function logData() {

console.log(person.name + " is " + person.age + " old " + "and lives in " + person.country)

}

  

// Call the logData() function to verify that it works

logData()
```





### [if else](https://youtu.be/jS4aFq5-91M?t=15441)



```js
let age = 55

  

// less than 6 years old -> free

// 6 to 17 years old -> child discount

// 18 to 26 years old -> student discount

// 27 to 66 years old -> full price

// over 66 years old -> senior citizen discount

  

// Create a conditional statement (if/else/else if) that logs out the discount

// the passenger will get based upon the value of the age variable

  

if (age < 6) {

console.log("free")

} else if (age < 18) {

console.log("child discount")

} else if (age < 27) {

console.log("student discount")

} else if (age < 67) {

console.log("full price")

} else {

console.log("senior citizen discount")

}
```



### [Loops & arrays](https://youtu.be/jS4aFq5-91M?t=15614)



```js
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

  

/* Use a for loop to log the following to the console:

  

The 5 largest countries in the world:

- China

- India

- United States

- Indinesia

- Pakistan

*/

  

console.log("The 5 largest countries in the world:")

for (let i = 0; i < largeCountries.length; i++) {

let array = largeCountries[i];

console.log("- " + array)

}
```





### [push, pop, unshift, shift challenge](https://youtu.be/jS4aFq5-91M?t=15742)


```js
let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

  

// You need to help me fixup the largeCountries array so that

// China and Pakistan are added back into their respective places

  

// Use push() & pop() and their counterparts unshift() & shift()

// Google how to use unshift() and shift()

  
  

largeCountries.shift()

largeCountries.unshift("China")

  
  

largeCountries.pop()

largeCountries.push("Pakistan")

  
  

console.log(largeCountries)

  

// log out


// [ 'China', 'India', 'USA', 'Indonesia', 'Pakistan' ]
```







### [Logical operators](https://youtu.be/jS4aFq5-91M)



```js
let dayOfMonth = 13

let weekday = "Friday"

  

// If it is Friday the 13th, log out this spooky face: 😱

// Use the logical "AND operator" -> &&

  

if (dayOfMonth === 13 && weekday === "Friday") {

console.log("😱")

}
```




### [Rock papers scissors](https://youtu.be/jS4aFq5-91M?t=16070)


影片中，老師的解答：


```js
let hands = ["rock", "paper", "scissor"]

  

// Create a function that returns a random item from the array

  

function getHand() {

let randomIndex = Math.floor( Math.random() * 3)

return hands[randomIndex]

}

  

console.log( getHand() )
```




我的解答：


```js
let hands = ["rock", "paper", "scissor"]

  

// Create a function that returns a random item from the array

  

function randomItem(){

let i = Math.floor(Math.random() * 3)

// console.log(i)

console.log(hands[i])

}

  

randomItem()
```





### [emojifighter](https://scrimba.com/learn/learnjavascript/emojifighter-co0ae44c3916ad5cbf9d73166)


```js
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

  

let stageEl = document.getElementById("stage")

let fightButton = document.getElementById("fightButton")

  

fightButton.addEventListener("click", function() {

// Challenge:

// When the user clicks on the "Pick Fighters" button, pick two random

// emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

let randomIndexOne = Math.floor( Math.random() * fighters.length )

let randomIndexTwo = Math.floor( Math.random() * fighters.length )

stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]

})
```






### [Sorting fruit](https://youtu.be/jS4aFq5-91M?t=16252)


影片中，老師的解答：


```js
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]

let appleShelf = document.getElementById("apple-shelf")

let orangeShelf = document.getElementById("orange-shelf")

  

// Create a function that puts the apples onto the appleShelf

// and the oranges onto the orangeShelf. Use a for loop,

// a conditional statement, and the textContent property.

  

function sortFruit() {

for (let i = 0; i < fruit.length; i++) {

if (fruit[i] === "🍎") {

appleShelf.textContent += "🍎"

} else if (fruit[i] === "🍊") {

orangeShelf.textContent += "🍊"

}

}

}

  

sortFruit()
```



我的解答：



```js
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
```