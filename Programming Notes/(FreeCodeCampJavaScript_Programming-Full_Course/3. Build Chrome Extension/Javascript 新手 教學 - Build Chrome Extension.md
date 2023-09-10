
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


### 🏁 Challenge 

⭐ 嘗試 應用到我們的Chrome Extension吧！


```js
for (let i = 0; i < myLeads.length; i++) {

// ulEl.innerHTML += "<i>"+ myLeads[i] + "</i><br>"

// create element

// set text content

// append to ul

}
```



[參考答案](#Challenge-參考答案)




## [Improving performance of our app](https://youtu.be/jS4aFq5-91M?si=zQnjumvzQx4CPdCj&t=19276)


### 🏁 Challenge 


```js
// 1. Create a variable, listItems, to hold all the HTML for the list items

// Assign it to an empty string to begin with

for (let i = 0; i < myLeads.length; i++) {

// 2. Add the item to the listItems variable instead of the ulEl.innerHTML

ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

}

// 3. Render the listItems inside the unordered list using ulEl.innerHTML
```



[參考答案](#Challenge-參考答案)







## [Create render function](https://youtu.be/jS4aFq5-91M?si=M-uhqjeOEK1nOmye&t=19477)


### 🏁 Challenge 


```js
saveEl.addEventListener("click",saveLead)

  

function saveLead() {

myLeads.push(inputEl.value)

console.log(myLeads)

// 2. Call the renderLeads() function

}

  
  
  

// 1. Wrap the code below in a renderLeads() function

let listItems = ""

for (let i = 0; i < myLeads.length; i++) {

listItems += "<li>" + myLeads[i] + "</li>"

}

ulEl.innerHTML = listItems
```


[參考答案](#Challenge-參考答案)

## [Clear input field](https://youtu.be/jS4aFq5-91M?si=OWX3CPF9X_DQlx6T&t=19600)


### 🏁 Challenge 


⭐ 嘗試自己Google來解答吧～


```js
inputBtn.addEventListener("click", function() {

myLeads.push(inputEl.value)

// Clear out the input field

renderLeads()

})
```



[參考答案](#Challenge-參考答案)




## [Add `<a>` tag](https://youtu.be/jS4aFq5-91M?si=wPbedqWyItjBJ1N1&t=19727)


### 🏁 Challenge 


```js
function renderLeads() {

let listItems = ""

for (let i = 0; i < myLeads.length; i++) {

// Wrap the lead in an anchor tag (<a>) inside the <li>

// Can you make the link open in a new tab?

listItems += "<li>" + myLeads[i] + "</li>"

}

ulEl.innerHTML = listItems

}
```


[參考答案](#Challenge-參考答案)


## [Template strings](https://youtu.be/jS4aFq5-91M?si=80xGF6eWoWhMarFt&t=20153)



樣板字串，個人認為沒有太多複雜的「觀念」，但語法蠻複雜就是了，所以就不特別紀錄。推這個文章👉🏻[初學者跪著學JavaScript Day6 :template literals和 tagged template literals傻傻分不清楚](https://ithelp.ithome.com.tw/m/articles/10269028)



```js
function renderLeads() {

let listItems = ""

for (let i = 0; i < myLeads.length; i++) {

listItems += `<li><a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`

console.log(listItems)

}

ulEl.innerHTML = listItems

}
```



>[MDN | | 樣板字面值 (樣板字串） Template literals](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals)

>[ 鐵人賽：JavaScript Template String 樣板字串](https://www.casper.tw/javascript/2017/12/22/javascript-template-string/)





## [Write your first Template strings](https://youtu.be/jS4aFq5-91M?si=53DzGytUtwY7ysmv&t=20154)


### 🏁 Challenge 上個單元的實作題


```js
// template strings/literals

  

const recipient = "James"

  

// Refactor the email string to use template strings

const email = "Hey " + recipient + "! How is it going? Cheers Per"

  

console.log(email)
```


[參考答案](#Challenge-參考答案)

## [Make template string more dynamic](https://youtu.be/jS4aFq5-91M?si=QYKyqomcjZOKMnAL&t=20189)


### 🏁 Challenge 實作題


```js
// template strings/literals

  

const recipient = "James"

// Create a new variable, sender, and set its value to your name

  

// Use your sender variable instead of "Per"

const email = `Hey ${recipient}! How is it going? Cheers Per`

  

console.log(email)
```


[參考答案](#Challenge-參考答案)



## [Template strings on multiple lines](https://youtu.be/jS4aFq5-91M?si=R1qt9Gm2McXyWdFW&t=20232)


樣板字串，有別於一般的字串，它可以段行。


```js
// template strings/literals

const recipient = "James"

const sender = "Per Harald Borgen"

// Break the email string into multiple lines

const email = `Hey ${recipient}! 

How is it going? Cheers ${sender}`

console.log(email)
```


從下面這張教學影片截圖，我們可以發現，在Chrome 瀏覽器的控制台（console)，輸出的字串也會段行。



![](https://i.imgur.com/t8OXycf.png)





## [Refactor app to use template string](https://youtu.be/jS4aFq5-91M?si=T7CBSUz2TYZ1JOhu&t=20463)


### 🏁 Challenge 實作題


⭐ 現在嘗試看看自己將學到的樣板字串應用到我們的Chrome Extension


```js  

function renderLeads() {

let listItems = ""

for (let i = 0; i < myLeads.length; i++) {

// Refactor the code below to use a template string

listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

}

ulEl.innerHTML = listItems

}
```



[參考答案](#Challenge-參考答案)




## [Preparing deployment]()


##### `manifest.json` 檔案


```json
{

"manifest_version": 3,

"version": "1.0",

"name": "Leads tracker",

"action": { // 當使用者點擊Chrome 瀏覽器的工具列時，

"default_popup": "index.html", // 顯示的介面

"default_icon": "icon.png" // 顯示在工具列的icon

}

}
```


##### 下載檔案


>[PNG 檔案](https://github.com/scrimba/learn-javascript/blob/main/5.%20Build%20a%20Chrome%20Extension/30.%20Preparing%20the%20deployment/icon.png)


>[manifest.json 檔案](https://github.com/scrimba/learn-javascript/blob/main/5.%20Build%20a%20Chrome%20Extension/30.%20Preparing%20the%20deployment/manifest.json)





## [Deploying Chrome Extension](https://youtu.be/jS4aFq5-91M?si=4pGRbFkfEBgWhhST&t=21068)



**步驟一：** 在你的擴充功能介面，開啟開發人員模式

![](https://i.imgur.com/upHqTDh.png)



**步驟二：**

點擊「載入未封裝項目」按鈕，上傳檔案。

![](https://i.imgur.com/dfHqdNW.png)


這樣我們就可以使用了。


![](https://i.imgur.com/2TpFZA8.gif)





## [What is localStorage?](https://youtu.be/jS4aFq5-91M?si=I1lMIE3lhwaRyz1z&t=21220)


造訪[維基百科](https://www.wikipedia.org)，打開開發者工具，在`Application`分頁，就可以看到該網站的`localStorage`資料。


![](https://i.imgur.com/7X8Nx8U.png)


我們可以將`localStorage`當作是在本地端（客戶端）瀏覽器的小資料庫。我們利用這個小資料庫來儲存資料的話，這樣當使用者重新載入頁面（refresh)，使用者輸入的資料就不會不見。


```json
{myLead: 'www.example.com',}
```


![](https://i.imgur.com/LwDQKbL.png)



#####  `localStorage` 語法

![](https://i.imgur.com/Wq4IfHW.png)




**全部移除 - localStorage.clear()**


![](https://i.imgur.com/9Dp5377.png)

![](https://i.imgur.com/pWNAOY9.png)



**輸入 - localStorage.setItem(key, value)**


![](https://i.imgur.com/sMaaPA7.png)


**取出 - localStorage.getItem(key)**


![](https://i.imgur.com/O34xBPN.png)


**移除 - localStorage.removeItem(key)**


![](https://i.imgur.com/UjbCGt3.png)

![](https://i.imgur.com/H1QNIwN.png)


**🗂️ Reference**

>[IT 邦 | |  Day20 localStorage、sessionStorage](https://ithelp.ithome.com.tw/articles/10203525)

>[JavaScript localStorage 的使用](https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/javascript-localstorage-%E7%9A%84%E4%BD%BF%E7%94%A8-e0da6f402453)




>[MDN | | Window: localStorage property](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)



**👩🏻‍💻 筆者碎碎念 :** Google了一下有沒有`localStorage`的語法「Cheatsheet」，可惜沒有。於是，筆者嘗試了製作此生第一張「 [Cheatsheet](http://tinyurl.com/23z2v4ww)」）？有興趣歡迎[下載](http://tinyurl.com/23z2v4ww)吧o(^▽^)o





## [Your first localStorage](https://youtu.be/jS4aFq5-91M?si=qQCkVNE6uIHG2Iqv&t=21405)


### 🏁 Challenge 實作題 (上個單元)


⭐ 嘗試在Build Chrome Extension的檔案，玩玩看`localStorage`吧～


```js
// 1. Save a key-value pair in localStorage

// 2. Refresh the page. Get the value and log it to the console

// 3. Clear localStorage

  

// HINTS:

// localStorage.setItem(key, value)

// localStorage.getItem(key)

// localStorage.clear()

// PS: both key and value need to be strings
```


![](https://i.imgur.com/5UkmB0u.png)


[參考答案](#Challenge-參考答案)





## [Storing arrays in localStorage](https://youtu.be/jS4aFq5-91M?si=sAmUNrISzNYioI-W&t=21639)


[MDN文件中](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)，有說明到「The keys and the values stored with `localStorage` are **always** in the UTF-16 string format」，這意思說，如果我們要儲存資料到 `localStorage`，資料型態必須是「字串」。

那麽問題來了，如何將JS 物件轉換成「字串」呢？這篇[Stockoverflow問答文章](https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage)，有說明到可以使用`JSON.stringify()`和 `JSON.parse()`這兩個語法來轉換。


```js
var names = [];
names[0] = prompt("New member name?");
localStorage.setItem("names", JSON.stringify(names)); // Array 陣列（JS 物件） 轉 String 字串

var storedNames = JSON.parse(localStorage.getItem("names")); // String 字串 轉 Array 陣列 （JS 物件）
```





>[MDN | | JSON.parse()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

>[MDN | | JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

>[MDN | | Window: localStorage property](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)






### 🏁 Challenge 實作題 


```js
let myLeads = `["www.awesomelead.com"]`

  

// 1. Turn the myLeads string into an array

// 2. Push a new value to the array

// 3. Turn the array into a string again

// 4. Console.log the string using typeof to verify that it's a string
```



[參考答案](#Challenge-參考答案)




## [Save the leads to localStorage](https://youtu.be/jS4aFq5-91M?si=ykSfPPHy7qUUA_hq&t=22025)


### 🏁 Challenge 實作題 


```js
let myLeads = []

inputBtn.addEventListener("click", function() {

myLeads.push(inputEl.value)

inputEl.value = ""

// Save the myLeads array to localStorage

// PS: remember JSON.stringify()

renderLeads()

// To verify that it works:

console.log( localStorage.getItem("myLeads") )

})
```



[參考答案](#Challenge-參考答案)



## [Get the leads from localStorage](https://youtu.be/jS4aFq5-91M?si=LBOeZ5XRJXmzBDce&t=22177)


### 🏁 Challenge 實作題 


```js
let myLeads = []
  

// Get the leads from the localStorage

// Store it in a variable, leadsFromLocalStorage

// Log out the variable

  

inputBtn.addEventListener("click", function() {

myLeads.push(inputEl.value)

inputEl.value = ""

localStorage.setItem("myLeads", JSON.stringify(myLeads) )

renderLeads()

console.log( localStorage.getItem("myLeads") )

})
```



[參考答案](#Challenge-參考答案)




## [Truthy & falsy values](https://youtu.be/jS4aFq5-91M?si=j_L2Mf9ZNSKESoKI&t=22411)


**以下是常見的Falsy Value:**


```js
// false

// 0

// "" -> 空的字串

// null -> how you as a developer signalize emptiness

// undefined -> how JavaScript signalizes emptiness

// NaN
```



#### 🖼️ 圖解 - `0` 


前面三個較好理解，我們 `null` 和 `undefined` 稍後會舉例例子，我們想來看 `0` 的例子：


**🌰 情境舉例：** 假如今天汽車還有汽油時（`gas > 0`)，則不用馬上加油站加油，但如果汽車沒有汽油（`gas = 0`)時，則必需左轉去加油站。


![](https://i.imgur.com/DHtLxLx.png)


學過`if..else`條件句的我們，在設定此條件`condition`時，可能會寫`gas > 0`，代表`gas`變數的值大於`0`零時，執行`console.log("繼續直走")`，反之，當`gas`變數的值等於`0`零時，則執行`console.log("右轉去加油")`。


我們在學到`0`零是`falsy value`，我們可以利用這個特性來設定條件`condition`（只寫變數名稱）。當`gas`變數的值不等於`0`零，那麽條件`condition`會判斷為`true`，反之，當`gas`變數的值等於`0`零，那麽條件`condition`會判斷為`false`，因為`0`零本身是`falsy value`。


```js
// Gas

const gas = 10

  
// Before 

if (gas > 0) {

console.log("繼續直走")

} else {

console.log("右轉去加油") 

}

  
// After   

if (gas) {

console.log("繼續直走") // 當 gas 變數的值不等於 0 -> true

} else {

console.log("右轉去加油") // 當 gas 變數的值等於 0 -> false （因為0本身是falsy value）

}
```



#### 🖼️ 圖解 - `null` 


**🌰 情境舉例：** 假如你要開發一個直播(Live stream)APP，有個功能是有觀眾的時候，通知直播主。


![](https://i.imgur.com/9g3gmTC.png)



```js
let currentViewers = null // 一打開直播時，一定沒有任何觀眾

if (currentViewers) { // 如果有觀眾 -> true

// 🔔 通知直播主
console.log("🔔 開始有觀眾囉～")

}
```


這時，如果有觀眾，那麽條件`condition`會判斷為`true`，則會執行`console.log("🔔 開始有觀眾囉～")`:


```js
let currentViewers = null // 一打開直播時，一定沒有任何觀眾

currentViewers = ["jane", "nick"]

if (currentViewers) { // 如果有觀眾 -> true

// 🔔 通知直播主
console.log("🔔 開始有觀眾囉～")

}
```


為何`currentViewers`的起始值不用`[]`空的陣列來代表沒有觀眾呢？因為`[]`空的陣列本身不是`falsy value`，是`truth value`，因此我們使用`null`來作為`currentViewers`的起始值（代表沒有觀眾）。





#### `undefined`

`undefined`相對來說，比較好理解。但容易和`null` 搞混，因為它們都代表「沒有」，以下是`undefined`和`null`差別：



- `null` ： 開發者自行定義的。比方說前面舉的例子，開發者自己定義`currentViewers`的起始值為`null`，代表`一打開直播時，一定沒有任何觀眾` 。


- `undefined` : JS定義的。例如：

```js
const array = []

console.log(array[5]) // array 裡面 什麼都「沒有」，所以 undefined

const object = {}

console.log(object.randomkey) // object 裡面 什麼都「沒有」，也「沒有」randomkey這個key，所以 undefined
```





### 📝 延伸


>[FreeCodeCamp | | JavaScript if Statements, Equality and Truthy/Falsy – Explained with Examples](https://www.freecodecamp.org/news/javascript-if-statement-equality-and-truthy-falsy/)



>[MDN | | Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

>[MDN | | Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)





## [Guess expression: truthy or falsy?](https://youtu.be/jS4aFq5-91M?si=jmMVHUmwc6NancU_&t=22888)


### 🏁 Challenge


```js
// Guess expression

console.log( Boolean("") ) 

console.log( Boolean("0") ) 

console.log( Boolean(100) ) 

console.log( Boolean(null) ) 

console.log( Boolean([0]) ) 

console.log( Boolean(-0) ) 
```



[參考答案](#Challenge-參考答案)



## [Checking localStorage before rendering](https://youtu.be/jS4aFq5-91M?si=luxVPctERSLdG8Br&t=23032)


### 🏁 Challenge


```js
let myLeads = []

// 1. Check if leadsFromLocalStorage is truthy

// 2. If so, set myLeads to its value and call renderLeads()


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
```



[參考答案](#Challenge-參考答案)




## [Make delete button work](https://youtu.be/jS4aFq5-91M?si=EmI-PXc-ns9esadJ&t=23452)


### 🏁 Challenge



```js
let myLeads = []

// 1. Store the delete button in a deleteBtn variable

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

  

if (leadsFromLocalStorage) {

myLeads = leadsFromLocalStorage

renderLeads()

}

  

// 2. Listen for double clicks on the delete button (google it!)

// 3. When clicked, clear localStorage, myLeads, and the DOM
```





[參考答案](#Challenge-參考答案)






## [How function parameters can improve our code](https://youtu.be/jS4aFq5-91M?si=Fht5Qhv-q-WjdYRj&t=23712)


還記得我們在[Passenger counter app](https://tinyurl.com/2cgr5545)，學到的函式`function` 嗎？


![](https://i.imgur.com/cRCMccy.png)




**先來看看語法架構：**

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

```js
function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
  // …
}

```

[W3school](https://www.w3schools.com/js/js_function_parameters.asp)

```js
function _functionName_(_parameter1, parameter2, parameter3_) {  
  // _code to be executed_  
}
```






**🌰 例子：**

我們來看看[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)提供的例子：

「In JavaScript, function parameters default to [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined).」，在 JavaScript 中，函式的參數`parameters`預設值都為 `undefined`。



```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN ! 我們沒有給b「實質」的參數 argument
```



我們也可以對函式的參數`parameters`來設定預設值。



```js
function multiply(a, b = 1) { // 設定 b = 1

return a * b;

}

console.log(multiply(5, 2)) // 10 
// 設定 2 為 b 傳入的「實質」參數 argument

console.log(multiply(5)) // 5
```



##### 應用到我們的APP


我們將`renderLeads()`函式改為`render(Leads)`，這是為了讓這個函式更reusable(可重複使用的)。假如，我們今天有其他陣列 Array 也需要通過此函式處理（渲染HTML元素），這時，我們只需要回呼（callback)此函式，並將其他陣列 Array 作為「實質」的參數 argument。


```js
let myLeads = []

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

const deleteBtn = document.getElementById("delete-btn")

  

if (leadsFromLocalStorage) {

myLeads = leadsFromLocalStorage

render(myLeads) // callback 函式 ，myLeads作為「實質」傳入的「實質」參數 argument

}

  

function render(Leads) { // Leads 作為此函式的傳入的參數 parameter

let listItems = ""

for (let i = 0; i < Leads.length; i++) {

listItems += `<li><a target='_blank' href='${Leads[i]}'>${Leads[i]}</a></li>`

// console.log(listItems)

}

ulEl.innerHTML = listItems

}

  

deleteBtn.addEventListener("dblclick",function(){

localStorage.clear()

myLeads = []

render(myLeads) // callback 函式 ，myLeads作為「實質」傳入的「實質」參數 argument

})

  

saveEl.addEventListener("click", saveLead)

  
  

function saveLead() {

myLeads.push(inputEl.value)

inputEl.value = ""

localStorage.setItem("myLeads", JSON.stringify(myLeads))

render(myLeads) // callback 函式 ，myLeads作為「實質」傳入的「實質」參數 argument
}
```


### 📝 延伸


>[談談JavaScript中函式的參數(parameter),arguments和展開運算子(spread)](https://pjchender.blogspot.com/2016/04/javascriptparameterargumentsspread.html)




**🗂️ Reference**

>[如何分辨method 和 function 以及 argument 和 parameter 的差異](https://givemepass.blogspot.com/2020/01/method-function-argument-parameter.html)


>[W3school | | JavaScript Function Parameters](https://www.w3schools.com/js/js_function_parameters.asp)

>[MDN | | Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)









## [Write your first function parameter](https://youtu.be/jS4aFq5-91M?si=dx4j-A35RsvVpWC9&t=24069)


### 🏁 Challenge


```js
const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name) {

// Rewrite the expression using template literals

welcomeEl.textContent = greeting + ", " + name + " 👋"

}

greetUser("Howdy", "James")
```




[參考答案](#Challenge-參考答案)





## [Functions with multiple params](https://youtu.be/jS4aFq5-91M?si=A9DKclCi6BgDBRX7&t=24280)


### 🏁 Challenge 1


⭐ [Template strings](#Template-strings) 複習題


```js
const welcomeEl = document.getElementById("welcome-el")

  

function greetUser(greeting, name) {

// Rewrite the expression using template literals

welcomeEl.textContent = greeting + ", " + name + " 👋"

}

  

greetUser("Howdy", "James")
```



[參考答案](#Challenge-參考答案)





### 🏁 Challenge 2



```js
const welcomeEl = document.getElementById("welcome-el")

  

// Add the ability to choose the emoji as well!

  

function greetUser(greeting, name) {

welcomeEl.textContent = `${greeting}, ${name} 👋`

}

  

greetUser("Howdy", "James")
```



[參考答案](#Challenge-參考答案)




## [Numbers as function params](https://youtu.be/jS4aFq5-91M?si=JsiAodca38NFk84B&t=24474)


### 🏁 Challenge 



```js
// Create a function, add(), that adds two numbers together and returns the sum

console.log( add(3,4) ) // should log 7

console.log( add(9, 102) ) // should log 111
```




[參考答案](#Challenge-參考答案)






## [Arguments vs Params](https://youtu.be/jS4aFq5-91M?si=a4c7T6MpPT34vc4Z&t=24580)


前面在說明函式的參數時，你會發現它的英文有兩個 `parameter` 和 `argument` ，那麽它們到底有什麼差別呢？影片中，老師也有提到包含他，很多開發者都會搞混。

- `parameter` 是我們在函式定義的參數，換句話，就是在函式「裡面」（It’s a **parameter** when you’re **inside** the definition.）

- `argument` 是我們在設定的「實質」參數換句話，就是在函式「外面」（It’s an **argument** when you’re **outside** the definition.）



![](https://tinyurl.com/2dfvz8en)


(圖片來源：[www.typealias.com](https://typealias.com/guides/parameters-arguments/))



```js
//                 greeting、name 作為此函式的傳入的參數 parameter 
function greetUser(greeting, name) {

welcomeEl.textContent = `${greeting}, ${name} 👋`

}

  

greetUser("Howdy", "James")

  
  

function add(num1, num2) {

return num1 + num2

}

  
// 傳入的「實質」參數 argument
add(3, 4)
```



**🗂️ Reference**

>[如何分辨method 和 function 以及 argument 和 parameter 的差異](https://givemepass.blogspot.com/2020/01/method-function-argument-parameter.html)

>[Parameters and Arguments: An Easy Way to Remember the Difference](https://typealias.com/guides/parameters-arguments/)


**👩🏻‍💻 筆者碎碎念 :** 強烈推薦一定要看看這篇文章[Parameters and Arguments: An Easy Way to Remember the Difference](https://typealias.com/guides/parameters-arguments/)，雖然是在講`Kotlin`語法，但觀念是一樣。






### 🏁 Challenge  觀念題


⭐ 這題是考對`parameter` 和 `argument` 差別，是否熟悉。


```js
// What are greeting and name?

// What are "Howdy" and "James"?

// What are num1 and num2?

// What are 3 and 4?




function greetUser(greeting, name) {

welcomeEl.textContent = `${greeting}, ${name} 👋`

}

  


let hi = "Howdy"

greetUser(hi, "James")

  
  

function add(num1, num2) {

return num1 + num2

}

  

add(3, 4)
```



[參考答案](#Challenge-參考答案)





## [Arrays as params](https://youtu.be/jS4aFq5-91M?si=BxCBG7YeWgLaQr6R&t=24786)


### 🏁 Challenge


```js
// Create a function, getFirst(arr), that returns the first item in the array


// Call it with an array as an argument to verify that it works
```




[參考答案](#Challenge-參考答案)






## [Refactor `renderLeads()` to use parameter](https://youtu.be/jS4aFq5-91M?si=au4U4Xi_wT7_gppj&t=24902)


### 🏁 Challenge （上個單元實作題）


⭐ 這題其實影片中，老師已經示範過了，嘗試自己寫寫看吧～


```js
let myLeads = []

if (leadsFromLocalStorage) {

myLeads = leadsFromLocalStorage

renderLeads()

}

// Refector the function so that it takes a parameter, leads, that it uses

// instead of the global myLeads variable. Remember to update all invocations

// of the function as well.

  

function renderLeads() {

let listItems = ""

for (let i = 0; i < myLeads.length; i++) {

listItems += `

<li>

<a target='_blank' href='${myLeads[i]}'>

${myLeads[i]}

</a>

</li>

`

}

ulEl.innerHTML = listItems

}

  

deleteBtn.addEventListener("dblclick", function() {

localStorage.clear()

myLeads = []

renderLeads()

})

  

inputBtn.addEventListener("click", function() {

myLeads.push(inputEl.value)

inputEl.value = ""

localStorage.setItem("myLeads", JSON.stringify(myLeads) )

renderLeads()

})
```




[參考答案](#Challenge-參考答案)



## [Create the tabBtn](https://youtu.be/jS4aFq5-91M?si=pBu5GZ9srKc3D3VR&t=25006)


### 🏁 Challenge


```html
<html>

<head>

<link rel="stylesheet" href="index.css">

</head>

<body>

<input type="text" id="input-el">

<button id="input-btn">SAVE INPUT</button>

<button id="tab-btn">SAVE TAB</button>

<button id="delete-btn">DELETE ALL</button>

<ul id="ul-el">

</ul>

<script src="index.js"></script>

</body>

</html>
```


```js
// 1. Grab the SAVE TAB button and store it in a tabBtn variable


const tabs = [

{url: "https://www.linkedin.com/in/per-harald-borgen/"}

]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
```




[參考答案](#Challenge-參考答案)







## [Save the tab url](https://youtu.be/jS4aFq5-91M?si=HxKLJxYObd_mVSuI&t=25207)


### 🏁 Challenge


```js
const tabs = [

{url: "https://www.linkedin.com/in/per-harald-borgen/"}

]

  

tabBtn.addEventListener("click", function(){

// Save the url instead of logging it out

console.log(tabs[0].url)

})

  

function render(leads) {

let listItems = ""

for (let i = 0; i < leads.length; i++) {

listItems += `

<li>

<a target='_blank' href='${leads[i]}'>

${leads[i]}

</a>

</li>

`

}

ulEl.innerHTML = listItems

}
```




[參考答案](#Challenge-參考答案)







## [How to get the current tab?](https://youtu.be/jS4aFq5-91M?si=ZymIAZtji6tA2AcS&t=25366)/ [Use Chrome API to get tab](https://youtu.be/jS4aFq5-91M?si=orNlBFQlFBYsAk3x&t=25629)


`SAVE TAB` 功能，是讓使用者可以儲存正在瀏覽網頁的「網址」。然而，影片中，老師有先創建一個陣列 Array `tabs`，但這只是demo而已。那麽到底要如何實現此功能呢？


```js
const tabs = [

{url: "https://www.linkedin.com/in/per-harald-borgen/"}

]
```



當然，就是要[問Google 大神](https://letmegooglethat.com/?q=chrome+extension+get+current+tab)啦～


![](https://i.imgur.com/6AOSs9z.png)



我們先看第一個搜尋結果 - Chrome 的 開發者文件。在文件有說明到，我們需要使用Chrome 的 「API」。（後面會補充什麼是「API」）



![](https://i.imgur.com/qzowcts.png)


如果要在使用這個API，必需在`manifest.json`檔案中，加上以下語法：

```json
"permissions": [

"tabs"

]
```

![](https://i.imgur.com/yRITsRv.png)


為了更快得到解答，老師建議我們可以在第二個搜尋結果 - Stockoverflow來找答案。


![](https://i.imgur.com/xOUT1Dg.png)


我們要使用第一個解答的程式碼。（筆者測試過，`manifest_version` 版本3還可以執行）


```js
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  // since only one tab should be active and in the current window at once
  // the return variable should only have one entry
  var activeTab = tabs[0];
  var activeTabId = activeTab.id; // or do whatever you need
});

```


![](https://i.imgur.com/OQYPrv4.png)

在第三個解答中，我們可以得知`tabs`的資料是物件Object外面包陣列Array，而我們要的網址就在`url`這個`key`的`value`裡。

![](https://i.imgur.com/VEqDLho.png)


於是我們將JS 程式碼修改成：


```js
tabBtn.addEventListener("click",function(){

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

myLeads.push(tabs[0].url)

localStorage.setItem("myLeads", JSON.stringify(myLeads) )

render(myLeads)

});
  

})
```

也記得修改`manifest.json`檔案：

```json
{

"manifest_version": 3,

"version": "1.0",

"name": "Leads tracker",

"action": {

"default_popup": "index.html",

"default_icon": "icon.png"

},

"permissions": [

"tabs"

]

}
```


這樣，我們的Chrome Extension - Leads Tracker 完成啦～


![](https://i.imgur.com/Mgw4giJ.gif)




#### 解析 `chrome.tabs` API

- `active: true` : 假如使用者在瀏覽器開了許多分頁呢？我們要告訴API，我們要取得的網址是使用者正在瀏覽的分頁。

![](https://i.imgur.com/2cg4Yt5.jpg)


- `currentWindow: true` : 假如使用者在瀏覽器開了許多分頁又有許多視窗呢？我們要告訴API，我們要取得的網址是使用者正在瀏覽的視窗分頁。


![](https://i.imgur.com/shzgkFw.jpg)


```js
//                  正在瀏覽的分頁   正在瀏覽的視窗
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

});
```



>[Chrome Developers | | chrome.tabs](https://developer.chrome.com/docs/extensions/reference/tabs/)



#### 📝 延伸 - API 是什麼東東？


筆者超愛這張圖～解釋了關於API(Application Programming Interface)的一切。


![](https://i.imgur.com/qyhDxWg.png)



**👩🏻‍💻 筆者碎碎念:** 如果這張圖片看不懂，推薦這篇中文文章👉🏻[API 到底是什麼？ 用白話文帶你認識](https://medium.com/codingbar/api-%E5%88%B0%E5%BA%95%E6%98%AF%E4%BB%80%E9%BA%BC-%E7%94%A8%E7%99%BD%E8%A9%B1%E6%96%87%E5%B8%B6%E4%BD%A0%E8%AA%8D%E8%AD%98-95f65a9cfc33)



>圖片來源：[@Rapid_API](https://twitter.com/Rapid_API/status/1607913741215207424?s=20)





API(Application Programming Interface)，讓原本兩個（或多個）不相干的應用程式（例如：我們的Chrome Extension - Leads Tracker和Chrome 瀏覽器），[有一座橋樑可以取得我們想要的資料](https://medium.com/codingbar/api-%E5%88%B0%E5%BA%95%E6%98%AF%E4%BB%80%E9%BA%BC-%E7%94%A8%E7%99%BD%E8%A9%B1%E6%96%87%E5%B8%B6%E4%BD%A0%E8%AA%8D%E8%AD%98-95f65a9cfc33#:~:text=Interface%20%E7%9A%84%E7%B8%AE%E5%AF%AB%EF%BC%8C-,%E6%89%AE%E6%BC%94%E6%87%89%E7%94%A8%E7%A8%8B%E5%BC%8F%E5%92%8C%E6%87%89%E7%94%A8%E7%A8%8B%E5%BC%8F%E4%B9%8B%E9%96%93%E7%9A%84%E6%A9%8B%E6%A8%91%E3%80%82,-API%20%E5%B0%B1%E5%83%8F%E4%B8%80%E5%80%8B)。以我們的Chrome Extension來說，`chrome.tabs` 像一座橋一樣，讓我們可以取得取得使用者在瀏覽的分頁網址。


![](https://i.imgur.com/CdD0jhQ.png)



##### 🗂️ Reference

>[API 到底是什麼？ 用白話文帶你認識](https://medium.com/codingbar/api-%E5%88%B0%E5%BA%95%E6%98%AF%E4%BB%80%E9%BA%BC-%E7%94%A8%E7%99%BD%E8%A9%B1%E6%96%87%E5%B8%B6%E4%BD%A0%E8%AA%8D%E8%AD%98-95f65a9cfc33)







## 筆者自行補充


>[MDN | | Window: load event](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)




## Recap






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


### [Improving performance of our app](https://youtu.be/jS4aFq5-91M?si=zQnjumvzQx4CPdCj&t=19276)



```js
// 1. Create a variable, listItems, to hold all the HTML for the list items. Assign it to an empty string to begin with

let listItems = ""

for (let i = 0; i < myLeads.length; i++) {

// 2. Add the item to the listItems variable instead of the ulEl.innerHTML

listItems += "<li>" + myLeads[i] + "</li>"

}

// 3. Render the listItems inside the unordered list using ulEl.innerHTML

  

ulEl.innerHTML = listItems
```





### [Clear input field](https://youtu.be/jS4aFq5-91M?si=OWX3CPF9X_DQlx6T&t=19600)


```js
function saveLead() {

myLeads.push(inputEl.value)

console.log(myLeads)

// Clear out the input field

renderLeads()

inputEl.value = ""

}
```


>[Stackoverflow | | HTML how to clear input using javascript?](https://stackoverflow.com/questions/17237772/html-how-to-clear-input-using-javascript)




### [Write your first Template strings](https://youtu.be/jS4aFq5-91M?si=53DzGytUtwY7ysmv&t=20154)


```js
// template strings/literals

  

const recipient = "James"

  

// Refactor the email string to use template strings

const email = `Hey ! ${recipient}! How is it going? Cheers Per`

  

console.log(email)
```



### [Make template string more dynamic](https://youtu.be/jS4aFq5-91M?si=QYKyqomcjZOKMnAL&t=20189)


```js
// template strings/literals

const recipient = "James"

// Create a new variable, sender, and set its value to your name

const sender = "Michelle"

// Use your sender variable instead of "Per"

const email = `Hey ! ${recipient}! How is it going? Cheers ${sender}`

  

console.log(email)
```




### [Refactor app to use template string](https://youtu.be/jS4aFq5-91M?si=T7CBSUz2TYZ1JOhu&t=20463)


```js
function renderLeads() {

let listItems = ""

for (let i = 0; i < myLeads.length; i++) {

listItems += `<li><a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`

console.log(listItems)

}

ulEl.innerHTML = listItems

}
```



### [Your first localStorage](https://youtu.be/jS4aFq5-91M?si=qQCkVNE6uIHG2Iqv&t=21405)



```js
// localStorage.setItem("myName", "Per Harald Borgen")

// let name = localStorage.getItem("myName")

// console.log(name)

// localStorage.clear()

  
  
  

// 1. Save a key-value pair in localStorage

// 2. Refresh the page. Get the value and log it to the console

// 3. Clear localStorage

  

// HINTS:

// localStorage.setItem(key, value)

// localStorage.getItem(key)

// localStorage.clear()

// PS: both key and value need to be strings
```




### [Storing arrays in localStorage](https://youtu.be/jS4aFq5-91M?si=sAmUNrISzNYioI-W&t=21639)


```js
let myLeads = `["www.awesomelead.com"]`
  

// 1. Turn the myLeads string into an array

myLeads = JSON.parse(myLeads)

// 2. Push a new value to the array

myLeads.push("www.example.com")

// 3. Turn the array into a string again

myLeads = JSON.stringify(myLeads)

// 4. Console.log the string using typeof to verify that it's a string

console.log(typeof myLeads) // log out string
```


### [Save the leads to localStorage](https://youtu.be/jS4aFq5-91M?si=ykSfPPHy7qUUA_hq&t=22025)



```js
let myLeads = []

saveEl.addEventListener("click", saveLead)

function saveLead() {

myLeads.push(inputEl.value)

inputEl.value = ""

// Save the myLeads array to localStorage

// PS: remember JSON.stringify()

localStorage.setItem("myLeads",JSON.stringify(myLeads))

renderLeads()

// To verify that it works:

console.log( localStorage.getItem("myLeads") )

}
```





### [Get the leads from localStorage](https://youtu.be/jS4aFq5-91M?si=LBOeZ5XRJXmzBDce&t=22177)


```js
// Get the leads from the localStorage - PS: JSON.parse()

// Store it in a variable, leadsFromLocalStorage

// Log out the variable

  

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)
```





### [Guess expression: truthy or falsy?](https://youtu.be/jS4aFq5-91M?si=jmMVHUmwc6NancU_&t=22888)


```js
console.log( Boolean("") ) // false

console.log( Boolean("0") ) // true

console.log( Boolean(100) ) // true

console.log( Boolean(null) ) // false

console.log( Boolean([0]) ) // true

console.log( Boolean(-0) ) // false
```






### [Checking localStorage before rendering](https://youtu.be/jS4aFq5-91M?si=luxVPctERSLdG8Br&t=23032)


```js
let myLeads = []

// 1. Check if leadsFromLocalStorage is truthy

// 2. If so, set myLeads to its value and call renderLeads()

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {

myLeads = leadsFromLocalStorage

renderLeads()

}
```


### [Make delete button work](https://youtu.be/jS4aFq5-91M?si=EmI-PXc-ns9esadJ&t=23452)



```js
// 1. Store the delete button in a deleteBtn variable

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

const deleteBtn = document.getElementById("delete-btn")

  

if (leadsFromLocalStorage) {

myLeads = leadsFromLocalStorage

renderLeads()

}

  

// 2. Listen for double clicks on the delete button (google it!)

// 3. When clicked, clear localStorage, myLeads, and the DOM

  

deleteBtn.addEventListener("dblclick",function(){

localStorage.clear()

myLeads = []

renderLeads()

})
```




### [Write your first function parameter](https://youtu.be/jS4aFq5-91M?si=dx4j-A35RsvVpWC9&t=24069)



```js
const welcomeEl = document.getElementById("welcome-el")

  

// Give the function a parameter, greeting, that replaces "Welcome back"

function greetUser(greeting) {

welcomeEl.textContent = greeting + ", Per Harald Borgen 👋"

}

  

greetUser("Howdy")
```




### [Functions with multiple params](https://youtu.be/jS4aFq5-91M?si=A9DKclCi6BgDBRX7&t=24280)


#### 🏁 Challenge 1


```js
const welcomeEl = document.getElementById("welcome-el")

  

function greetUser(greeting, name) {

  

// Rewrite the expression using template literals

  

welcomeEl.textContent = `${greeting} , ${name} 👋`

  

}

  

greetUser("Howdy", "James")
```



#### 🏁 Challenge 2


```js
const welcomeEl = document.getElementById("welcome-el")

  

// Add the ability to choose the emoji as well!

  

function greetUser(greeting, name,emoji) {

welcomeEl.textContent = `${greeting}, ${name} ${emoji}`

}

  

greetUser("Howdy", "James","👋🏻")
```





### [Numbers as function params](https://youtu.be/jS4aFq5-91M?si=JsiAodca38NFk84B&t=24474)



```js
// Create a function, add(), that adds two numbers together and returns the sum

function add(num1,num2){

return num1 + num2

}

  
  

console.log( add(3,4) ) // should log 7

console.log( add(9, 102) ) // should log 111
```





### [Arguments vs Params](https://youtu.be/jS4aFq5-91M?si=a4c7T6MpPT34vc4Z&t=24580)


```js
// What are greeting and name? parameters

// What are "Howdy" and "James"? arguments

// What are num1 and num2? parameters

// What are 3 and 4? arguments
```



### [Arrays as params](https://youtu.be/jS4aFq5-91M?si=BxCBG7YeWgLaQr6R&t=24786)


```js
// Create a function, getFirst(arr), that returns the first item in the array

  

function getFirst(arr) {

return arr[0]

}

  

let firstCard = getFirst([10, 2, 5])

  

console.log(firstCard)

  

// Call it with an array as an argument to verify that it works
```








### [Refactor `renderLeads()` to use parameter](https://youtu.be/jS4aFq5-91M?si=au4U4Xi_wT7_gppj&t=24902)



```js
let myLeads = []

  

if (leadsFromLocalStorage) {

myLeads = leadsFromLocalStorage

render(myLeads)

}

  
  

// Refector the function so that it takes a parameter, leads, that it uses

// instead of the global myLeads variable. Remember to update all invocations

// of the function as well.

  

function render(leads) {

let listItems = ""

for (let i = 0; i < myLeads.length; i++) {

listItems += `

<li>

<a target='_blank' href='${leads[i]}'>

${leads[i]}

</a>

</li>

`

}

ulEl.innerHTML = listItems

}

  

deleteBtn.addEventListener("dblclick", function() {

localStorage.clear()

myLeads = []

render(myLeads)

})

  

inputBtn.addEventListener("click", function() {

myLeads.push(inputEl.value)

inputEl.value = ""

localStorage.setItem("myLeads", JSON.stringify(myLeads) )

render(myLeads)

})
```





### [Create the tabBtn](https://youtu.be/jS4aFq5-91M?si=pBu5GZ9srKc3D3VR&t=25006)



```js
// 1. Grab the SAVE TAB button and store it in a tabBtn variable

const tabBtn = document.getElementById("tab-btn")

  

const tabs = [

{url: "https://www.linkedin.com/in/per-harald-borgen/"}

]

  

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console

tabBtn.addEventListener("click",function(){

console.log(tabs[0].url)

})
```



### [Save the tab url](https://youtu.be/jS4aFq5-91M?si=HxKLJxYObd_mVSuI&t=25207)


```js
const tabs = [

{url: "https://www.linkedin.com/in/per-harald-borgen/"}

]

  
  
  

tabBtn.addEventListener("click",function(){

// Save the url instead of logging it out

myLeads.push(tabs[0].url)

localStorage.setItem("myLeads", JSON.stringify(myLeads) )

render(myLeads)

})
```