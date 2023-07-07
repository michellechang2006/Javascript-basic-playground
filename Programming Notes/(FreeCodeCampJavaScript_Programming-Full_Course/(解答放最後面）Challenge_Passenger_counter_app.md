# 🔗 Section links 

### [✏️ 學習筆記](#學習筆記)

[Create variable](#Create-variable)

[Mathematical operations](#Mathematical-operations)

[Reassigning & incrementing](#Reassigning-&-incrementing)

[Write your first function](#Write-your-first-function)

[Function that logs sum](#Function-that-logs-sum)

[Function that increments](#Function-that-increments)

[Increment on clicks](#Increment-on-clicks)

[Display count / innerText](#Display-count-/-innerText)

[Create save button](#Create-save-button)

[First string variable](#First-string-variable)

[Log greeting to console](#Log-greeting-to-console)

[Render welcome message](#Render-welcome-message)

[Improve the message with string concatenation](#Improve-the-message-with-string-concatenation)

[Use plus equal for count](#Use-plus-equal-for-count)

[Create save feature](#Create-save-feature)

[Set count to 0](#Set-count-to-0)

### [🏁 Recap Challenge](#Recap-Challenge)

[Variables practice](#Variables-practice)

[Concatenate strings](#Concatenate-strings)

[Incrementing & decrementing](#Incrementing-&-decrementing)

[Strings & numbers](#Strings-&-numbers)

[Rendering error message](#Rendering-error-message)

[Calculator challenge](#Calculator-challenge)



# 學習筆記

## [Create variable](https://youtu.be/jS4aFq5-91M?t=462)

1. 創建一個變數宣告為`myAge`，接著為這個變數賦予你的歲數的值
   Create a variable, myAge, and set its Value to your age
   
2. 將`myAge`這個變數顯示在控制台。
   Log the myAge variable to the console

> [MDN Docs](https://developer.mozilla.org/zh-TW/docs/Web/API/console)


## [Mathematical operations](https://youtu.be/jS4aFq5-91M?t=749)

1.  創建兩個宣告（命名為）變數，分別是`myAge`和`humanDogRatio`
  Create two variable, myAge and humanDogRatio

2. 將這兩個變數相乘後，將其計算的值，儲存於`myDogAge`變數中。
   Multiply the two together and store the result in myDogAge

3. 將`myDogAge`這個變數顯示在控制台。
   Log myDogAge to the console
   


## [Reassigning & incrementing](https://youtu.be/jS4aFq5-91M?t=977)

1. 創建一個宣告（命名為）`bonusPoints` 變數，初始設定的值為50。接著，將其值增加到100。
  Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.

2. 將其值增減到25，最後增加到25。
  Decrease it down to 25, and then finally increase it to 70

3. 每個設定變數值的步驟後，將其值（Console. Log ）顯示在控制台。
   Console. Log the value after each step


## [Write your first function](https://youtu.be/jS4aFq5-91M?t=1731)

1. 創建一個函式（函式名稱自行決定）
   Create a function (you decide the name) that Logs out the number 42 to the console
   
2. 調用（callback) 此函式
  Call/ invoke the function


> [MDN Docs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function)


## [Function that logs sum](https://youtu.be/jS4aFq5-91M?t=1775)

這是一個賽車競賽選手的成績。請透過創建一個函式來加總這位賽車競賽選手這場競賽總共花了多少時間。
Create a function that Logs out the sum of all the Lap times

```js
let lap1 = 34

let lap2 = 33

let lap3 = 36
```

>[MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Scope)


## [Function that increments](https://youtu.be/jS4aFq5-91M?t=1946)

1. 創建一個函式(函式名稱自行決定)，將lapsCompleted變數的值，增加為1。
   Create a function that increments the lapsCompleted Leted variable with one

2. 執行（調用 callback) 三次
   Run it three times


```js
let lapsCompleted = 0

// Create a function that increments the lapsCompleted Leted variable with one

// Run it three times

console.log(lapsCompleted)
```


## [Increment on clicks](https://youtu.be/jS4aFq5-91M?t=2063)

1. 創建一個變數為`count`，變數的初始設定為0。
  initialize the count as 0

2. 為`increment`按鈕，創建一個點擊-監聽事件（event listener)
   Listen for clicks on the increment button

3. 透過編寫JS程式碼，讓當按鈕被點擊時，`count`變數的值會增加（+1）。
   increment the count variable when the button is clicked

![](https://i.imgur.com/mpeIjQ8.gif)


## [Display count / innerText](https://youtu.be/jS4aFq5-91M?t=2627)

現在嘗試看看自己寫[Display count](https://youtu.be/jS4aFq5-91M?t=2195)單元的程式碼吧！

```js
// grab the count-el element, store it in a countEl variable

let count = 0

function increment() {

count = count + 1

}

// set countEl's innerText to the count
```



## [Create save button](https://youtu.be/jS4aFq5-91M?t=2670)

1. 創建一個`save()`函式，當它回傳時，將它顯示(log)在控制台（console)。
   Create a function, `save()`, which logs out the count when it's called

2. 在HTML，創建一個`SAVE`按鈕，將它的ID設定為`save-btn`，接著透過程式，當使用者點擊`SAVE`按鈕時，回傳到`save()`函式。
   Create a `SAVE` button. Set the id to "`save-btn`" and call the `save()` function when it's clicked



## [First string variable](https://youtu.be/jS4aFq5-91M?t=2896)

### 🏁 Challenge 1

創建一個變數為`message`，變數的值為`"You have tree new notifications"`字串。
Create a variable, message, that stores the string: "You have tree new notifications"

## 🏁 Challenge 2

創建一個變數為`messageToUser`，變數的值為`message + " ," + username + "!"`字串。（記得console.log)
Create a variable, `messageToUser`, that contains the message we have Logged

> [MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)


## [Log greeting to console](https://youtu.be/jS4aFq5-91M?t=3120)

1. 創建兩個變數，分別為`name`和`greeting`。`name`的值為你的名字，`greeting`的值為`"Hi, my name is "`。
   Create two variables, `name` and `greeting`. The name variable should store your name, and the greeting should store e.g. "Hi, my name is "
   
2. 創建第三個變數為`myGreeting`，變數的值為`name`加上`greeting`的字串。
   Create a third variable, `myGreeting`, that contatenates the two strings
   
3. Log `myGreeting` to the console

>[MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)


### [Strings vs. Numbers](https://youtu.be/jS4aFq5-91M?t=3198)

請在每段程式碼旁，以註解(comments)`//`的方式作答輸出（`console.log`)的值。

🌰 例子：

```js
console.log(4 + "10"); // 410
```

🏁 Challenge

```js
console.log(4 + 5)

console.log("2" + "4")

console.log("5" + 1)

console.log(100 + "100")
```


>[MDN DOCS | | 字串 （strings)](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)

>[MDN DOCS | | 數字 （number)](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number)




## [Render welcome message](https://youtu.be/jS4aFq5-91M?t=3366)

1. 創建一個變數`welcomeEl`，其值為[取出 HTML 內容當中](#Display-count)，ID為`welcome-el`的字串
   Grab the `welcome-el` paragraph and store it in a variable called `welcomeEl`

2. 創建兩個變數，分別為`name`和`greeting`，其值為你的名字和`Welcome back` 
   Create two variables (`name` & `greeting`) that contains your name and the `greeting` we want to render on the page

3. 透過`welcomeEl.innerText`來渲染（呈現）在網頁上（HTML）
   Render the welcome message using `welcomeEl.innerText`
   

```html
<!-- HTML -->
<html>

<head>

</head>

<body>

<p id="welcome-el"></p>

<script src="index.js"></script>

</body>

</html>
```


## [Improve the message with string concatenation](https://youtu.be/jS4aFq5-91M?t=3488)

1. 在結尾，加一個表情符號（例如：👋🏻）
   Add an emoji to the end!

2. 請再寫一段碼，不可修改上個單元挑戰題作答的程式碼
   WRITE YOUR CODE BELOW HERE

💡 提示 :  count = count + 1


## [Use plus equal for count](https://youtu.be/jS4aFq5-91M?t=3626)

⭐ 回到我們的Passenger counter app，請透過上單元學到的，來修改以下程式碼：

```js
let countEl = document.getElementById("count-el")

let count = 0

function increment() {

// 修改以下程式碼
// Change this to use the plus equal technique you've learned

count = count + 1

// 修改以上程式碼

countEl.innerText = count

}

function save() {

console.log(count)

}
```


## [Create save feature](https://youtu.be/jS4aFq5-91M?t=3655)

⭐ 這個挑戰題，我們需要應用目前所學的JS，來實作 Passenger counter app。

1. 創建一個變數`save-el`，其值為[取出 HTML 內容當中](#Display-count)，ID為`save-el`的字串
   Grab the `save-el` paragraph and store it in a variable called `saveEl`

2. 創建一個變數（名稱自行決定），其值為`count`變數的值加上分隔符號 `-`，例如：`"12 - "`
   Create a variable that contains both the count and the dash separator, i.e. "12 - "

3. 透過`saveEl.innerText`來渲染（呈現）在網頁上（HTML）
   Render the variable in the saveEl using innerText

⚠️ 注意：Make sure to not delete the existing content of the paragraph

```js
// 1. Grab the save-el paragraph and store it in a variable called saveEl

let countEl = document.getElementById("count-el")

let count = 0

function increment() {

count += 1

countEl.innerText = count

}

function save() {

// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "

// 3. Render the variable in the saveEl using innerText

// NB: Make sure to not delete the existing content of the paragraph

console.log(count)

}
```


## [Set count to 0](https://youtu.be/jS4aFq5-91M?t=4169)

完成此功能：當使用者按下`SAVE`按鈕時，歸零。

本次挑戰題，沒有提供任何提示，嘗試完成這個挑戰題吧！

![](https://i.imgur.com/XxPARfw.gif)


# Recap

## [Variables practice](https://youtu.be/jS4aFq5-91M?t=4548)

1. 創建兩個變數，分別為`firstName`和`lastName`（分別宣告你的名字和姓氏為變數的值
  Create two variables, `firstName` and `lastName`

2. 把這兩個變數的值串連起來，宣告為`fullName`變數的值。
  Concatenate the two variables into a third variable called `fullName`

3. 將`fullName`變數顯示（Log ）在控制台（console）。
   Log `fullName` to the console

## [Concatenate strings](https://youtu.be/jS4aFq5-91M?t=4662)

創建一個函式（function），讓`"Hi there, Linda!"`顯示(log)在控制台（console)
Create a function that logs out `"Hi there, Linda!"` when called

```js
let name = "Linda"

let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called
```




## [Incrementing & decrementing](https://youtu.be/jS4aFq5-91M?t=4724)

1. 創建兩個函式，分別為`add3Points()` 和`remove1Point()`，其程式碼為加減`myPoints`變數的值。
   Create two functions, `add3Points()` and `remove1Point()`, and have them add/remove points to/from the `myPoints` variable

2. 透過調用（callback)這些函式，讓`myPoints`變數的值為`10`。
   Call the functions to that the line below logs out `10`

```js
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them

// add/remove points to/from the myPoints variable

// Call the functions to that the line below logs out 10

console.log(myPoints)
```




## [Strings & numbers](https://youtu.be/jS4aFq5-91M?t=4856)

請在每段程式碼旁，以註解(comments)`//`的方式作答輸出（`console.log`)的值。

```js
// Try to predict what each of the lines will log out

console.log("2" + 2) // 

console.log(11 + 7) // 

console.log(6 + "5") // 

console.log("My points: " + 5 + 9) //

console.log(2 + 2) // 

console.log("11" + "14") // 
```




## [Rendering error message](https://youtu.be/jS4aFq5-91M?t=4955)

1. 當使用者點擊`purchase`按鈕時
   When the user clicks the purchase button

2. 渲染（呈現到HTML) `"Something went wrong, please try again"`字串在ID為`error`的段落中（HTML P 標籤）
   ender out "Something went wrong, please try again" in the paragraph that has the id="error".
   
```html
<html>

<head>

<link rel="stylesheet" href="index.css">

</head>

<body>

<img src="images/shoe.jpeg" alt="Nike shoe">

<p>Nike shoe</p>

<button>Purchase - $149</button>

<p id="error"></p>

<script src="index.js"></script>

</body>

</html>
```


## [Calculator challenge](https://youtu.be/jS4aFq5-91M?t=5152)

1. 透過編寫JS，實現讓`num1`和`num2`的計算功能
   Perform the given calculation using `num1` and `num2`

2. 渲染（呈現到HTML) 到ID為 `sum-el `的段落中（HTML P 標籤）
Render the result of the calculation in the paragraph with `id="sum-el"`

🌰 **例子：**

E.g. if the user clicks on the `"Plus"` button, you should render

`"Sum: 10"` (since 8 + 2 = 10) inside the paragraph with `id="sum-el"`

```html
<html>

<head>

<link rel="stylesheet" href="index.css">

</head>

<body>

<span id="num1-el"></span>

<span id="num2-el"></span>

<br>

<button onclick="add()">Add</button>

<button onclick="subtract()">Subtract</button>

<button onclick="divide()">Divide</button>

<button onclick="multiply()">Multiply</button>

<br>

<span id="sum-el">Sum: </span>

<script src="index.js"></script>

</body>

</html>
```

# Challenge 參考答案

## ✏️ 學習筆記

### [Create variable](https://youtu.be/jS4aFq5-91M?t=462)


```js
// 1. Create a variable, myAge, and set its Value to your age

let myAge = 16;

// 2. Log the myAge variable to the console

console.log(myAge);
```


### [Mathematical operations](https://youtu.be/jS4aFq5-91M?t=749)

```js
// 1. Create two variable, myAge and humanDogRatio

let myAge = 16;

let humanDogRatio = 7;

// 2. Multiply the two together and store the result in myDogAge

myDogAge= myAge * humanDogRatio;

// 3. Log myDogAge to the console

console.log(myDogAge);
```


### [Reassigning & incrementing](https://youtu.be/jS4aFq5-91M?t=977)

```js
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.

let bonusPoints = 50;

console.log(bonusPoints);

bonusPoints = bonusPoints * 2; // (bonusPoints = bonusPoints + 50;)

console.log(bonusPoints);

// Decrease it down to 25, and then finally increase it to 70

bonusPoints = bonusPoints - 75;

console.log(bonusPoints);

bonusPoints = bonusPoints + 45;

// Console. Log the value after each step

console.log(bonusPoints);
```


### [Write your first function](https://youtu.be/jS4aFq5-91M?t=1731)

```js
// Create a function (you decide the name) that Logs out the number 42 to the console

function myFirstFunciton(){ //  函式名稱自行決定 you decide the name 

console.log(42);

}

// Call/ invoke the function

myFirstFunciton()
```


### [Function that logs sum](https://youtu.be/jS4aFq5-91M?t=1775)

```js
let lap1 = 34

let lap2 = 33

let lap3 = 36

  

// Create a function that Logs out the sum of all the Lap times

function sumAllTheLapTimes(){ //函式名稱自行決定

let totalTime = lap1 + lap2 + lap3 //變數名稱自行決定

console.log(totalTime);

}

sumAllTheLapTimes()
```

```js
let lap1 = 34

let lap2 = 33

let lap3 = 36

  

// Create a function that Logs out the sum of all the Lap times

function sumAllTheLapTimes(){ //函式名稱自行決定

console.log(lap1 + lap2 + lap3);

}

sumAllTheLapTimes()
```


### [Function that increments](https://youtu.be/jS4aFq5-91M?t=1946)

```js
let lapsCompleted = 0

// Create a function that increments the lapsCompleted Leted variable with one

function allLaps(){ //函式名稱自行決定

lapsCompleted = lapsCompleted + 1

}

// Run it three times

allLaps()

allLaps()

allLaps()

console.log(lapsCompleted)
```

### [Increment on clicks](https://youtu.be/jS4aFq5-91M?t=2063)

```js
// initialize the count as 0

let count = 0;

// Listen for clicks on the increment button

// increment the count variable when the button is clicked

function increment(){

count = count + 1;

console.log(count);

}
```

### [Display count / innerText](https://youtu.be/jS4aFq5-91M?t=2627)

```js
// grab the count-el element, store it in a countEl variable

let count = 0

let countEl = document.getElementById('count-el');

function increment() {

count = count + 1

countEl.innerText = count;

}

// set countEl's innerText to the count
```


### [Create save button](https://youtu.be/jS4aFq5-91M?t=2670)

```js
// JS

// 1. Create a function, save(), which logs out the count when it's called

function save(){

console.log(count)

}
```


```html
<!-- HTML -->

<!-- 2. Create a SAVE button. Set the id to "save-btn" and call the save() function when it's clicked -->

<button id="save-btn" onclick="save()">SAVE</button>
```

### [First string variable](https://youtu.be/jS4aFq5-91M?t=2896)

#### 🏁 Challenge 1

```js
let message = "You have tree new notifications";
```

```js
let message = 'You have tree new notifications';
```

#### 🏁 Challenge 2

```js
// Create a variable, messageToUser, that contains the message we have Logged

let messageToUser = message + ", " + username + "!";

console.log(messageToUser)
```


### [Log greeting to console](https://youtu.be/jS4aFq5-91M?t=3120)

```js
// Create two variables, name and greeting. The name variable should store your name,

// and the greeting should store e.g. "Hi, my name is "

let name = "Michelle";

let greeting = "Hi, my name is ";

// Create a third variable, myGreeting, that contatenates the two strings

let myGreeting = greeting + name;

// Log myGreeting to the console

console.log(myGreeting);
```

```js
// Create two variables, name and greeting. The name variable should store your name,

// and the greeting should store e.g. 'Hi, my name is '

let name = 'Michelle';

let greeting = 'Hi, my name is ';

// Create a third variable, myGreeting, that contatenates the two strings

let myGreeting = greeting + name;

// Log myGreeting to the console

console.log(myGreeting);
```

### [Strings vs. Numbers](https://youtu.be/jS4aFq5-91M?t=3198)
 
```js
console.log(4 + 5) // 9

console.log("2" + "4") // 24

console.log("5" + 1) // 51

console.log(100 + "100") // 100100
```

## [Render welcome message](https://youtu.be/jS4aFq5-91M?t=3366)

```js
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

let welcomeEl = document.getElementById("welcome-el");

// Create two variables (name & greeting) that contains your name

let name ="Michelle"

// and the greeting we want to render on the page

let greeting = "Welcome back " 

// Render the welcome message using welcomeEl.innerText

welcomeEl.innerText = greeting + name;
```

### [Improve the message with string concatenation](https://youtu.be/jS4aFq5-91M?t=3488)

```js
// Add an emoji to the end!

// WRITE YOUR CODE BELOW HERE

welcomeEl.innerText = welcomeEl.innerText + "👋🏻";

// HINT: count = count + 1
```



### [Use plus equal for count](https://youtu.be/jS4aFq5-91M?t=3626)

```js
let countEl = document.getElementById("count-el")

let count = 0

function increment() {

// 修改以下程式碼
// Change this to use the plus equal technique you've learned

count += 1

// 修改以上程式碼

countEl.innerText = count

}

function save() {

console.log(count)

}
```

### [Create save feature](https://youtu.be/jS4aFq5-91M?t=3655)

```js
// 1. Grab the save-el paragrah and store it in a variable called saveEl

let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let count = 0

function increment() {

count += 1

countEl.innerText = count

}

function save() {

// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "

countStr = count + " - "

// 3. Render the variable in the saveEl using innerText

saveEl.innerText += countStr

// NB: Make sure to not delete the existing content of the paragraph

console.log(count)

}
```


### [Set count to 0](https://youtu.be/jS4aFq5-91M?t=4169)

我的解答：
```js
let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let count = 0

function increment() {

count += 1

countEl.innerText = count

}

function save() {

countStr = count + " - "

saveEl.innerHTML += countStr

count = 0;

countEl.textContent = count

}
```

影片中，老師的解答：
```js
let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")

let count = 0

function increment() {

count += 1

countEl.textContent = count

}

function save() {

let countStr = count + " - "

saveEl.textContent += countStr

countEl.textContent = 0

count = 0

}
```

## Recap

### [Variables practice](https://youtu.be/jS4aFq5-91M?t=4548)

```js
// Create two variables, firstName and lastName

let firstName = "Michelle "

let lastName = "Chang"

// Concatenate the two variables into a third variable called fullName

fullName = firstName + lastName

// Log fullName to the console

console.log(fullName)
```


### [Concatenate strings](https://youtu.be/jS4aFq5-91M?t=4662)

```js
let name = "Linda"

let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

function twoStrings() { //函式名稱自行決定

console.log(greeting + ", " + name + "!");

}

twoStrings()
```


### [Incrementing & decrementing](https://youtu.be/jS4aFq5-91M?t=4724)

```js
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them

// add/remove points to/from the myPoints variable

function add3Points() {

myPoints += 3

}

function remove1Point() {

myPoints -= 1

}

add3Points()

add3Points()

add3Points()

remove1Point()

remove1Point()

// Call the functions to that the line below logs out 10

console.log(myPoints)
```


### [Strings & numbers](https://youtu.be/jS4aFq5-91M?t=4856)

```js
// Try to predict what each of the lines will log out

console.log("2" + 2) // 22

console.log(11 + 7) // 18

console.log(6 + "5") // 65

console.log("My points: " + 5 + 9) // My points: 59

console.log(2 + 2) // 4

console.log("11" + "14") // 1114
```

### [Rendering error message](https://youtu.be/jS4aFq5-91M?t=4955)

```js
// When the user clicks the purchase button, render out

// "Something went wrong, please try again" in the paragraph

// that has the id="error".

let errorParagraph = document.getElementById("error")

function errorBtn() {

errorParagraph.textContent = "Something went wrong, please try again"

}
```


### [Calculator challenge](https://youtu.be/jS4aFq5-91M?t=5152)

```js
let num1 = 8

let num2 = 2

document.getElementById("num1-el").textContent = num1

document.getElementById("num2-el").textContent = num2

  

let sumEl = document.getElementById("sum-el")

  

// Create four functions: add(), subtract(), divide(), multiply()

// Call the correct function when the user clicks on one of the buttons

function add(){

sumEl.textContent = num1 + num2

}

  

function subtract(){

sumEl.textContent = num1 - num2

}

  

function divide(){

sumEl.textContent = num1 / num2

}

  

function multiply(){

sumEl.textContent = num1 * num2

}

  

// Perform the given calculation using num1 and num2

// Render the result of the calculation in the paragraph with id="sum-el"

  

// E.g. if the user clicks on the "Plus" button, you should render

// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
```