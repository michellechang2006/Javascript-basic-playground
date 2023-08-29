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

[If...else conditionals](#If...else-conditionals)

[Your first if..else statement](#Your-first-if..else-statement)

[if/else...if/else statement](#if/else...if/else-statement)

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

[For loops & arrays](#For-loop-&-arrays)

[First array-based for loop](#First-array-based-for-loop)

[For loops, arrays, & DOM](#For-loops-arrays-&-DOM)

[Use loop to render cards](#Use-loop-to-render-cards)

[Returning values](#Returning-values)

[Generating random numbers with Math.random()](#Generating-random-numbers-with-Math.random())

[Math.random() * 6](#Math.random()-*-6)

[Flooring number with Math.floor()](#Flooring-number-with-Math.floor())

[Using Math.random() and Math.floor to create a dice](#Using-Math.random()-and-Math.floor-to-create-a-dice)

[Completing our dice function](#Completing-our-dice-function)

[Make getRandomCard() work](#Make-getRandomCard()-work)

[getRandomNumber function](#getRandomNumber-function)

[Assign values in startGame function](#Assign-values-in-startGame-function)

[Logical AND operator](#Logical-AND-operator)

[Write your first logical operator](#Write-your-first-logical-operator)

[Logical OR operator](#Logical-OR-operator)

[Only trigger newCard() if you're allowed to](#Only-trigger-newCard()-if-you're-allowed-to)

[Logical NOT operator (筆者自行補充)](#Logical-NOT-operator-(筆者自行補充))

[create first object](#create-first-object)

[Use an object to store player data](#Use-an-object-to-store-player-data)

[Recap](#Recap)


### [🏁 Recap Challenge](#Recap-Challenge)


[Objects & functions](#Objects-&-functions)

[if else](#if-else)

[Loops & arrays](#Loops-&-arrays)

[push, pop, unshift, shift challenge](#push,-pop,-unshift,-shift-challenge)

[Logical operators](#Logical-operators)

[Rock papers scissors](#Rock-papers-scissors)

[emojifighter](#emojifighter)

[Sorting fruit](#Sorting-fruit)


### [⭐ 復刻 APP](#復刻-APP)

### [⭐ Solo Project 學以致用](#學以致用-Solo-Project)

### [🏁 Challenge 題庫]()

### [🏁 Challenge 參考答案](#Challenge-參考答案)


# 學習筆記

## [Add firstCard, secondCard, & sum](https://youtu.be/jS4aFq5-91M?t=5547)

### 🏁 Challenge

**⭐ Passenger counter app 複習題 [Create variable](https://tinyurl.com/28evusbg)**

1. 創建兩個變數，分別宣告為`firstCard`和`secondCard`。其值設定為二到十一中，隨機的數字。

  Create two variables, firstCard and secondCard.  Set their values to a random number between 2-11


2. 創建一個變數`sum`，其值為`firstCard`和`secondCard`的加總。

   Create a variable, sum, and set it to the sum of the two cards
   
[參考答案](#Challenge-參考答案)

## [If...else conditionals](https://youtu.be/jS4aFq5-91M?t=5604)

### 🃏 遊戲機制

🥳 如果你手中的庫克牌點數剛剛好是21，那你就贏了！
🙂 如果你手中的庫克牌點數小於21，你雖然沒有贏，但不會出局。
😭 如果你手中的庫克牌點數大於21，你就出局了。

![](https://i.imgur.com/ikWf910.png)

>(圖片來源於[教學影片](https://youtu.be/jS4aFq5-91M?t=5604))

### if...else

⭐ 這個單元資訊量有點大，我們透過(圖解）筆記來慢慢解析此語法。

**先看語法架構：**

```js
if (condition)
  statement1

// With an else clause
if (condition)
  statement1
else
  statement2
```

（來源：[MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else))


**中文解析**

```js
if (condition) // 如果符合條件 condition
  statement1 // 則執行執行陳述式1 statement1 （程式碼）

// With an else clause
if (condition) // 如果符合條件condition
  statement1 // 則執行執行陳述式1 statement1 （程式碼）
else // 如果不符合條件 condition
  statement2 // 則執行執行陳述式2 statement2 （程式碼）
```

（來源：MDN WEB DOCS)

**👩🏻‍💻 筆者碎碎念：** 如果還是看不懂，沒關係！筆者嘗試整理成 🖼️ 圖解筆記，方便理解。

**🖼️ 圖解**

我們以車況為例：

![](https://i.imgur.com/HPsPIjT.png)


```js
if /* 如果*/(/*塞車*/)
  // 左轉
else /* 如果沒有*/
// 直走
```



### 多個條件 （conditions）else...if...

**語法架構：**

```js
if (condition1)
  statement1
else if (condition2)
  statement3
else
  statement2
```

**中文解析**

```js
if (condition1) // 如果符合條件condition1
  statement1 // 則執行陳述式1 statement1 （程式碼）
else if (condition2) // 如果符合條件 condition2
  statement3 // 則執行陳述式2 statement3 （程式碼）
  // ... (更多的條件)
else // 如果不符合條件 condition1
  statement2 // 則執行陳述式3 statement2 （程式碼）
```

**🖼️ 圖解**

我們以車況為例：

![](https://i.imgur.com/mz3ppvk.png)


```js
if  /* 如果*/(/*塞車*/)
  // 左轉
else if /* 另外如果*/ (/* 要去休息站 */)
  // 右轉
else /* 如果沒有*/
  // 直走
```


> [MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else)

### ✋🏻 實作

了解了遊戲機制和 `If...else conditionals` 語法後，我們現在來實作看看撲克牌遊戲（Blackjack Game）。

```js
if (sum < 21) { // 如果sum變數的值小於21

console.log("Do you want to draw a new card? 🙂") // 將 "Do you want to draw a new card? 🙂" 顯示（log）在控制台（console）

} else if (sum === 21) { // 如果sum變數的值等於21

console.log("Wohoo! You've got Blackjack! 🥳") // 將 "Wohoo! You've got Blackjack! 🥳" 顯示（log）在控制台（console）

} else if (sum > 21) { // 如果sum變數的值大於21

console.log("You're out of the game! 😭")// 將 "You're out of the game! 😭" 顯示（log）在控制台（console）

}
```

`else if (sum > 21)`可取代為`else`。因爲我們第一個條件是設定為`如果sum變數的值小於21`，而`如果sum變數的值大於21`（true)條件代表說`如果sum變數的值沒有小於21，而是相反大於21`（false)，所以我們可以直接寫`else`即可。

**🖼️ 圖解**

![](https://i.imgur.com/rRYH8XH.png)

>[MDN WEB DOCS | | 比較運算子](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators#%E6%AF%94%E8%BC%83%E9%81%8B%E7%AE%97)


### ⚠️ 注意 : 字串內有單引號，就必須使用雙引號包住文字。

```js
else if (sum > 21) {

console.log("You're out of the game! 😭")// You're 英文字有一個單引號，必須用雙引號來包住文字

}
```



##### 📝 **延伸-相等比較**

在JS中，有`==`和`===`符號，它們兩個的差別在於，`===`比較更加嚴格，資料型態（例如：字串、數字）必須也一樣。

**嚴格相等 `===` :**

```js
'foo' === 'foo' _// true 相等
123 === 123 _// true 相等
123 === '123' _// false 不相等，資料型態不一樣，一個是數字（number)，一個是字串（string)
```

**一般相等 `==` :**

```js
'foo' == 'foo' // true 相等
123 == 123 // true 相等
123 == '123' _// true_ 即使資料型態不一樣，一個是數字（number)，一個是字串（string），使用一般相等符號 == ，依舊相等
```


>[MDN WEB DOCS | | 相等比較](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Equality_comparisons_and_sameness)

**🗂️ Reference：**

[前端三十｜13. [JS] 為什麼判斷相等時不能用雙等號？](https://medium.com/schaoss-blog/%E5%89%8D%E7%AB%AF%E4%B8%89%E5%8D%81-13-js-%E7%82%BA%E4%BB%80%E9%BA%BC%E5%88%A4%E6%96%B7%E7%9B%B8%E7%AD%89%E6%99%82%E4%B8%8D%E7%94%A8%E8%83%BD%E9%9B%99%E7%AD%89%E8%99%9F-d02fbf91492f)


## [Your first if..else statement](https://youtu.be/jS4aFq5-91M?t=5948)

### 🏁 Challenge

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

### ⚠️ 注意

這個挑戰題中，條件必須設定為大於「20」，而不是「21」，因為大於「20」就已經包含二十一了（`age => 20`）。

```js
if (age => 20) { //大於「20」就已經包含二十一了

console.log("Welcome!")

} else {

console.log("You can not enter the club!")

}

```

> [MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else)




## [if/else...if/else statement](https://youtu.be/jS4aFq5-91M?t=6126)

### 🏁 Challenge

挑戰看看自己編寫`if/else...if/else statement`陳述式語法吧！

```js
// Check if the person is elegible for a birthday card from the King! (100)

  

let age = 100

  

// if less than 100 -> "Not elegible"

// else if exactly 100 -> "Here is your birthday card from the King!"

// else -> "Not elegible, you have already gotten one"
```

[參考答案](#Challenge-參考答案)

> [MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else)


### ⚠️ 注意 : `==` vs. `===`

在JS中，有`==`和`===`符號，它們兩個的差別在於，`===`比較更加嚴格，資料型態（例如：字串、數字）必須也一樣。

**嚴格相等 `===` :**

```js
'foo' === 'foo' _// true 相等
123 === 123 _// true 相等
123 === '123' _// false 不相等，資料型態不一樣，一個是數字（number)，一個是字串（string)
```

**一般相等 `==` :**

```js
'foo' == 'foo' // true 相等
123 == 123 // true 相等
123 == '123' _// true_ 即使資料型態不一樣，一個是數字（number)，一個是字串（string），使用一般相等符號 == ，依舊相等
```


>[MDN WEB DOCS | | 相等比較](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Equality_comparisons_and_sameness)



**🗂️ Reference：**

[前端三十｜13. [JS] 為什麼判斷相等時不能用雙等號？](https://medium.com/schaoss-blog/%E5%89%8D%E7%AB%AF%E4%B8%89%E5%8D%81-13-js-%E7%82%BA%E4%BB%80%E9%BA%BC%E5%88%A4%E6%96%B7%E7%9B%B8%E7%AD%89%E6%99%82%E4%B8%8D%E7%94%A8%E8%83%BD%E9%9B%99%E7%AD%89%E8%99%9F-d02fbf91492f)



## [if...else statement for our game](https://youtu.be/jS4aFq5-91M?t=6327)

### 🏁 Challenge （上個單元的實作題）

⭐ 回到我們的Blackjack Game，請透過上單元學到的，來編寫以下程式碼：

```js
// Write the conditional according to these rules:

  

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"

// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"

// else -> "You're out of the game! 😭"

```

[參考答案](#Challenge-參考答案)


## [Add the hasBlackJack variable](https://youtu.be/jS4aFq5-91M?t=6452)

`JS`執行完`if/else...if/else statement`陳述式的程式碼後，就無法記得執行結果。這樣我們就無法讓玩家兌現（檢查玩家是否贏了？）

因此我們需要一種`JS`資料型態-布林（`Boolean`），來儲存玩家的遊戲結果（檢查玩家是否贏了？）

 ```js
let firstCard = 10

let secondCard = 11

let sum = firstCard + secondCard

let hasBlackJack = false // 玩家還沒開始玩遊戲，當然沒有二十一點

  

if (sum <= 20) {

console.log("Do you want to draw a new card? 🙂")

} else if (sum === 21) { // 如果玩家手上有二十一點（sum 變數的值）

console.log("Wohoo! You've got Blackjack! 🥳")

hasBlackJack = true // 玩家有二十一點

} else {

console.log("You're out of the game! 😭")

}

  

// CASH OUT! 兌現

console.log(hasBlackJack)
```

>[MDN WEB DOCS | | Boolean](https://developer.mozilla.org/zh-TW/docs/Glossary/Boolean)


### 🖼️ 圖解

![](https://i.imgur.com/4E9jDHX.png)



## [Add the isAlive variable](https://youtu.be/jS4aFq5-91M?t=6578)



### 🏁 Challenge （上個單元的實作題）

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

其實，對`JS`而言，就是`if/else...if/else statement`陳述式的條件把翻譯為布林（`Boolean`），如果這個條件為`true`（符合條件），`JS`就會執行這個區塊的程式碼，如果這個條件為`false`（不符合條件），那麽`JS`會繼續尋找其他條件，直到找到條件為`true`（符合條件）的條件，並執行該區塊的程式碼。

**語法架構：**

```js
if (condition1)
  statement1
else if (condition2)
  statement3
else
  statement2
```

**中文解析**

```js
if (condition1) // 如果符合條件condition1
  statement1 // 則執行執行陳述式1 statement1 （程式碼）
else if (condition2) // 如果符合條件 condition2
  statement3 // 則執行執行陳述式2 statement3 （程式碼）
  // ... (更多的條件)
else // 如果不符合條件 condition1
  statement2 // 則執行執行陳述式3 statement2 （程式碼）
```

**🌰 例子**

```js
let firstCard = 10

let secondCard = 11

let sum = firstCard + secondCard // 21

  

if (sum <= 20 // false 不符合條件) {

// 所以不執行此區塊的程式碼

console.log("Do you want to draw a new card? 🙂")

} else if (sum === 21 // true 符合條件) {

// 所以執行此區塊的程式碼

console.log("Wohoo! You've got Blackjack! 🥳")

} else /* false 不符合條件 */ {

// 所以不執行此區塊的程式碼

console.log("You're out of the game! 😭")

}
```

### 💡Tips

布林（`Boolean`）的`true`和`false`，聽起來有沒有覺得很抽象？筆者剛學程式語言的時候，也一竅不通。直到學`JS`才真的搞懂布林（`Boolean`）。對筆者而言，只要理解（翻譯）為中文即可，布林（`Boolean`）就是在檢查<u>「符不符合？」</u>（某個條件），或是更白話文 - 「有沒有？」，「符合」的話即是`true`，「不符合」即是`false`。

**🖼️ 圖解**

我們以車況為例：

![](https://i.imgur.com/NO4PLmk.png)


### 🏁 Challenge 

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



## [Add message variable](https://youtu.be/jS4aFq5-91M?t=6896)

### 🏁 Challenge

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

### 🏁 Challenge (綜合實作題)

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

### 🏁 Challenge

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

### 🏁 Challenge 

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



### 📝 **延伸 - `document.querySelector`**

透過`document.querySelector("{#ID名稱/.Class名稱}");`來回傳（嵌入）到document（HTML）,選到的第一個`ID名稱`或`Class名稱`。

**🌰 例子：**

```js
var el = document.querySelector(".myclass"); // el 變數的值為回傳 document 選到的第一個 "`myclass`" class
```


>[MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/querySelector)



## [Display cards](https://youtu.be/jS4aFq5-91M?t=8377)

### 🏁 Challenge 

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

### 🏁 Challenge 

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

### 🏁 Challenge 

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


### 🏁 Challenge 

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

⭐ 這個單元資訊量有點大，我們透過(圖解）筆記來慢慢解析此語法。

**先看語法架構：**

```js
var fruits = ["Apple", "Banana"];
```

（來源：[MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array))


### 🖼️ 圖解

![](https://i.imgur.com/PlayUY2.png)



![](https://i.imgur.com/PmBce49.png)



![](https://i.imgur.com/hMNj3kB.png)


**我們再看看程式碼：**

```js
let fruitProducts = [ "watermelons",

						"oranges",
						
						"mangos",
						
						"apples" ]
```


**👩🏻‍💻 筆者碎碎念:** 教學影片中，老師是以Linkedin 個人主頁（Linkedin Profile)網頁上的組件（components)來舉例，但筆者認為以此例子來解釋`JS`陣列，對於初學者而言，反而會複雜`JS`陣列的理解。所以，學習筆記是以水果攤的產品清單來說明`JS`陣列。


### 🏁 Challenge 

1. 創建一個陣列，來列表你的經歷、學歷或技能...等等。
   Create an array that lists your i.e. experience, education, licenses, skills or similar

2. 每個項目必需是字串（strings）
   The items of the array should be strings

[參考答案](#Challenge-參考答案)


> [MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)




## [Array indexes](https://youtu.be/jS4aFq5-91M?t=9580)

### 語法架構：

建立陣列

```js
var fruits = ["Apple", "Banana"];
```



(透過索引indexes）取得陣列項目

```js
var first = fruits[0];
// Apple
```

（來源：[MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array))



### 🖼️ 圖解

 **⚠️ 注意：**`JS` 索引是從0開始。

![](https://i.imgur.com/C339mRs.png)


![](https://i.imgur.com/Nea08Zu.png)

**程式碼：**

```js
let fruitProducts = [ "watermelons",

"oranges",

"mangos",

"apples"]

  

console.log(fruitProducts[0]) // 水果攤的產品清單的第一個項目

console.log(fruitProducts[1]) // 水果攤的產品清單的第二個項目

console.log(fruitProducts[2]) // 水果攤的產品清單的第三個項目

console.log(fruitProducts[3]) // 水果攤的產品清單的第四個項目
```

### 🏁 Challenge 

```js
// Make the following appear in the console:

// Frontend developer at Xeneta

// People counter for Norstat

// CEO at Scrimba

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]
```


[參考答案](#Challenge-參考答案)


> [MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)



### ⚠️ 注意

注意！雖然陣列的索引（indexes），是零為基礎(從 0 開始)。但Array 陣列的物件屬性`length`，`length` 可供設定或回傳該陣列實體中包含的元素個數，而它不是~~以零為基礎(從 0 開始)~~，而是從一開始。

**🌰 例子：**

```js

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

console.log(experience.length) 

// log out 3 而不是 2，因為Array.length是從一開始，不是從零開始

```



### 📝 延伸 - `Array.length`

**先看看MDN WEB DOCS 解說：**`length` 為 `Array` 物件的屬性，可供設定或回傳該陣列實體中包含的元素個數。其值必為一大於零、32 位元、且恆大於該陣列最大索引數的正整數。


**語法架構：**

```js

var fruits = ["Apple", "Banana"];

console.log(fruits.length);

// log out 2

```


### 🖼️ 圖解

`length`就像統計水果攤的產品清單，總共列了幾個項目。

![](https://i.imgur.com/Nea08Zu.png)

水果攤的產品清單總共列**4個項目**


**我們再看看程式碼：**


```js
let fruitProducts = [ "watermelons",

						"oranges",
						
						"mangos",
						
						"apples" ]
						

console.log(fruitProducts.length)

// log out 4 水果攤的產品清單總共列4項目
```



>[MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)




### 📝 延伸 - 陣列的方法 - `Array Methods`


![](https://i.imgur.com/GLRBKfk.jpg)

（[圖片來源](https://twitter.com/davidm_ml/status/1680489987396059138/photo/1))



>[MDN WEB DOCS | | 所有陣列的方法 - `Array Methods`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#%E6%96%B9%E6%B3%95)



## [Arrays with multiple data types](https://youtu.be/jS4aFq5-91M?t=9831)


### 陣列包含多種資料型態

陣列裡，除了字串（string)外，也可包含數字（number)、布林(boolean)...等等。

#### **🖼️ 圖解**

我們除了在陣列列上水果攤的產品項目外，我們還可以紀錄產品數量（number 資料型態）、是否有促銷活動（boolean 資料型態）。

![](https://i.imgur.com/OVstaCS.png)



**程式碼：**


```js
let fruitProducts = [ "watermelons", 1 ,true,

"oranges", 3 ,true,

"mangos", 8 , false,

"apples", 12 , true ]


console.log(fruitProducts.length) // log out 12 水果攤的產品清單總共列12項目
```


### 🏁 Challenge


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


### 🏁 Challenge

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


### 🏁 Challenge

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




## [Counting - Loops](https://youtu.be/jS4aFq5-91M?t=10631)

⭐ 這個單元資訊量有點大，我們透過(圖解）筆記來慢慢解析此語法。

**先看語法架構：**

```js
for ([initialExpression /* START 初始化表達式 */]; [condition /* Finish */]; [incrementExpression /* STEP SIZE */ ]) statement;
```


（來源：[MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/for))


### 🖼️ 圖解

**🐶 假設你是一位訓犬師，你訓練狗狗跳柵欄，而`JS`的`loop`則像是你對狗狗下的指令**

🌰 例子 1：請狗狗從第一個柵欄開始，一次跳一個柵欄，到第六個柵欄結束。

![](https://i.imgur.com/n66m5kO.png)


原始碼：


```js
for (let dog = 1; dog < 7; dog += 1){

console.log(dog) // 1 2 3 4 5 6

}
```


![](https://i.imgur.com/oxRQlSk.png)





🌰 例子 2：請狗狗從第二個柵欄開始，一次跳一個柵欄，到第六個柵欄結束。

![](https://i.imgur.com/kz1yVcK.png)


原始碼：


```js
for (let dog = 2; dog < 7; dog += 1){

console.log(dog) // 2 3 4 5 6

}
```


![](https://i.imgur.com/cUGKeha.png)






🌰 例子 3：請狗狗從第六個柵欄開始折返，一次跳一個柵欄，到第一個柵欄結束。

![](https://i.imgur.com/yb41M2w.png)


原始碼：

```js
for (let dog = 6; dog > 0; dog -= 1){

console.log(dog) // 6 5 4 3 2 1

}
```

![](https://i.imgur.com/OEwX99U.png)




🌰 例子 4：請狗狗從第六個柵欄開始折返，一次跳三個柵欄，到第一個柵欄結束。

![](https://i.imgur.com/tSVme3z.png)


原始碼：


```js
for (let dog = 6; dog > 0; dog -= 3){

console.log(dog) // 6 3

}
```


![](https://i.imgur.com/LDNN9CI.png)





🌰 例子 5：請狗狗從第五個柵欄開始折返，一次跳一個柵欄，到第二個柵欄結束。

![](https://i.imgur.com/c63nSz5.png)


原始碼：

```js
for (let dog = 5; dog > 1; dog -= 1){

console.log(dog) // 5 4 3 2 1

}
```


![](https://i.imgur.com/VIcs2ul.png)



### 🏁 [Challenge](https://youtu.be/jS4aFq5-91M?t=10630)


⭐ 嘗試創建你的第一個 `JS loop` 吧！



```js
// Create a for loop that counts from 10 to 100 in steps of 10

// Use console.log to log out the numbers
```


[參考答案](#Challenge-參考答案)


[MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/for)



## [For loops & arrays](https://youtu.be/jS4aFq5-91M?t=10837)


⭐ `JS loop`和`JS Array` 如何結合應用呢？這個單元資訊量有點大，我們一樣透過(圖解）筆記來慢慢解析此語法。




**先看語法架構 (🌰 例子）：**


```js
let messages = [

"Hey, how's it going?",

"I'm great, thank you! How about you?",

"All good. Been working on my portfolio lately.",

"Same here!",

"Great to hear",

"🙌"

]
for (let i = 0; i < messages.length; i += 1) {

console.log(messages[i])

/* log out

Hey, how's it going?

I'm great, thank you! How about you?

All good. Been working on my portfolio lately.

Same here!

Great to hear

🙌

*/
}
```





### 🖼️ 圖解

**🤵🏻‍♀ 假設你是一位服務生 :**


`JS Loop`就像餐廳裡的桌號。


![](https://i.imgur.com/yPtYGBo.png)



`JS Array`陣列裡的字串`String`就像客人點的餐點。


![](https://i.imgur.com/KvvXHE4.png)


服務員開始收集客人點的餐點。


![](https://i.imgur.com/pkRtf8M.png)


接著服務員把小抄給廚師，但這個小抄似乎不好閱讀...


![](https://i.imgur.com/aUchR5V.png)


如何透過`JS`來讓將小抄變成好閱讀的清單呢？


![](https://i.imgur.com/zUKWYgu.png)


你可能會想透過[Array indexes](#Array-indexes)來解決，但重複寫一樣的程式碼，是程式設計師最忌諱的。


```js
console.log(order[0])

console.log(order[1])

console.log(order[3])

console.log(order[4])
```


而且如果有客人加點餐點，那怎麼辦？


```js
let order = [ "Sprite",

"juice",

"black tea",

"sorbet",

"Cola",

"New order"]

  

console.log(order[0])

console.log(order[1])

console.log(order[3])

console.log(order[4])
```


![](https://i.imgur.com/4axUdbV.png)


>這樣的寫法等於陣列(Array)每次有新的物件（Object)時，就必須在`console.log(order[indexes])`這段碼才能執行。我們寫程式就是為了讓電腦（計算機）可以自動幫我們完成事情，所以我們當然要寫可讓它自動幫我們完成事情的程式碼。



所以，這時我們必須使用`loop`來解決。


![](https://i.imgur.com/r6UlP8M.png)


但這段碼還是會有問題， `i <= 5 `代表說清單只紀錄到第五桌的訂單。所以我們需要使用到陣列(Array)的物件屬性[`Array.length`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/length)來計算。


![](https://i.imgur.com/ooOPoi3.png)


這樣就完成了！


![](https://i.imgur.com/zUKWYgu.png)




## [First array-based for loop](https://youtu.be/jS4aFq5-91M?t=11063)


### 🏁 Challenge


⭐ 嘗試創建第一個`JS`  `array-based for loop`吧！


```js
let cards = [7, 3, 9]


// Create a for loop that logs out all the cards in the array


// Use cards.length to specify how long the loop should run
```


[參考答案](#Challenge-參考答案)



### 📝 延伸 - 遞增運算子 `++`

`cards ++` 等於`cards += 1`。之前我們有學到[加法赋值（`+=`）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition_assignment)，這一類運算子符號，讓我們的程式碼可以更乾淨、整潔。


>[MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Increment)







## [For loops, arrays, & DOM](https://youtu.be/jS4aFq5-91M?t=11155)



### 🏁 Challenge


⭐ 嘗試創建`JS`  `array-based for loop` 結合 [`The DOM`](https://tinyurl.com/2cgr5545) 吧！


```js
let sentence = ["Hello ", "my ", "name ", "is ", "Per"]


let greetingEl = document.getElementById("greeting-el")

  


// Render the sentence in the greetingEl paragraph using a for loop and .textContent
```



[參考答案](#Challenge-參考答案)






## [Use loop to render cards](https://youtu.be/jS4aFq5-91M?t=11335)



### 🏁 Challenge


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


我們透過`return`來回傳指定變數的數值。


🌰 **例子**

```js
let player1Time = 102

let player2Time = 107

  

function getFastestRaceTime() {

if (player1Time < player2Time) { // 如果 player1Time變數的值小於player2Time變數的值

return player1Time // 則回傳player1Time變數的值

} else if (player2Time < player1Time) { // 如果 player2Time變數的值小於player2Time變數的值

return player2Time // 則回傳player2Time變數的值

} else { // 如果都不符和上述的條件

return player1Time // 則回傳player1Time變數的值

}

}
```


>[MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/return)




### 🏁 Challenge


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



[參考答案](#Challenge-參考答案)




## [Use function to set card values](https://youtu.be/jS4aFq5-91M?t=11874)


### 🏁 Challenge ([上個單元](#Returning-values)實作挑戰題)


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








## [Generating random numbers with Math.random()](https://youtu.be/jS4aFq5-91M?t=12066)


產生隨機數字，這個功能是常常使用的。像是我們要開發的撲克牌遊戲、骰子遊戲、蘋果手機上有名的手遊 - Crossy Road...等等。在 `JS` 中，我們使用 `Math.random()`來產生隨機數字。


**先看語法架構：**


```js
Math.random() * // Max 取得要產生隨機數字的最大範圍
```


**🌰 例子 :**


```js
let randomNumber = Math.random() * 3

  

console.log(randomNumber) // 產生隨機數字的範圍為 0 ～ 2.9999999...
```


```js
let randomNumber = Math.random()// 產生隨機數字的範圍為 0 ～ 0.9999999...


console.log(randomNumber) // log out 0.14994122735300763
```



>[MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)




## [Math.random() * 6](https://youtu.be/jS4aFq5-91M?t=12324)


### 🏁 Challenge  ([上個單元](#Generating-random-numbers-with-Math.random())觀念挑戰題)



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






## [Flooring number with Math.floor()](https://youtu.be/jS4aFq5-91M?t=12430)


我們使用`Math.floor()`，來將帶有小數的數字（正數），轉化為整數。



**🌰 例子 :**


```js
let flooredNumber = Math.floor(3.45632)

  

console.log(flooredNumber) // log out 3
```



如果是負數的話：


```js
let flooredNumber = Math.floor(-3.45632)

  

console.log(flooredNumber) // log out 4
```



>[MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)





### [Methods on object (Object內的Function)]()


我們也可以在`Object`中，創建函式`function`為`Object`的`value`。


🌰 [W3school](https://www.w3schools.com/js/js_object_methods.asp) 例子：


```html
<h1>The JavaScript <i>this</i> Keyword</h1>
<p>In this example, <b>this</b> refers to the <b>person</b> object.</p>
<p>Because <b>fullName</b> is a method of the person object.</p>

<p id="demo"></p>

<script>
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() { // 創建函式function為fullName(key)的value
    return this.firstName + " " + this.lastName; 
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
</script>
```




#### 📝 延伸 - `this` keyword in Methods


`this`是`global object`。也就是說，`this`只能調用父層區塊的程式碼。


![](https://i.imgur.com/LRSZQal.png)



我們再以🌰 [W3school](https://www.w3schools.com/js/js_object_methods.asp)的例子，來解釋：


`person`  `object`裡，我們在`fullName`(`key`)中，創建了一個函式（`function`)，就是「子層（function scope)」為`fullName`(`key`)的`value`，而整個`person`  `object`就是「父層 (global scope)」。


![](https://i.imgur.com/4u2qS89.png)



![](https://i.imgur.com/GoYYyx6.png)



>[複習 global/function scope](https://tinyurl.com/2cgr5545)





## [Using Math.random() and Math.floor to create a dice](https://youtu.be/jS4aFq5-91M?t=12518)



### 🏁 Challenge  (`Math.random`和`Math.floor`綜合挑戰題)



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


### 🏁 Challenge (實作挑戰題)


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



### 🏁 Challenge (實作挑戰題)


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


### 🏁 Challenge (實作挑戰題)


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







## [Logical AND operator](https://youtu.be/jS4aFq5-91M?t=13374)


### 🖼️ 圖解



**🛵 假設，我們要創建一個`if...else`陳述句，來檢查小明是否能合法騎車。**



要能合法騎車，小明需滿足以下<u>所有</u>條件：

1. 成年（滿十八歲）
2. 擁有一台摩托車
3. 考到駕照
4. 戴安全帽



![](https://i.imgur.com/6FhfBui.png)



我們這時可以把這些條件用英文來合起來，我們需要使用到`and`這個英文單字。而在`JS`裡，`&&`符號就等於`and`這個英文單字。



![](https://i.imgur.com/kHpJdJS.png)



理解完`&&`符號後，我們把這些條件設定為`if...else`陳述句的條件。



![](https://i.imgur.com/rVfIh82.png)



**程式碼：**



```js
// 小明的條件

let comeOfAge = true

let haveAScooter = true

let haveADrivingLicense = true

let haveAScooterHelmet = true

// 小明滿足所有條件
  


// 檢查小民是否合法騎車

if (comeOfAge === true && haveAScooter === true && haveADrivingLicense === true && haveAScooterHelmet === true)

{

console.log("合法騎車")

}

// log out "合法騎車"
```





如果小明沒有滿足<u>所有</u>條件，則沒辦法合法騎車。


```js
// 小明的條件

  

let comeOfAge = false

let haveAScooter = false

let haveADrivingLicense = false

let haveAScooterHelmet = false

// 小明沒有滿足所有條件
  
  
// 檢查小民是否合法騎車

if (comeOfAge === true && haveAScooter === true && haveADrivingLicense === true && haveAScooterHelmet === true)

{

console.log("合法騎車")

}

else {

console.log("非法騎車")

}
// log out "非法騎車"
```




![](https://i.imgur.com/qnE1eob.png)




```js
// 小明的條件

  

let comeOfAge = true

let haveAScooter = true

let haveADrivingLicense = false // 沒有考到駕照

let haveAScooterHelmet = true
// 小明沒有滿足所有條件
  
  

if (comeOfAge === true && haveAScooter === true && haveADrivingLicense === true && haveAScooterHelmet === true)

{

console.log("合法騎車")

}

else {

console.log("非法騎車")

}
// log out "非法騎車"
```



![](https://i.imgur.com/kwwao7e.png)




### 🗂️ Reference


**🖼️ 圖解**的例子參考來源：[JS之路 Day23 - Logical operators (邏輯運算子) AND、NOT篇](https://ithelp.ithome.com.tw/articles/10305999?sc=iThelpR)




>[MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)


>[MDN WEB DOCS | | Boolean](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Boolean)






## [Write your first logical operator](https://youtu.be/jS4aFq5-91M?t=13600)



### 🏁 Challenge ([上個單元](#Logical-AND-operator)實作挑戰題)



```js
let hasSolvedChallenge = false

let hasHintsLeft = false

  

// Create an if statement that checks that both variables are false.

// If so, run the showSolution() function

  

function showSolution() {

console.log("Showing the solution....")

}
```





## [Logical OR operator](https://youtu.be/jS4aFq5-91M?t=13725)



### 🖼️ 圖解



**📝 小明在考試時，作弊。假設，我們要創建一個`if...else`陳述句，來檢查小明是否有做老師指派的<u>任</u>一項事務，才能下課。**



![](https://i.imgur.com/Lz6OtTP.png)



做老師指派的<u>任</u>一項事務，包含：

- 🏃🏻 跑操場
- 🗑️ 處理公共垃圾



![](https://i.imgur.com/Cz8WzHJ.png)




只要做老師指派的<u>任</u>一項事務，就可以下課了！




```js
// 小明的條件

  

let runningLaps = false // 沒有跑操場

let cleaningGarbage = true // 有整理垃圾

  
  
  

// 檢查小明是否有做老師指派的任一項事務

  

if (runningLaps === true || cleaningGarbage === true) {

console.log("放學！")

}
// log out "放學！"
```






![](https://i.imgur.com/sEcUzA1.png)






```js
// 小明的條件

  

let runningLaps = true // 有跑操場

let cleaningGarbage = false // 沒有整理垃圾

  
  
  

// 檢查小明是否有做老師指派的任一項事務

  

if (runningLaps === true || cleaningGarbage === true) {

console.log("放學！")

}
// log out "放學！"
```





![](https://i.imgur.com/yk66SBY.png)



如果小明有跑操場又整理垃圾，當然可以下課囉！（但不可能吧🤣）



```js
// 小明的條件


let runningLaps = true // 有跑操場

let cleaningGarbage = true // 又整理垃圾

  
  
  

// 檢查小明是否有做老師指派的任一項事務


if (runningLaps === true || cleaningGarbage === true) {

console.log("放學！")

} 
// log out "放學！"
```




![](https://i.imgur.com/tBNAIxM.png)



什麼都沒做，當然不能放學囉～



```js
// 小明的條件

  

let runningLaps = false // 沒有跑操場

let cleaningGarbage = false // 也沒有整理垃圾

  
  
  

// 檢查小明是否有做老師指派的任一項事務

  

if (runningLaps === true || cleaningGarbage === true) {

console.log("放學！")

} else {

console.log("不能放學！")

}

// log out  "不能放學！"
```




![](https://i.imgur.com/2xnimj2.png)





>[MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)


>[MDN WEB DOCS | | Boolean](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Boolean)






## [Only trigger newCard() if you're allowed to](https://youtu.be/jS4aFq5-91M?t=13912)



### 🏁 Challenge ([上個單元](#Logical-OR-operator)實作挑戰題)


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




## [Logical NOT operator (筆者自行補充)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)




### 🖼️ 圖解




**📝 假設，我們要創建一個`if...else`陳述句，來檢查學生們是否有分數太低或作弊而無法通過考試。(這邊以[Logical OR operator](#Logical-OR-operator) `||` 來舉例）**





![](https://i.imgur.com/sWR1Puw.png)



在`JS`中，沒有- `NOT`等於驚嘆號 - `!`。



![](https://i.imgur.com/Qo2vPCh.png)



只要學生<u>沒有</u>「分數太低」<u>或</u>「作弊」，就可以「考試通過✅」。



```js
// 學生的條件

let cheating = false // 沒有作弊

let failTheTest = false // 沒有分數太低

  
// 檢查學生們是否有分數太低或作弊而無法通過考試

if (! (cheating === true || failTheTest === true)) {

console.log("考試通過 ✅")

}
// log out "考試通過 ✅"
```




![](https://i.imgur.com/ZXvIZwO.png)




但如果學生「作弊」，就算「分數沒有太低」，還是「考試不通過」。




```js
// 學生的條件

let cheating = true // 有作弊

let failTheTest = false // 沒有分數太低



// 檢查學生們是否有分數太低或作弊而無法通過考試

if (! (cheating === true || failTheTest === true)) {

console.log("考試通過 ✅")

} else {

console.log("考試不通過")

}
// log out "考試不通過"
```




![](https://i.imgur.com/Ng01Jmk.png)





相反地，如果學生「分數太低」，就算「沒有作弊」，還是一樣「考試不通過」。





```js
// 學生的條件

let cheating = false // 沒有作弊

let failTheTest = true // 分數太低



// 檢查學生們是否有分數太低或作弊而無法通過考試

if (! (cheating === true || failTheTest === true)) {

console.log("考試通過 ✅")

} else {

console.log("考試不通過")

}
// log out "考試不通過"
```





![](https://i.imgur.com/ZPntHlJ.png)




當然，如果學生「分數太低」<u>又</u>「作弊」，考試一定不通過囉～




```js
// 學生的條件

let cheating = true // 有作弊

let failTheTest = true // 分數太低



// 檢查學生們是否有分數太低或作弊而無法通過考試

if (! (cheating === true || failTheTest === true)) {

console.log("考試通過 ✅")

} else {

console.log("考試不通過")

}
// log out "考試不通過"
```





![](https://i.imgur.com/Vu1NnMk.png)




>[MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)


>[MDN WEB DOCS | | Boolean](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Boolean)







## [Object](https://youtu.be/jS4aFq5-91M?t=14282)



我們可以將`JS`的`Object`想像成一個表格：



![](https://i.imgur.com/EUqRd5I.png)




在`JS Object` 中，都會有一組對應的名稱（`key`)和值(`value`)，就像表格的每一個欄位的資料對應到的名稱（`key`)。




```js
let course = { 

title : "course 1" , // title為名稱（key)

lessons : 16,

creator:"Emma",

length: 63,

level:2,

isFree: true, // Boolean 布林 資料型態

tags: ["html","css"] //  Object裡可有Array 資料型態

}
```




### 如何存取物件（Object)？


我們可以透過`.`和`[" "]`存取`Object`。


**程式碼架構：**


`{物件名稱}.{key名稱} = {這個key的value}`

`{物件名稱}["{key名稱}"}] = {這個key的value}`



```js
let course =

{ title : "course 1" ,

lessons : 16,

creator:"Emma",

length: 63,

level:2,

isFree: true,

tags: ["html","css"]}

  
// 存取物件（Object)

console.log(course.creator) // or
console.log(course["creator"])


// log out

// Emma
```



>[MDN WEB DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object)



### 📝 延伸 - 如何創建物件（Object)？


和存取物件（Object)語法一樣，我們可以透過`.`和`[" "]`存取`Object`。


**程式碼架構：**

`{物件名稱}.{key名稱} = {這個key的value}`

`{物件名稱}["{key名稱}"}] = {這個key的value}`


```js
let course2 =

  

{ title : "course 2" ,

  

lessons : 20,

  

creator:"Jack",

  

length: 120,

  

level:1,

  

isFree: true,

  

tags: ["javascript","html","css"]}

  
  
// 創建 "rating" key 到 course2 物件

course2.rating = 5 // or

course2["rating"] = 5

  

console.log(course2)

// log out 

/*{

title: 'course 2',

lessons: 20,

creator: 'Jack',

length: 120,

level: 1,

isFree: true,

tags: [ 'javascript', 'html', 'css' ],

rating: 5

}*/
```


**🗂️ Reference**

>[[第四週] JavaScript —  陣列 Array 與 物件 object](https://tinyurl.com/2yrdxapu)



### 📝 延伸 - 如何刪除物件（Object)？



和創建物件（Object)語法類似，只要在前面加上`delete`。


**程式碼架構：**

`delete {物件名稱}.{key名稱} = {這個key的value}`

`delete {物件名稱}["{key名稱}"}] = {這個key的value}`



```js
  

let course3 =

  

{ title : "course 3" ,

  

lessons : 10,

  

creator:"Jenny",

  

length: 34,

  

level:3,

  

isFree: false,

  

tags: ["react.js","javascript"]}

  
  
  
// 刪除 course3 物件 的 "title" key


delete course3.title //or

delete course3["title"]

  

console.log(course3)

// log out

/*
{

lessons: 10,

creator: 'Jenny',

length: 34,

level: 3,

isFree: false,

tags: [ 'react.js', 'javascript' ]

}
*/
```


**🗂️ Reference**

>[[第四週] JavaScript —  陣列 Array 與 物件 object](https://tinyurl.com/2yrdxapu)


### 📝 延伸 - `new Object()`


我們也可以先創一個「空的」物件（object)後，在以`創建物件（Object)`方式，來添加物件（object)的`key`及`value`。


首先，先建立「空的」物件（object)，記得`Object()`的`O`是<u>大寫</u>喔～

```js
let mealA = new Object()
```

如果我們這時去`console.log`它，它則會執行出`Reference error`



接著，我們就可以創建`mealA`裡的`key`及`value`。


```js
mealA.drinking = "Coke"

  

mealA.dish = "Hamburger"

  

mealA.sideDish = "French fries"

  

mealAPrice = 120

  

mealA.rating = 5
```


這樣創建玩我們的`mealA`物件了！


```js
let mealA = new Object()

  

mealA.drinking = "Coke"

  

mealA.dish = "Hamburger"

  

mealA.sideDish = "French fries"

  

mealAPrice = 120

  

mealA.rating = 5

  

console.log(mealA)
```



**🗂️ Reference**

>[[第四週] JavaScript —  陣列 Array 與 物件 object](https://tinyurl.com/2yrdxapu)




#### 👩🏻‍💻 筆者碎碎念


歡迎參考 ES6 語法 如何修改 Object


>[ES6 Destructuring assignment 解構賦值 筆記](https://tinyurl.com/23tqdb2m)





## [create first object](https://youtu.be/jS4aFq5-91M?t=14567)


### 🏁 Challenge ([上個單元](#Object)實作挑戰題)


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







## [Recap](https://youtu.be/jS4aFq5-91M?t=15050)


我們來回顧，我們目前學了什麼JS:


- [Javascript 資料型態](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Data_structures)
   - [array](#Arrays-intro)
   - [object](#Object)
   - [boolean](#Practice-boolean-conditions)
- [if else statements](#If...else conditionals)
- [comparison operators](#If...else conditionals)
- [logical operators](#Write-your-first-logical-operator)
- [for loops](#Counting-Loops)
- [The Math object](#Generating-random-numbers-with-Math.random())
- [return statements](#Returning-values)



恭喜🎉 你已經學會以上JS，並製作出你的第一個JS應用程式 -Javascript 新手 教學 - [Build Blackjack Game](https://codepen.io/michellechang2006/pen/jOQjpyV)！


⭐ 接下來的單元，會有更多題目讓你練習。




 
# Recap Challenge



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




# [Solo Project 學以致用](https://scrimba.com/learn/learnjavascript/solo-project-pro-password-generator-cR9B46Sg)



###  [樂透 小遊戲 Lottery Game](https://michellechang2006.github.io/lottery-game/)




![](https://i.imgur.com/GSsmJQv.gif)





### ✏️ 筆記


#### [boolean](#Practice-boolean-conditions) / [if else statements](#If...else conditionals)



使用 [if else statements](#If...else conditionals)，來檢查對獎的特別號碼 - `randomNumbersSpec` 變數，其值是否和玩家的特別號碼 - `myNumbersSpec` 變數是否相等。如相等，則`specialNumbers`  的值為 `true`( [boolean](#Practice-boolean-conditions)) 及更改特別號碼HTML 元素  (`numberSpecEl`及`randomSpecEl`) 的 CSS。如不相等，則`specialNumbers`  的值為 `false` ( [boolean](#Practice-boolean-conditions)) 。



```js
if (randomNumbersSpec === myNumbersSpec) {

specialNumbers = true

numberSpecEl.style = " background: radial-gradient(circle at 65% 15%, white 1px, #FF7070 3%, red 60%, #FF7070 100%);"

randomSpecEl.style = " background: radial-gradient(circle at 65% 15%, white 1px, #FF7070 3%, red 60%, #FF7070 100%);"

} else {

specialNumbers = false

}
```






#### [for loops](#Counting-Loops) / [comparison operators](#If...else conditionals) / [array](#Arrays-intro)


目的是將選擇器 `.random1` 到 `.random6` 所選取的 DOM 元素全部加入到 `randomEl` 陣列中。


宣告了一個名為 `randomEl` 空的陣列 - [array](#Arrays-intro)  
`let randomEl = [];`


創建了[for loops](#Counting-Loops)，在每次迴圈中，程式碼都會將選擇器 `.random${i}` 所選取的 DOM 元素加入到 `randomEl` 陣列中。這裡的 `${i}` 是一種稱為[模板字串]()的語法，會被替換為 `i` 的值。所以，如果 `i = 1`，那麼選擇器就會變成 `.random1`。



```js
let randomEl = [];

  

// DOM

for (let i = 1; i <= 6; i++) {

randomEl.push(document.querySelector(`.random${i}`));

}
```




#### [The Math object](#Generating-random-numbers-with-Math.random()) / [return statements](#Returning-values) / [logical operators](#Write-your-first-logical-operator) / - [return statements](#Returning-values)



在 `getRandomNumbers(length, min, max)` 建立了一個空的陣列 -  [array](#Arrays-intro)  ，用於存儲生成的隨機數字。


使用 `Math.floor` 及 `Math.random()` - [The Math object](#Generating-random-numbers-with-Math.random()) 生成了一個在 `min` 和 `max` 之間的隨機整數。


使用[NOT logical operator - ` ! `](#Logical-NOT-operator-(筆者自行補充)) 在if 條件語句，只有當 `numbers` 陣列中不包含當前生成的隨機數字時，才會執行大括號內的程式碼。


使用[Array.prototype.push()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/push)將當前生成的隨機數字加入到 `numbers` 陣列中。


最後使用 [return statements](#Returning-values) ，使用當迴圈結束後（即 `numbers` 陣列的長度等於 `length`），函數會返回 `numbers` 。




```js
function getRandomNumbers(length /* 產生多少的隨機數字 */, min /* 產生隨機數字範圍（最小） */, max /* 產生隨機數字範圍（最大）*/) {

let numbers = [];

while (numbers.length < length) {

let num = Math.floor(Math.random() * (max - min + 1)) + min; 

if (! /* Not logical operators */ numbers.includes(num)) {

numbers.push(num);

}

}

return numbers;

}

  

let randomNumbers = getRandomNumbers(6, 1, 49);
```



### [成果](https://michellechang2006.github.io/lottery-game/)




![](https://i.imgur.com/GSsmJQv.gif)



>[原始碼](https://github.com/michellechang2006/lottery-game)







###  📝 延伸 - ES6 modules scope


（圖A）

![](https://i.imgur.com/w9fA09a.png)



當我們使用ES6 Modules時，必須徹底了解作用域 (Scope)外，我們寫程式時，必須按照圖A，有上往下的順序來寫JS，否則某些區塊的程式碼無法執行。


```js
// gobal scope
import { randomNumbers } from "./random_numbers.js"

import { myNumbers, } from "./my_numbers.js";

let randomBtn = document.querySelector('#start-random');

randomBtn.addEventListener('click', StartRandom);




// function scope

function random() {

randomNumbersSpec = Math.floor(Math.random() * 49) + 1

randomSpecEl.textContent = randomNumbersSpec

let randomEl = [];


for (let i = 1; i <= 6; i++) {

randomEl.push(document.querySelector(`.random${i}`));

}

for (let i = 0; i <= 6; i++) {

randomEl[i].textContent = randomNumbers[i]

}

}


function StartRandom() {

startRandomBtn.style = "display:none";

resultBtn.style = "display:inline";

let randomEl = [];

for (let i = 0; i < randomNumbers.length; i++) {

randomNumbers[i] = Math.floor(Math.random() * 49) + 1;

}

random()

}
```




>[中文 詳解 JS 各個 Scope](https://medium.com/itsems-frontend/javascript-scope-and-scope-chain-ca17a1068c96)


>[MDN | | Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)



###  📝 延伸 - Other Array Methods `indexOf()`


**先看語法結構：**

```js
arr.indexOf(searchElement[, fromIndex])
```


#### 🖼️ 圖解

![](https://i.imgur.com/IdVdGq6.png)



**Search Element :**


![](https://i.imgur.com/wNs3N8X.png)




![](https://i.imgur.com/okvGb6U.png)




![](https://i.imgur.com/BnD0W8S.png)




<u>程式碼：</u>


```js
let fruitProducts = [ "watermelons",

"oranges", 

"mangos", 

"apples"] 

  

console.log(fruitProducts.indexOf("oranges")) /// output: 1

console.log(fruitProducts.indexOf("mangos")) /// output: 2

console.log(fruitProducts.indexOf("apples")) /// output: 3
```



**Search Element  `-1` 索引值?**



![](https://i.imgur.com/wNs3N8X.png)


那麽假如我們要搜尋一個在陣列（Array)裡，沒有的元素，結果會是？


![](https://i.imgur.com/UFMi1l6.png)


搜尋一個在陣列（Array)裡，沒有的元素，將會回傳`-1`。


<u>程式碼：</u>



```js
let fruitProducts = [ "watermelons",

"oranges",

"mangos",

"apples"]

  

console.log(fruitProducts.indexOf("peachs")) /// output: -1
```




**fromIndex - 整數 索引值**



🍊 假如我們希望知道，這個水果攤的產品清單 - `Array`中，第二顆橘子的索引值為何。


![](https://i.imgur.com/CbCwX7j.png)



語法像這樣，我們要從這個`Array`的 `2 index`來找：



![](https://i.imgur.com/KKHhem0.png)



這個水果攤的產品清單 - `Array`中，第二顆橘子的索引值為 `3`，回傳 `3`



<u>程式碼：</u>



```js
let fruitProducts = [ "watermelons",

"oranges",

"mangos",

"oranges"]

  
  

console.log(fruitProducts.indexOf("oranges",2)) // output:3
```




**fromIndex - 負數 索引值**


![](https://i.imgur.com/4LK16jk.png)



我們也可以使用複數的索引值來搜尋。請注意，「第二顆橘子」的索引值回傳是整數 `3`，~~不是負數~~。



![](https://i.imgur.com/pHXFzVf.png)



**fromIndex - `-1` 索引值?**

那麽假如我們要搜尋一個在這個陣列（Array)裡第二個橘子，但這個陣列（Array)並沒有這個元素，結果會是？

![](https://i.imgur.com/ZzmR4h0.png)


一樣也是回傳 `-1` 索引值。


![](https://i.imgur.com/xToRjMO.png)


![](https://i.imgur.com/xc24zNx.png)




>[第11屆 iThome 鐵人賽 文章 | | JS 找出元素索引值的陣列 Array 方法 indexOf()](https://ithelp.ithome.com.tw/articles/10227363)


>[MDN | | Array.prototype.indexOf() ](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)





###  📝 延伸 - Other Array Methods `includes()`


**先看語法結構：**


```js
arr.includes(searchElement[, fromIndex])
```



我們使用`includes()`來搜尋看看是否有某個元素在`Array`裡。



#### 🖼️ 圖解


**searchElement - `true`**

![](https://i.imgur.com/nrZ42Rx.png)



如果有，則回傳`true`。



![](https://i.imgur.com/zOYVUIR.png)




<u>程式碼：</u>




```js
let fruitProducts = [ "watermelons",

"apples",

"mangos",

"oranges"]

  
  

console.log(fruitProducts.includes("mangos")) // output: true
```



**searchElement - `false`**



![](https://i.imgur.com/8zBwMbo.png)



假如，沒有，則回傳`false`



![](https://i.imgur.com/gS6pMgf.png)




<u>程式碼：</u>



```js
let fruitProducts = [ "watermelons",

"peaches",

"mangos",

"apples"]

  
  

console.log(fruitProducts.includes("oranges")) // output:false
```




**fromIndex - `true`**

我們也可以像`indexOf()`一樣，指定搜尋特定的索引值。


![](https://i.imgur.com/kvmQu3K.png)



在這個`Array`中，索引值`1`的確有🍊，所以回傳`true`。



![](https://i.imgur.com/TRz6ZNC.png)



<u>程式碼：</u>



```js
let fruitProducts = [ "watermelons",

"oranges",

"mangos",

"apples"]

  
  

console.log(fruitProducts.includes("oranges",1)) // output: true
```






**fromIndex - `false`**


![](https://i.imgur.com/1qzEN3z.png)



在這個`Array`中，🥭 索引值是 `2` 不是 `3`，所以回傳`false`。



![](https://i.imgur.com/yKBk7be.png)



<u>程式碼：</u>



```js
let fruitProducts = [ "watermelons",

"oranges",

"mangos",

"apples"]

  
  

console.log(fruitProducts.includes("mangos",3)) // output:false
```




>[MDN | | Array.prototype.includes()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)






### 📝 延伸 - Switch 陳述句




**先看語法結構：**


```js
switch (expression) {
  case value1:
        //當 expression 的值符合 value1
        //要執行的陳述句
    [break;]
  case value2:
        //當 expression 的值符合 value2
        //要執行的陳述句
    [break;]
  ...
  case valueN:
        //當 expression 的值符合 valueN
        //要執行的陳述句
    [break;]
  [default:
        //當 expression 的值都不符合上述條件
        //要執行的陳述句
    [break;]]
}

```




#### 🖼️ 圖解


還記得這張圖嗎？


![](https://i.imgur.com/krsr2SU.png)



我們先來複習一下，[`If...else conditionals`](#If...else conditionals) 語法：



![](https://i.imgur.com/d2pD5mx.png)




```js
let traffic = "有塞車"


if (traffic === "有塞車") {

console.log("左轉")

}

else if ( traffic === "沒有塞車") {

console.log("直走")

}

else {

console.log("右轉")

}

  

// output: 左轉
```



這是switch語法，是不是看起來更乾淨、清楚呢？ 

⚠️ 注意：每當一個要執行的陳述句結束時，記得要上 `break`，沒有使用 `break` 的話，符合該條件（`value`)後面的所有 statement（不論有沒有符合條件）也都會被執行到。



![](https://i.imgur.com/VBLb3rB.png)





```js
let traffic = "沒有塞車"


switch (traffic) {


case "有塞車": // if  (traffic = "有塞車") {

console.log("左轉")

break;

case "沒有塞車": // if  (traffic = "沒有塞車") {

console.log("直走")

break;

case "想休息": // if (traffic = "想休息") {

console.log("右轉")

break;

}  // output: 左轉
```


#### 🗂️ Reference


>[JS Switch Case 的使用](https://pjchender.dev/javascript/js-switch-case/)


**Solo Project 應用 程式碼：**


```js
switch (count) {

case 6:

window.alert("恭喜您獲得頭獎！💰💰💰")

break

case (5 && specialNumbers === true):

window.alert("恭喜您獲得貳獎！💰")

break

case 5:

window.alert("恭喜您獲得參獎！💵")

break

  

case (4 && specialNumbers === true):

window.alert("恭喜您獲得肆獎！💵")

break

case 4:

window.alert("祝您平平安安！🧧")

break

case 3:

window.alert("恭喜您獲得普獎! NT$400 🧧")

break

case (3 && specialNumbers === true):

window.alert("恭喜您獲得伍獎！ NT$2,000 💵")

break

case 2:

window.alert("祝您心想事成！🧧")

break

case (2 && specialNumbers === true):

window.alert("恭喜您獲得柒獎！ NT$400 🧧")

break

  

case 1:

window.alert("祝您心想事成！🧧")

break

case 0:

window.alert("祝您平平安安！🧧")

break

}

  

}
```





>[MDN | | Switch](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/switch)







### 📝 延伸 - 樣板字面值 (樣板字串） Template literals


樣板字串，個人認為沒有太多複雜的「觀念」，但語法蠻複雜就是了，所以就不特別紀錄。推這個文章👉🏻[初學者跪著學JavaScript Day6 :template literals和 tagged template literals傻傻分不清楚](https://ithelp.ithome.com.tw/m/articles/10269028)



**Solo Project 應用 程式碼：**



```js
let randomEl = [];

let myNumbersEl = [];

  
  

for (let i = 1; i <= 6; i++) {

randomEl.push(document.querySelector(`.random${i}`));

}

for (let i = 1; i <= 6; i++) {

myNumbersEl.push(document.querySelector(`.number${i}`));

}
```



>[MDN | | 樣板字面值 (樣板字串） Template literals](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals)

>[ 鐵人賽：JavaScript Template String 樣板字串](https://www.casper.tw/javascript/2017/12/22/javascript-template-string/)





### 📝 延伸 -  `Array.prototype.forEach()`



我們在學`for loop`時，有學到這個應用：



```js
let fruitProducts = [ "watermelons",

"oranges",

"mangos",

"apples"]

  
  

for (let i = 0; i < fruitProducts.length; i++) {

const arr = fruitProducts[i];

console.log(arr)

}
```



而 `forEach()`的寫法是：


```js
fruitProducts.forEach(arr => {

console.log(arr)

});
```





**`forEach()`的優點**


`for loop` 函式作用域 (function scope)，所以當我們使用`var`來宣告 `i` 變數時， `i` 變數則會變成全域(global scope)變數：



```js
for (var i = 0; i < fruitProducts.length; i++) {

const arr = fruitProducts[i];

}

console.log(i) // output: 4
```



而`forEach()`並不需要特別宣告 `i` 這樣的變數，所以可以避免，使用`i` 變數時， `i` 變數則會變成全域(global scope)變數。



```js
fruitProducts.forEach(arr => {

console.log(arr)

});
```




**`forEach()`的缺點**


儘管，`forEach()`語法非常方便、乾淨，但它也是有所限制。比方說， `for loop` 可使用`break`來停止執行迴圈：


```js
let fruitProducts = [ "watermelons",

"oranges",

"mangos",

"apples"]

  
  

for (var i = 0; i < fruitProducts.length; i++) {

const arr = fruitProducts[i];

if (i === 2) { // 如果迴圈到索引值 2

break; // 則停止執行迴圈

}

console.log(arr)

/*

output:

watermelons

oranges

*/

}
```




**Solo Project 應用 程式碼：**


```js
randomNumbers.forEach((value, index) => {

let indexInArray2 = myNumbers.indexOf(value);

console.log("value: " + value)

console.log("indexInArray2 :" + indexInArray2)

console.log("index: " + index)

if (indexInArray2 !== -1) {

console.log(`數字 ${value} 在 randomNumbers 的索引是 ${index}，在 myNumbers 的索引是 ${indexInArray2}`);

randomEl[index].style = "background: radial-gradient(circle at 65% 15%, white 1px, #FF7070 3%, red 60%, #FF7070 100%);"

myNumbersEl[indexInArray2].style = "background: radial-gradient(circle at 65% 15%, white 1px, #FF7070 3%, red 60%, #FF7070 100%);"

}

});
```




#### 🗂️ Reference


>[JS - for 迴圈與 forEach 有什麼不同](https://www.casper.tw/development/2020/10/05/js-for-loop-vs-for-each/)



>[MDN | | Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)





###  📝 延伸 - while 語法


只要符合條件（`true`），則會執行`while`內的程式碼，反之如果沒有符合條件（`false`），停止執行循環內部的 `statement`，並把控制權移交給循環後面的語句。



**語法結構：**


```js
while (condition)
  statement
```



<u>🌰 例子 - 循環：</u>



```js
let a = 0;

let b = 0;

while (a < 5) {

a++;

b += a;

}

console.log(a) // output: 5
```



**Solo Project 應用 程式碼：**



```js
function getMyNumbers(length, min, max) {

let numbers = [];

while (numbers.length < length) { // 當 numbers 陣列 元素的數量並沒有大於6時，...

let num = Math.floor(Math.random() * (max - min + 1)) + min;

if (!numbers.includes(num)) {

numbers.push(num);

}

}

return numbers;

}

  

let myNumbers = getMyNumbers(6, 1, 49);
```




[MDN | | while 語法](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/while)




### 📝    更多的延伸 


**Arrow function expressions**


[JavaScript ES6 Arrow Functions Tutorial](https://youtu.be/h33Srr5J9nY?si=8BE54phwUfMGGV_l)

[鐵人賽：箭頭函式 (Arrow functions)](https://www.casper.tw/javascript/2017/12/21/javascript-es6-arrow-function/)

[MDN | | Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)








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