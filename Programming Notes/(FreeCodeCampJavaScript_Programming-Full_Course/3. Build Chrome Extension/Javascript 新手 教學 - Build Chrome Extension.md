# 💪🏻 這個階段，我們會學到...


# 🔗 Section links 


### [✏️ 學習筆記](#學習筆記)



### [🏁 Recap Challenge](#Recap-Challenge)



### [⭐ 復刻 APP](#復刻-APP)

### [⭐ Solo Project 學以致用](#學以致用-Solo-Project)

### [🏁 Challenge 題庫](https://tinyurl.com/2739estx)

### [🏁 Challenge 參考答案](#Challenge-參考答案)




# 學習筆記


## [Make input button work with onclick](https://youtu.be/jS4aFq5-91M?si=AQ7Uw1PLJ4KONGoN&t=17248)


### 🏁 Challenge

**⭐ Passenger counter app 複習題 [onclick event listener](https://tinyurl.com/2cgr5545)


```js
// index.js
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
```



```html
<html>

<head>

<link rel="stylesheet" href="index.css">

</head>

<body>

<input type="text" name="" id="input-el">

<button id="input-btn">SAVE INPUT</button>

<script src="index.js"></script>

</body>

</html>
```



[參考答案](#Challenge-參考答案)


>[HTML & CSS 原始碼](https://scrimba.com/learn/learnjavascript/make-the-input-button-work-with-onclick-co48f417a81a9731509f01933)








## [addEventListener()](https://youtu.be/jS4aFq5-91M?si=MYG4K6GUI9qtsPlE&t=17471)


**語法架構：**


```js
target.addEventListener(event, function, useCapture)
```


`target` : 這裡是`The DOM`的部份，例如：`<button id="input-btn" onclick="btnOnclick()">SAVE INPUT</button>` ，更改為 `let inputBtn = document.getElementById("input-btn")`。

`event` ： 監聽事件 [onclick event listener](https://tinyurl.com/2cgr5545)，如`click`。

`function` :  執行 函式

#### `useCapture`  - Boolean

當使用者觸發（點擊）內層（子層）（HTML 元素）事件監聽時，外層（父層）（HTML 元素）如果也有設定事件監聽，也會跟著觸發。這參數，讓我們可以設定，內層（子層）和外層（父層）事件監聽（要執行的程式碼）的<u>先後順序</u>。


**Bubbling 先後順序 - 內層（子層）👉🏻  外層（父層 ):**


設定`false`或沒有特別去設定它（`false`是預設值）時，會先執行內層（子層）再執行外層（父層）的事件監聽（要執行的程式碼）。


![](https://i.imgur.com/JCN4Zqi.gif)



```js
let redEl = document.getElementById("red")

let greenEl = document.getElementById("green")

redEl.addEventListener("click", red, false)

function red() {

console.log("Parent area")

}

greenEl.addEventListener("click", green, false)

function green() {

console.log("Child area")

}
```






**Capturing 先後順序 - 外層（父層 ) 👉🏻  內層（子層 ):**


設定`true`時，會先執行外層（父層）再執行內層（子層）的事件監聽（要執行的程式碼）。



![](https://i.imgur.com/TadDVhI.gif)



```js
let redEl = document.getElementById("red")

let greenEl = document.getElementById("green")

redEl.addEventListener("click", red, true)

function red() {

console.log("Parent area")

}

greenEl.addEventListener("click", green, true)

function green() {

console.log("Child area")

}
```


### 應用


![](https://i.imgur.com/P41TuzV.gif)


```js
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

  

let saveBtn = document.getElementById("input-btn")

saveBtn.addEventListener("click", function() {

console.log("Button clicked!")

})
```



#### 🗂️ Reference

>[Freecodecamp | | addEventListener() 方法——JavaScript 事件监听器示例代码](https://www.freecodecamp.org/chinese/news/javascript-addeventlistener-example-code/)

>[addEventListener 的第三個參數](https://blog.othree.net/log/2007/02/06/third-argument-of-addeventlistener/)

>[W3Schools | | addEventListener useCapture]((https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_usecapture)



>[MDN | | EventTarget: addEventListener() method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)





## [Write your first `addEventListener()`](https://youtu.be/jS4aFq5-91M?si=RcMdMeg_siV5P4zV&t=17471)



![](https://i.imgur.com/J8EtHBq.gif)



```js
// JS
// 1. Grab the box from the DOM and store it in a variable

// 2. Add a click event listener to the box

// 3. Log out "I want to open the box!" when it's clicked
```



```html
<html>

<head>

<link rel="stylesheet" href="index.css">

</head>

<body>

<div id="box">Open the box!</div>

<script src="index.js"></script>

</body>

</html>
```



[參考答案](#Challenge-參考答案)


>[HTML & CSS 原始碼](https://tinyurl.com/22snnztv)




## [Your turn to refactor](https://youtu.be/jS4aFq5-91M?si=ASldPBNTNeBp2yWC&t=17579)


### 🏁 Challenge (`addEventListener()`實作挑戰題)


⭐ 將剛剛學到的`addEventListener()`，應用到我們的Chrome 外掛。



```js
// Refactor the code so that it uses .addEventListener()

// when you click the SAVE INPUT button

  

function saveLead() {

console.log("Button clicked!")

}
```



[參考答案](#Challenge-參考答案)




## [Create myLeads array & inputEl](https://youtu.be/jS4aFq5-91M?si=XfUWNudoYkiIr6Qi&t=17665)



**⭐ Passenger counter app 複習題 [Create variable](https://tinyurl.com/223oyx48) & Build Blackjack Game 複習題 [Arrays intro](https://tinyurl.com/223oyx48)



```js
// Create two variables:

// myLeads -> should be assigned to an empty array

// inputEl -> should be assigned to the text input field


let saveEl = document.getElementById("input-btn")

saveEl.addEventListener("click",saveLead)

  

function saveLead() {

  

console.log("Button clicked!")

}
```


[參考答案](#Challenge-參考答案)





## [Using let & const](https://youtu.be/jS4aFq5-91M?si=K1WC55JU0A77wpRw&t=17809)


在 [Passenger counter app]() 的 [Create variable](https://tinyurl.com/223oyx48) 筆記中，已整理出`JS`三種宣告方式。那麽在`ES6`中的`let`和`const`的差別為何呢？它們的用處在哪裡呢？


**`let`和`const`的差別：**

`let`可重新宣告：

```js
let apples = 5

apples = apples -1

console.log(apples) // log out 4
```



`const` 不可重新宣告：


```js
const apples = 5

apples = apples -1

console.log(apples) // log out TypeError: Assignment to constant variable.
```


**`let`和`const`的用處：**

我們可以透過這兩個變數，來讓其他開發者或者你自己閱讀你的程式碼時，可以區分哪些變數（的值）是可重新宣告，哪些變數（的值）不可重新宣告外，也防止開發者自己不小心重新宣告某些變數（的值）。


```js
const playerName = "Per" // 玩家的名字是固定的，往後的程式不可重新宣告（改變此變數的值）

let credits = 45 // 玩家的點數一定會隨著遊戲規則（程式）而有所改變
```



**🗂️ Reference**

>[JavaScript: var, let, const 差異](https://totoroliu.medium.com/javascript-var-let-const-%E5%B7%AE%E7%95%B0-e3d930521230)

>[【自學程式】var、let 與 const 到底差在哪？](https://vocus.cc/article/61e64209fd8978000115de66)



### 🏁 Challenge (實作挑戰題)

⭐ 哪個變數需將`let`換成`const`呢？


```js
// If possible, use const. If not, use let.

  

// Which variables below should be changed from let to const?

  

// The customer wants to order some stuff. Here are the details:

let basePrice = 520

let discount = 120

let shippingCost = 12

let shippingTime = "5-12 days"

  

// Whops! Turns out the shipping will be a bit more complex

shippingCost = 15

shippingTime = "7-14 days"

  

// Calculating the full price

let fullPrice = basePrice - discount + shippingCost

  

// Finally, notifying the customer

console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
```



[參考答案](#Challenge-參考答案)








## [Push to myLeads array](https://youtu.be/jS4aFq5-91M?si=2WtkxcVMbehp5LQK&t=18011)


### 🏁 Challenge 

**⭐ 複習題： [Build Blackjack Game](https://tinyurl.com/223oyx48)的[Adding & removing items from arrays](https://tinyurl.com/223oyx48)**


```js
let myLeads = []

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

  

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

  

inputBtn.addEventListener("click", function() {

console.log("Button clicked!")

})
```



[參考答案](#Challenge-參考答案)



## [Push value from input field](https://youtu.be/jS4aFq5-91M?si=02XWyb2eisG4qRcM&t=18084)


🔍  嘗試自己Google看看吧～推薦搜尋關鍵字：`get value from input field javascript`


```js
// Push the value from the inputEl into the myLeads array

// instead of the hard-coded "www.awesomeleads.com" value

// Google -> "get value from input field javascript"

  
  

let myLead = []

let inputEl = document.getElementById("input-el")

  

let saveEl = document.getElementById("input-btn")

saveEl.addEventListener("click",saveLead)

  

function saveLead() {

myLead.push("www.awesomelead.com")

console.log(myLead)

}
```




[參考答案](#Challenge-參考答案)


**👩🏻‍💻 筆者碎碎念:** 推薦的參考資料 👉🏻 [W3school | | Input Text value Property](https://www.w3schools.com/jsref/prop_text_value.asp)





### [Use for loop to log out leads](https://youtu.be/jS4aFq5-91M?si=W01jtwaDWkfPvPqk&t=18237)


### 🏁 Challenge 


```js
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

  

inputBtn.addEventListener("click", function() {

myLeads.push(inputEl.value)

console.log(myLeads)

})

  
  

// Log out the items in the myLeads array using a for loop
```



[參考答案](#Challenge-參考答案)



## [Create unordered list](https://youtu.be/jS4aFq5-91M?si=9XZ3ZNBSdPEYsqCW&t=18338)


### 🏁 Challenge 


**⭐ Passenger counter app 複習題 [Document Object Model (DOM)](https://tinyurl.com/2cgr5545)


```html
<html>

<head>

<link rel="stylesheet" href="index.css">

</head>

<body>

<input type="text" id="input-el">

<button id="input-btn">SAVE INPUT</button>

<!-- 1. Create an unordered list element (<ul>) with id="ul-el" -->

<script src="index.js"></script>

</body>

</html>
```



```js
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

// 2. Grab the unordered list and store it in a const variable called ulEl

  

inputBtn.addEventListener("click", function() {

myLeads.push(inputEl.value)

console.log(myLeads)

})

  
  

for (let i = 0; i < myLeads.length; i++) {

console.log(myLeads[i])

}
```


[參考答案](#Challenge-參考答案)




## [Render leads in unordered list](https://youtu.be/jS4aFq5-91M?si=MyfDTAUlhCW5T9ve&t=18459)



```js
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

  

inputBtn.addEventListener("click", function() {

myLeads.push(inputEl.value)

console.log(myLeads)

})

  

// Render the leads in the unordered list using ulEl.textContent

for (let i = 0; i < myLeads.length; i++) {

console.log(myLeads[i])

}
```




[參考答案](#Challenge-參考答案)





## [How to render li elements with innerHTML](https://youtu.be/jS4aFq5-91M?si=y10HV77XFjjlHnfi&t=18683)


如果我們想要呈現這樣的畫面，要如何寫呢？


![](https://i.imgur.com/VlvDVFr.png)


你可能會這樣寫：


```js
for (let i = 0; i < myLeads.length; i++) {

ulEl.textContent += "<li>" + myLeads[i] + "</li>"

}
```




但畫面卻是：


![](https://i.imgur.com/JrnvGtw.png)


為何這樣呢？因爲我們使用`textContent`，它將 `li` HTML 標籤渲染(視為)字串（string）。所以我們要使用`innerHtml`，innerHTML 的方式會讓瀏覽器將字串解析為 HTML 的屬性。


```js
for (let i = 0; i < myLeads.length; i++) {

ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

}
```



![](https://i.imgur.com/uU4x4mD.png)




>[MDN | | Element: innerHTML property](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

>[MDN | | Node: textContent property](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)



**🗂️ Reference**

>[|D25| JS - innerHTML vs. textContent](https://ithelp.ithome.com.tw/articles/10209018)




## [Write your first innerHTML](https://youtu.be/jS4aFq5-91M?si=MRhWrChSzcSHUiKi&t=18781)


### 🏁 Challenge (上個單元的實作題)


```html
<html>

<head>

<link rel="stylesheet" href="index.css">

</head>

<body>

<div id="container">

</div>

<script src="index.js"></script>

</body>

</html>
```


```js
//JS 
// Use .innerHTML to render a Buy! button inside the div container
```


[參考答案](#Challenge-參考答案)



## [More innerHTML practice](https://youtu.be/jS4aFq5-91M?si=HPU3IEGWIJqw7xfQ&t=18875)


### 🏁 Challenge 


```js
const divEl = document.getElementById("container")

  

divEl.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)

// that says "Thank you for buying!"
```




[參考答案](#Challenge-參考答案)


## [Render li elements with innerHTML](https://youtu.be/jS4aFq5-91M?si=O950ZxxwjVtHvyd4&t=18986)


### 🏁 Challenge 


```js
// Replace .textContent with .innerHTML and use <li> tags

for (let i = 0; i < myLeads.length; i++) {

ulEl.textContent += myLeads[i] + " "

}
```



[參考答案](#Challenge-參考答案)


## [Use createElement() & append() instead of innerHTML](https://youtu.be/jS4aFq5-91M?si=DLp1ZugCdjUja_aE&t=19057)


**createElement() :**

```js
createElement(tagName/* HTML 元素 */)
createElement(tagName/* HTML 元素 */, options)
```



>[重新認識 JavaScript: Day 13 DOM Node 的建立、刪除與修改](https://ithelp.ithome.com.tw/articles/10191867)

>[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)





**append()**

```js
append/* 這裡有可能是父層 */(param1 /* 這裡有可能是要渲染的子層 */)
```


>[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)




#### 嘗試 應用到我們的Chrome Extension吧！


```js
for (let i = 0; i < myLeads.length; i++) {

// ulEl.innerHTML += "<i>"+ myLeads[i] + "</i><br>"

// create element

// set text content

// append to ul

}
```



[參考答案](#Challenge-參考答案)








# Challenge 參考答案


## 學習筆記


### [Make input button work with onclick](https://youtu.be/jS4aFq5-91M?si=AQ7Uw1PLJ4KONGoN&t=17248)


```html
<html>

<head>

<link rel="stylesheet" href="index.css">

</head>

<body>

<!-- Create an input element with type="text" and id="input-el" -->

<input type="text" name="" id="input-el">

<!-- Create a SAVE INPUT button with id="input-btn" -->

<button id="input-btn" onclick="btnOnclick()">SAVE INPUT</button>

<script src="index.js"></script>

</body>

</html>
```



```js
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

function btnOnclick() {

console.log("Button clicked!")

}
```




### [Write your first `addEventListener()`](https://youtu.be/jS4aFq5-91M?si=RcMdMeg_siV5P4zV&t=17471)


```js
let boxEl = document.getElementById("box")

  

boxEl.addEventListener("click",function(){

console.log("I want to open the box!")

})
```





### [Your turn to refactor](https://youtu.be/jS4aFq5-91M?si=ASldPBNTNeBp2yWC&t=17579)


我的解答：


```js
let saveEl = document.getElementById("input-btn")

saveEl.addEventListener("click",saveLead)

  

function saveLead() {

  

console.log("Button clicked!")

}
```



影片中，老師的解答：


```js
// Refactor the code so that it uses .addEventListener()

// when you click the SAVE INPUT button

  

let inputBtn = document.getElementById("input-btn")

  

inputBtn.addEventListener("click", function() {

console.log("Button clicked!")

})
```



### [Create myLeads array & inputEl](https://youtu.be/jS4aFq5-91M?si=XfUWNudoYkiIr6Qi&t=17665)


```js
let myLead = []

let inputEl = document.getElementById("input-el")
```



### [Using let & const](https://youtu.be/jS4aFq5-91M?si=K1WC55JU0A77wpRw&t=17809)


```js
// If possible, use const. If not, use let.

  

// Which variables below should be changed from let to const?

  

// The customer wants to order some stuff. Here are the details:

const basePrice = 520

const discount = 120

let shippingCost = 12

let shippingTime = "5-12 days"

  

// Whops! Turns out the shipping will be a bit more complex

shippingCost = 15

shippingTime = "7-14 days"

  

// Calculating the full price

let fullPrice = basePrice - discount + shippingCost

  

// Finally, notifying the customer

console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
```



### [Push to myLeads array](https://youtu.be/jS4aFq5-91M?si=2WtkxcVMbehp5LQK&t=18011)



```js
// Push the value "www.awesomelead.com" to myArray when the input button is clicked

  
  

let myLead = []

let inputEl = document.getElementById("input-el")

  

let saveEl = document.getElementById("input-btn")

saveEl.addEventListener("click",saveLead)

  

function saveLead() {

myLead.push("www.awesomelead.com")

console.log(myLead)

}
```




### [Push value from input field](https://youtu.be/jS4aFq5-91M?si=02XWyb2eisG4qRcM&t=18084)



```js
// Push the value from the inputEl into the myLeads array

// instead of the hard-coded "www.awesomeleads.com" value

// Google -> "get value from input field javascript"

  
  

let myLead = []

let inputEl = document.getElementById("input-el") // 不是在這裡設value

  

let saveEl = document.getElementById("input-btn")

saveEl.addEventListener("click",saveLead)

  

function saveLead() {

myLead.push(inputEl.value) // 是在這裡設value

console.log(myLead)

}
```



**👩🏻‍💻 筆者碎碎念：** 關於`value`為何要這樣設定，這是Bing (GPT4)的解答：

當您將程式碼改成 `let inputEl = document.getElementById("input-el").value` 時，`inputEl` 變數會在網頁載入時被賦予一個初始值，也就是使用者第一次輸入的值。但是，由於 `inputEl` 變數並沒有被更新，所以它的值不會隨著使用者每次輸入的值而更改。您可以在 `saveLead` 函數中重新獲取 `inputEl.value` 的值，以確保每次都能獲取最新的輸入值。





### [Use for loop to log out leads](https://youtu.be/jS4aFq5-91M?si=W01jtwaDWkfPvPqk&t=18237)



```js
// Log out the items in the myLeads array using a for loop

  

for (let i = 0; i < myLead.length; i++) {

console.log(myLead[i])

}

  

// ES6

myLead.forEach(array => {

console.log(array)

});
```



**👩🏻‍💻 筆者碎碎念：** 關於ES6的`forEach`語法可參考：[鐵人賽：ES6 陣列方法](https://www.casper.tw/javascript/2017/12/26/javascript-array/)([MDN | | Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach))



### [Create unordered list](https://youtu.be/jS4aFq5-91M?si=9XZ3ZNBSdPEYsqCW&t=18338)



```html
<html>

<head>

<link rel="stylesheet" href="index.css">

</head>

<body>

<!-- Create an input element with type="text" and id="input-el" -->

<input type="text" name="" id="input-el">

<!-- Create a SAVE INPUT button with id="input-btn" -->

<button id="input-btn">SAVE INPUT</button>

<!-- 1. Create an unordered list element (<ul>) with id="ul-el" -->

<ul id="ul-el"></ul>

<script src="index.js"></script>

</body>

</html>
```




```js
// 2. Grab the unordered list and store it in a const variable called ulEl

let myLead = []

const inputEl = document.getElementById("input-el")

  

const saveEl = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

saveEl.addEventListener("click",saveLead)

  

function saveLead() {

myLead.push(inputEl.value)

console.log(myLead)

}

  
  
  

for (let i = 0; i < myLead.length; i++) {

console.log(myLead[i])

}
```




### [Render leads in unordered list](https://youtu.be/jS4aFq5-91M?si=MyfDTAUlhCW5T9ve&t=18459)


```js

// Render the leads in the unordered list using ulEl.textContent

for (let i = 0; i < myLead.length; i++) {

ulEl.textContent = myLead[i]

}
```



### [Write your first innerHTML](https://youtu.be/jS4aFq5-91M?si=MRhWrChSzcSHUiKi&t=18781)



```js
// Use .innerHTML to render a Buy! button inside the div container

const divEl = document.getElementById("container")

divEl.innerHTML = "<button>Buy!</button>"
```



### [More innerHTML practice](https://youtu.be/jS4aFq5-91M?si=HPU3IEGWIJqw7xfQ&t=18875)


```js
const divEl = document.getElementById("container")

divEl.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)

// that says "Thank you for buying!"

function buy(){

divEl.innerHTML += "<p>Thank you for buying!</p>"

}
```



### [Render li elements with innerHTML](https://youtu.be/jS4aFq5-91M?si=O950ZxxwjVtHvyd4&t=18986)


```js
// Replace .textContent with .innerHTML and use <li> tags

for (let i = 0; i < myLeads.length; i++) {

ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

}
```




### [Use createElement() & append() instead of innerHTML](https://youtu.be/jS4aFq5-91M?si=DLp1ZugCdjUja_aE&t=19057)



```js
for (let i = 0; i < myLeads.length; i++) {

// ulEl.innerHTML += "<i>"+ myLeads[i] + "</i><br>"

// create element

// set text content

// append to ul

let liEl = document.createElement("li")

liEl.textContent += myLeads[i]

ulEl.append(liEl)

}
```
