
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

（來源：MDN Docs)


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




### [Add to sum when newCard is clicked](https://youtu.be/jS4aFq5-91M?t=8716)





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