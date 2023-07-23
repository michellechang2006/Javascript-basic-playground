
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

### [🏁 Recap Challenge](#Recap-Challenge)

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

（來源：[MDN Docs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else))


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

（來源：MDN Docs)

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


> [MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else)

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

>[MDN DOCS | | 比較運算子](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators#%E6%AF%94%E8%BC%83%E9%81%8B%E7%AE%97)


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


>[MDN DOCS | | 相等比較](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Equality_comparisons_and_sameness)

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

> [MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else)

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

> [MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else)


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


>[MDN DOCS | | 相等比較](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Equality_comparisons_and_sameness)

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

>[MDN DOCS | | Boolean](https://developer.mozilla.org/zh-TW/docs/Glossary/Boolean)


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

請在每段程式碼旁，以註解(comments)`//`的方式作答輸出（`console.log`)的布林（`Boolean`）值。

```js
console.log(4 === 3) // 

console.log(5 > 2) //

console.log(12 > 12) //

console.log(3 < 0) //

console.log(3 >= 3) //

console.log(11 <= 11) //

console.log(3 <= 2) //
```


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


>[MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/querySelector)



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

（來源：[MDN Docs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array))

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


> [MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)




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

（來源：[MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array))



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


> [MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)



### ⚠️ 注意

注意！雖然陣列的索引（indexes），是零為基礎(從 0 開始)。但Array 陣列的物件屬性`length`，`length` 可供設定或回傳該陣列實體中包含的元素個數，而它不是~~以零為基礎(從 0 開始)~~，而是從一開始。

**🌰 例子：**

```js

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

console.log(experience.length) 

// log out 3 而不是 2，因為Array.length是從一開始，不是從零開始

```



### 📝 延伸 - `Array.length`

**先看看MDN DOCS 解說：**`length` 為 `Array` 物件的屬性，可供設定或回傳該陣列實體中包含的元素個數。其值必為一大於零、32 位元、且恆大於該陣列最大索引數的正整數。


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



>[MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)




### 📝 延伸 - 陣列的方法 - `Array Methods`


![](https://i.imgur.com/GLRBKfk.jpg)

（[圖片來源](https://twitter.com/davidm_ml/status/1680489987396059138/photo/1))



>[MDN DOCS | | 所有陣列的方法 - `Array Methods`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#%E6%96%B9%E6%B3%95)



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


（來源：[MDN Docs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/for))


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


[MDN Docs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/for)



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


>[MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Increment)







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

cardsEl.textContent = "Cards: "

// Create a for loop that renders out all the cards instead of just two

for (let i = 0; i < cards.length; i++) {

cardsEl.textContent += cards[i] + " ";

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


>[MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/return)




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


### 🏁 Challenge (上個單元[Returning values](#Returning-values)實作挑戰題)


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


**🌰 例子 :**


```js
let randomNumber = Math.random()


console.log(randomNumber) // log out 0.14994122735300763
```



>[MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)



## [Math.random() * 6](https://youtu.be/jS4aFq5-91M?t=12324)






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


```js
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






## [Use function to set card values](https://youtu.be/jS4aFq5-91M?t=11874)


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