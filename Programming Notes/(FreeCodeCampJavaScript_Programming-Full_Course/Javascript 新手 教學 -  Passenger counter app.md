# 🔗 Section links 

### [✏️ 學習筆記](#學習筆記)

[Setting up file](#Setting-up-file)

[Create variable](#Create-variable)

[Mathematical operations](#Mathematical-operations)

[Reassigning & incrementing](#Reassigning-&-incrementing)

[onclick event listener](#onclick-event-listener)

[Write your first function](#Write-your-first-function)

[Function that logs sum](#Function-that-logs-sum)

[Function that increments](#Function-that-increments)

[Increment on clicks](#Increment-on-clicks)

[Display count](Display-count)

[Document Object Model (DOM) ](#Document-Object-Model-(DOM) )

[Display count / innerText](#Display-count-/-innerText)

[Create save button](#Create-save-button)

[What is string?](#What-is-string?)

[First string variable](#First-string-variable)

[Log greeting to console](#Log-greeting-to-console)

[Strings vs. Numbers](#Strings-vs.-Numbers)

[Render welcome message](#Render-welcome-message)

[Improve the message with string concatenation](#Improve-the-message-with-string-concatenation)

[Use plus equal for count](#Use-plus-equal-for-count)

[Create save feature](#Create-save-feature)

[Debugging online](#Debugging-online)

[Set count to 0](#Set-count-to-0)

### [🏁 Recap Challenge](#Recap-Challenge)

[Variables practice](#Variables-practice)

[Concatenate strings](#Concatenate-strings)

[Incrementing & decrementing](#Incrementing-&-decrementing)

[Strings & numbers](#Strings-&-numbers)

[Rendering error message](#Rendering-error-message)

[Calculator challenge](#Calculator-challenge)

### [⭐ 復刻 APP](#復刻-APP)

### [⭐ Solo Project 學以致用](#學以致用-Solo-Project)

### [🏁 Challenge 題庫](link)

###  [🏁 Challenge 參考答案](#Challenge-參考答案)



# 學習筆記

## [Setting up file](https://youtu.be/jS4aFq5-91M?t=279)

### 在 HTML檔案中，嵌入Javascript 程式碼

使用`<script> </script>` 標籤，來嵌入JS程式碼。

範例碼：
```  html
<!-- HTML -->

<html>

<head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">

<link rel="stylesheet" href="index.css">

</head>

<body>

<h1>People entered:</h1>

<h2 id="count-el">0</h2>

<script>

document.getElementById("count-el").innerText = 5;

</script>

</body>

</html> 
```

![](https://i.imgur.com/gPg30zs.jpg)

> [MDN Docs](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/script)

### 在 HTML檔案中，引入Javascript 程式碼

使用`<script scr="{Javascript 檔案路徑}"> </script>` 標籤，來嵌入JS程式碼<u>檔案</u>。

範例碼：
```  html
<!-- HTML -->

<html>

<head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">

<link rel="stylesheet" href="index.css">

</head>

<body>

<h1>People entered:</h1>

<h2 id="count-el">0</h2>

<script src="index.js"></script>

</body>

</html>
```  


![](https://i.imgur.com/Nh75v77.jpg)

![](https://i.imgur.com/ij8qwSZ.jpg)

> [MDN Docs](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/script)




## [Create variable](https://youtu.be/jS4aFq5-91M?t=462)

### 註解Javascript 程式碼

如何註解Javascript 程式碼？我們可以使用` // `來註解Javascript 程式碼。這也代表該程式碼註解後，不會執行。

範例碼：

```  js
// document.getElementById("count-el").innerText = 5;
```  

![](https://i.imgur.com/kGIxLQw.jpg)

圖片中，因右邊畫面的JS 程式碼被註解，程式碼不會執行。所以左邊畫面（紅色方框內）的<u>數字為0而不是5</u>。

##### 📝 **延伸**

除了使用` // `來註解程式碼，我們還可以有方式：
` /* {要註解的程式碼} */ `

範例碼：

```  js
/* document.getElementById("count-el").innerText = 5;*/
```  

> [w3schools](https://www.w3schools.com/js/js_comments.asp)

### 變數

在JS，我們需要以某種形式來儲存一個資料值的容器。我們以`let`來宣告（命名）變數名稱。

範例碼：

```  js
let count = 0;
```  

我們可以將這段程式碼理解成一句英文句子：Let `count` be `zero`.(讓`count`是`0`)。

##### **📝 延伸-宣告方式**

JS 有三種宣告方式（ES6增加let和const關鍵字來宣告變數），包含了：

[`var`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/var)

宣告一個可隨意更改其內容的變數

[`let`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/let)

宣告一個可隨意更改其內容的區塊區域變數

[`const`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/const)

宣告一個只可讀取的不可變常數


##### 📝 **延伸-容器中的值**

容器中的值，可以是：

- Number 數字 – 25、200
    
- String字串 – "HI"、'Hello' (字串前後必須加上單引號`' '`或雙引號`" "`）
    
- Booleans布林 – true、false
    
- Array陣列 - [1,2,3]、['Jason','Lily',...]
    
- Object物件 - {name:"Rosemary",age:18,height:168}



### 控制台

我們可以透過`console.log()`來檢查我們的程式碼的數值。

範例碼：

```js
let count = 0;

console.log(count);
```

這樣，程式碼的數值顯示在控制台。（紅色方框內）
![](https://i.imgur.com/g7vlzk2.png)

> [MDN Docs](https://developer.mozilla.org/zh-TW/docs/Web/API/console)

### 🏁 Challenge

1. 創建一個變數宣告為`myAge`，接著為這個變數賦予你的歲數的值
   Create a variable, myAge, and set its Value to your age
   
2. 將`myAge`這個變數顯示在控制台。
   Log the myAge variable to the console

[參考答案](#Challenge-參考答案)

### ⚠️ 注意

如果`console.log()`這個語法在變數前面，控制台則會顯示`ReferenceError: Cannot access 'myAge' before initialization`。（Javascript是由上往下讀程式碼）

範例碼：

```js
console.log(count);

let count = 0;
```

![](https://i.imgur.com/BaoPadG.png)


### 🗂️ Reference

[初探JavaScript - JS變數(Variables)](https://ithelp.ithome.com.tw/articles/10234084)


## [Mathematical operations](https://youtu.be/jS4aFq5-91M?t=749)

### JavaScript中的基本數學 - 數字和運算符

我們可以透過JS來計算基本的數學。

範例碼：

```js
let count1 = 5 + 7;

console.log(count1);

let count2 = 5 - 7;

console.log(count2);

let count3 = 5 / 7;

console.log(count3);

let count4 = 5 * 7;

console.log(count4);
```

![](https://i.imgur.com/ly0IIii.png)

> [MDN Docs](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/First_steps/Math)

### 變數取代數字

在真正的開發環境中，程式碼在計算時，我們往往會以變數取代數字。

範例碼 1：

```js
let firstBatch = 5;

count = firstBatch;

console.log(count);
```


![](https://i.imgur.com/0qC8Mnn.png)

範例碼 2：

```js
let firstBatch = 5;

let secondBatch = 7;

count = firstBatch + secondBatch;

console.log(count);
```

![](https://i.imgur.com/kUT58Nl.png)


### 🏁 Challenge

1.  創建兩個宣告（命名為）變數，分別是`myAge`和`humanDogRatio`
  Create two variable, myAge and humanDogRatio

2. 將這兩個變數相乘後，將其計算的值，儲存於`myDogAge`變數中。
   Multiply the two together and store the result in myDogAge

3. 將`myDogAge`這個變數顯示在控制台。
   Log myDogAge to the console
   
[參考答案](#Challenge-參考答案)

## [Reassigning & incrementing](https://youtu.be/jS4aFq5-91M?t=977)

我們可以重新分配變數的值。因Javascript是由上往下讀程式碼，所以同樣的變數`count`，JS只會執行最後一個變數`count`的值。

範例碼：

```js
let count = 5;

count = 3;

count = 1;

console.log(count);
```

![](https://i.imgur.com/Y5pIkvv.png)

### ✋🏻 實作

這個單元，我們是要做一個計乘客人數的應用程式（Passenger counter app）。那麽，如何以我們目前所學到的JS，來coding呢？

範例碼：

```js
let count = 5;

// count + 1

count = count + 1;

console.log(count);
```

`count = count + 1;` 這段碼乍看之下可能很奇怪，等號 `=` 兩側的值應該都相等，但其實我們仔細解析此程式碼，`count + 1;`是 `5 + 1`。`count`顯示在控制台console的值為`6`。也就是說，這段碼其實是`6 = 5 + 1;` ，所以等號 `=` 兩側的值是相等的。

### ⚠️ 注意

不是每個變數的宣告方式，都可以重新分配變數的值。（後面我們會提到）

[`var`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/var)

宣告一個可隨意更改其內容的變數

[`let`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/let)

宣告一個可隨意更改其內容的區塊區域變數

[`const`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/const)

宣告一個只可讀取的不可變常數

### 🏁 Challenge

1. 創建一個宣告（命名為）`bonusPoints` 變數，初始設定的值為50。接著，將其值增加到100。
  Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.

2. 將其值增減到25，最後增加到25。
  Decrease it down to 25, and then finally increase it to 70

3. 每個設定變數值的步驟後，將其值（Console. Log ）顯示在控制台。
   Console. Log the value after each step

[參考答案](#Challenge-參考答案)

## [onclick event listener](https://youtu.be/jS4aFq5-91M?t=1299)

我們要如何在應用程式的介面上，觸法JS的程式碼呢？我們透過「事件監聽」（event listener)來實現。

範例碼：

```html
<!-- HTML -->

<!-- Create a INCREMENT button with the id=increment-btn" -->

<button id="increment-btn" onclick="increment()">INCREMENT</button>
```

在這段程式碼中，我們加入了`onclick`事件監聽（event listener)，這代表當使用者按一次按鈕時，則會執行`increment()`函式的程式碼。

但我們的JS檔案，並沒有`increment()`函數。所以當使用者按一次按鈕時，並没有發生「事件」。

我們回到JS檔案，寫一個函式。

範例碼：

```js
function increment(){

console.log("The button was clicked")

}
```

這樣當使用者按一次按鈕時，則會（觸法）執行`increment()`函數的程式碼。
而我們在`increment()`函數中編寫了將`"The button was clicked"`（Console. Log ）顯示在控制台。

### Recap

透過以上的程式碼，就完成了我們按鈕的事件監聽（event listener)。

當我們的使用者，按一次按鈕（onclick)後，透過`onclick`事件監聽（event listener)後，

```html
<!-- HTML -->

<!-- Create a INCREMENT button with the id=increment-btn" -->

<button id="increment-btn" onclick="increment()">INCREMENT</button>
```

觸法了`increment()`函數。接著，執行`increment()`函式中的JS程式碼，也就是`console.log("The button was clicked")`。

```js
function increment(){

console.log("The button was clicked")

}
```

![](https://i.imgur.com/73DUKZ4.gif)

#### 🖼️ **圖解**

![](https://i.imgur.com/LSMUxmr.png)

🌰 **例子**

![](https://i.imgur.com/521bNWE.png)

>[事件監聽（event listener) 列表 ｜｜MDN Docs](https://developer.mozilla.org/en-US/docs/Web/Events)


## [Using functions to write less code](https://youtu.be/jS4aFq5-91M?t=1510)

### ✋🏻 實作

在這個實作中，我們透過編寫程式碼，讓控制台模擬賽車競賽的倒數計時器，當一場新的競賽開始時，倒數計時器會從五倒數到一。

「函式」（functions），我們可以不必一直重複編寫一樣的程式碼。函式（functions）就像我們請JS記住一個指令，如同這個例子，我們下指令給JS，請它在控制台（console)從五倒數到一。

範例碼：

```js
// Setting up the the race

console.log(5)

console.log(4)

console.log(3)

console.log(2)

console.log(1)

// GO!

// Players are running the race

// Race is finished!

// Get ready for a new race 

console.log(5)

console.log(4)

console.log(3)

console.log(2)

console.log(1)

```

### 🐶

當我們寫一個函函式時，如果沒有調用（callback)函函式時，則不會執行。我們可以把JS函函式想像成一隻狗狗，我們寫函函式時像是在訓練一隻狗狗做特定動作，如果我們沒有對狗狗「下指令」（callback），狗狗當然不會做我們剛剛教牠的動作，這就像我們沒有調用（callback)函式，函式的程式碼不會執行。

範例碼 - 沒有調用（callback)函函式：

```js
function countDown () {

console.log(5)

console.log(4)

console.log(3)

console.log(2)

console.log(1)

}
```

![](https://i.imgur.com/dvMC6y7.png)


範例碼 - 調用（callback)函式：

```js
function countDown () {

console.log(5)

console.log(4)

console.log(3)

console.log(2)

console.log(1)

}

countDown () // 調用 （callback）countDown 函數
```

![](https://i.imgur.com/WgCX97R.png)

#### 🖼️ **圖解**

![](https://i.imgur.com/WKEc805.png)

> [MDN Docs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function)

## [Write your first function](https://youtu.be/jS4aFq5-91M?t=1731)

### 🏁 Challenge

1. 創建一個函式（函式名稱自行決定）
   Create a function (you decide the name) that Logs out the number 42 to the console
   
2. 調用（callback) 此函式
  Call/ invoke the function

[參考答案](#Challenge-參考答案)

> [MDN Docs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function)


## [Function that logs sum](https://youtu.be/jS4aFq5-91M?t=1775)

### 🏁 Challenge

這是一個賽車競賽選手的成績。請透過創建一個函式來加總這位賽車競賽選手這場競賽總共花了多少時間。
Create a function that Logs out the sum of all the Lap times

```js
let lap1 = 34

let lap2 = 33

let lap3 = 36
```

[參考答案](#Challenge-參考答案)


### ⚠️ 注意 - 關於 `let` 變數的宣告方式

前面的📝延伸筆記有提到JS變數不同的宣告方式。`let `是可隨意更改其內容的「區塊區域」變數。
這意味著當調用（callback)`let `來宣告變數的值，只能在一個區塊區域使用，否則JS執行時，此變數會變成「未定義」（undefined)。

#### 🌰 **例子**

以這個單元為例子，我們調用（callback)`let `來宣告`lap1～3`的變數，我們可以在`sumAllTheLapTimes`函式中調用（callback)這些`lap1～3`變數，因爲`lap1～3`這些變數都是global variable(全域變數)。如果在`sumAllTheLapTimes`函式外，調用（callback)`totalTime`變數時，則會在控制台（console)顯示「未定義」（undefined)，則是因為`totalTime`變數是function variable。

⭐ MDN的文件有提到，以階層關係來說，基本上子階層（`sumAllTheLapTimes`函式）可以調用（callback)父級階層裡的變數（`lap1～3`變數）。

```js
// Create a function that Logs out the sum of all the Lap times

function sumAllTheLapTimes(){

let totalTime = lap1 + lap2 + lap3

}

console.log(totalTime) // output: ReferenceError: totalTime is not defined
```

![](https://i.imgur.com/RT6XMPq.png)

#### 🖼️ **圖解**

![](https://i.imgur.com/mvM0VsO.png)

🌰 **例子**

![](https://i.imgur.com/P3XNvgZ.png)

##### **📝 延伸-宣告方式**

JS 有三種宣告方式（ES6增加let和const關鍵字來宣告變數），包含了：

[`var`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/var)

宣告一個可隨意更改其內容的變數

[`let`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/let)

宣告一個可隨意更改其內容的區塊區域變數

[`const`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/const)

宣告一個只可讀取的不可變常數

### 🗂️ Reference

>[解釋 Scope ( Global scope / Function scope / Block scope )](https://ithelp.ithome.com.tw/m/articles/10259529)


>[MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

## [Function that increments](https://youtu.be/jS4aFq5-91M?t=1946)


### 🏁 Challenge (綜合題)

⭐ 這個挑戰題，我們需要應用目前所學的JS。

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

[參考答案](#Challenge-參考答案)

## [Increment on clicks](https://youtu.be/jS4aFq5-91M?t=2063)

### 🏁 Challenge (綜合實作題)

⭐ 這個挑戰題，我們需要應用目前所學的JS，來實作Passenger counter app。

1. 創建一個變數為`count`，變數的初始設定為0。
  initialize the count as 0

2. 為`increment`按鈕，創建一個點擊-監聽事件（event listener)
   Listen for clicks on the increment button

3. 透過編寫JS程式碼，讓當按鈕被點擊時，`count`變數的值會增加（+1）。
   increment the count variable when the button is clicked

![](https://i.imgur.com/mpeIjQ8.gif)


[參考答案](#Challenge-參考答案)

## [Display count](https://youtu.be/jS4aFq5-91M?t=2195)

### ✋🏻 實作

在上個單元，我們已經編寫完JS程式碼。那麽如何嵌入HTML（使用者介面）中呢？首先，我們使用`document.getElementById("{ID名稱}");`來回傳到HTML的ID名稱後，我們設定屬性`innerText`。

⭐  接下來的單元會說明更多觀念。

範例碼：

```js
let countEl = document.getElementById("count-el");

// initialize the count as 0

let count = 0;

// Listen for clicks on the increment button

// increment the count variable when the button is clicked

function increment(){

count = count + 1;

console.log(count);

countEl.innerText = count;

}
```

![](https://i.imgur.com/EVVgLvj.gif)

>[[Javascript][HTML] DOM 概念](https://ithelp.ithome.com.tw/articles/10094965)

> [HTML DOM Documents list](https://www.w3schools.com/jsref/dom_obj_document.asp)

## [Document Object Model (DOM) ](https://youtu.be/jS4aFq5-91M?t=2514)

<u>Document Object Model (DOM) </u>聽起來很抽象，但其實你可以把它理解為「你如何透過JS來修飾一個網頁」（how you use JavaScript to modify a website）。

👩🏻‍💻 **筆者碎碎念**：<u>強烈建議</u>多聽幾遍[影片原音](https://youtu.be/jS4aFq5-91M?t=2514)啊！影片作者用簡單明瞭+生活情境的方式解釋DOM。

#### 🖼️ **圖解 - 解析DOM**

Document = HTML文件。

![](https://i.imgur.com/6Ys3uaq.png)

Object = JS的資料型態 Object (⭐  接下來的單元會說明更多觀念。)

![](https://i.imgur.com/q0NfLLA.png)

Model ：NASA的神農五號火箭就像HTML文件，而樂高版的火箭就像JS Object 一樣，只是模型（Modal)玩具，不是真的NASA火箭。

![](https://i.imgur.com/UrNJ0cy.png)

##### **📝 延伸

[[Javascript][HTML] DOM 概念](https://ithelp.ithome.com.tw/articles/10094965)

>[MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

> [HTML DOM Documents list](https://www.w3schools.com/jsref/dom_obj_document.asp)


## [Display count / innerText](https://youtu.be/jS4aFq5-91M?t=2627)

### 🏁 Challenge 

現在嘗試看看自己寫[Display count](https://youtu.be/jS4aFq5-91M?t=2195)單元的程式碼吧！

```js
// grab the count-el element, store it in a countEl variable

let count = 0

function increment() {

count = count + 1

}

// set countEl's innerText to the count
```

[參考答案](#Challenge-參考答案)


## [Create save button](https://youtu.be/jS4aFq5-91M?t=2670)

### 🏁 Challenge 

1. 創建一個`save()`函式，當它回傳時，將它顯示(log)在控制台（console)。
   Create a function, `save()`, which logs out the count when it's called

2. 在HTML，創建一個`SAVE`按鈕，將它的ID設定為`save-btn`，接著透過程式，當使用者點擊`SAVE`按鈕時，回傳到`save()`函式。
   Create a `SAVE` button. Set the id to "`save-btn`" and call the `save()` function when it's clicked

[參考答案](#Challenge-參考答案)



## [What is string?](https://youtu.be/jS4aFq5-91M?t=2800)

字串（string），是一種JS資料型態。可以把它理解為文字(text)。其實在之前的單元，我已經寫過這個JS資料型態：

```js
let count = 0

let countEl = document.getElementById("count-el"); // "count-el" 就是字串

function increment() {

count = count + 1

countEl.innerText = count;

}
```

##### **📝 延伸**

在HTML中，所有的資料型態都是字串（string) 而不是數字（number)，則是因HTML並不是程式語言，沒辦法進行計算，所有自然不會有數字（number)這個資料型態。


> [MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)



## [First string variable](https://youtu.be/jS4aFq5-91M?t=2896)

字串（string）我們常常會使用到。我們可以宣告一個變數的值為字串（string）。

🌰 **例子**：

```js
let username = "per" //字串（string）

console.log(username)
```

### ⚠️ 注意

我們可以使用雙引號`""`或單引號`''`來創建字串（string）。但必須注意不可同時使用雙引號`""`和單引號`''`來創建字串（string），否則執行時會`syntax error`。

❌ 範例碼

```js
let username = "per'

console.log(username)
```

![](https://i.imgur.com/4h5UkoG.png)

### 🏁 Challenge 1

創建一個變數為`message`，變數的值為`"You have tree new notifications"`字串。
Create a variable, message, that stores the string: "You have tree new notifications"

[參考答案](#Challenge-參考答案)

##### **📝 延伸

將創建好的`message`變數，在結尾加上`username`後，顯示(log)在控制台（console)。

```js
let message = "You have tree new notifications";

let username = "per" //字串（string）

console.log(message + username)
```

![](https://i.imgur.com/1baDtwE.png)

但字串這樣顯示在控制台不閱讀，所以我們要加入：

```js
console.log(message + " ," + username + "!")
```

這樣好閱讀多了！

![](https://i.imgur.com/RgtZNSk.png)

### 🏁 Challenge 2

創建一個變數為`messageToUser`，變數的值為`message + " ," + username + "!"`字串。（記得console.log)
Create a variable, `messageToUser`, that contains the message we have Logged

[參考答案](#Challenge-參考答案)

> [MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)



## [Log greeting to console](https://youtu.be/jS4aFq5-91M?t=3120)

### 🏁 Challenge

1. 創建兩個變數，分別為`name`和`greeting`。`name`的值為你的名字，`greeting`的值為`"Hi, my name is "`。
   Create two variables, `name` and `greeting`. The name variable should store your name, and the greeting should store e.g. "Hi, my name is "
   
2. 創建第三個變數為`myGreeting`，變數的值為`name`加上`greeting`的字串。
   Create a third variable, `myGreeting`, that contatenates the two strings
   
3. Log `myGreeting` to the console

[參考答案](#Challenge-參考答案)

>[MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)



## [Strings vs. Numbers](https://youtu.be/jS4aFq5-91M?t=3198)

字串（strings)和數字(numbers)都是JS常見的資料型態。

![](https://i.imgur.com/41RXhs8.png)

### 字串（strings) + 數字(numbers)

想想看，如果我們將字串（strings) 與數字(numbers)相加後，會怎麼樣呢？
<u>數字(numbers)資料型態的資料會轉成字串（strings)</u>。

```js
let name = 42

let greeting = "Hi, my name is "

let myGreeting = greeting + name

console.log(myGreeting)
```

Output:

```
Hi, my name is 42
```

![](https://i.imgur.com/TcQl2Hv.png)

我們再看看另一個例子：想想看這段程式碼會輸出什麼呢？

```js
let points = 4

let bonusPoints = "10"

let totalPoints = points + bonusPoints

console.log(totalPoints)
```

Output:

為何輸出為`410`，而不是`14`呢？這是因為`points`的值`4`，是字串資料型態（strings）。

```
410
```

![](https://i.imgur.com/jcpQP0h.png)

### 🏁 Challenge

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

[參考答案](#Challenge-參考答案)

>[MDN DOCS | | 字串 （strings)](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)

>[MDN DOCS | | 數字 （number)](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number)


## [Render welcome message](https://youtu.be/jS4aFq5-91M?t=3366)

### 🏁 Challenge (綜合實作題)

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

**<u>Reference</u>**
[[Javascript][HTML] DOM 概念](https://ithelp.ithome.com.tw/articles/10094965)

[參考答案](#Challenge-參考答案)




## [Improve the message with string concatenation](https://youtu.be/jS4aFq5-91M?t=3488)

### 🏁 Challenge （上個單元的延伸題）

1. 在結尾，加一個表情符號（例如：👋🏻）
   Add an emoji to the end!

2. 請再寫一段碼，不可修改上個單元挑戰題作答的程式碼
   WRITE YOUR CODE BELOW HERE

💡 提示 :  count = count + 1

[參考答案](#Challenge-參考答案)

### 加法賦值 `+=`

我們可以將 `count = count + 1` 寫成  `count += 1`，以上個單元的程式碼為例：

```js

welcomeEl.innerText = welcomeEl.innerText + "👋🏻";

// 我們可以寫成：
welcomeEl.innerText += "👋🏻";

```

`+=` 我們成為「加法賦值」。

> [MDN DOCS](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition_assignment)



## [Use plus equal for count](https://youtu.be/jS4aFq5-91M?t=3626)

### 🏁 Challenge （上個單元的實作題）

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

[參考答案](#Challenge-參考答案)

## [Create save feature](https://youtu.be/jS4aFq5-91M?t=3655)

### 🏁 Challenge （綜合實作題）

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

[參考答案](#Challenge-參考答案)

## [Debugging online](https://youtu.be/jS4aFq5-91M?t=3936)

本單元，說明如何使用網路資源來debug。善用網路資源，是每位開發人員的
必備的技能。

🐝  **Bug**

在我們的Passenger counter app中，有個美中不足的地方，那就是在HTML`Previous entires`數字的分隔號後面沒有空格。

![](https://i.imgur.com/qWnn9kW.jpg)

### ✋🏻 實作

嘗試用Google來搜尋來解決吧！想想看要用什麼關鍵字呢？

```js
function save() {
// 從這段碼找找看吧～
countStr = count + " - "

saveEl.innerText += countStr

console.log(count)

}
```



💡 **提示：關鍵字**
🔍 `innerText alternative mdn`

(MDN Web Docs 是一個開源的、協作式的項目，記錄了包括 CSS、HTML、JavaScript 和 Web API 等 Web 平台技術。我們還為初學者和學生提供了大量的學習資源。)

![](https://i.imgur.com/yu1GTgu.png)


我們可以從[MDN Docs 的網頁中](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)，得知`innertext`和`textcontent`的差異。

![](https://i.imgur.com/BW9S25K.png)

⭐ **以下是Bing（GPT)的中文翻譯：**

不要被 `Node.textContent` 和 `HTMLElement.innerText` 之間的區別所困惑。雖然名字看起來相似，但它們之間有重要的區別：

textContent 獲取所有元素的內容，包括 `<script>` 和 `<style>` 元素。相反，，`innerText` <u>只顯示「人類可讀」（實際所見的內容）的元素</u>。
`textContent` 返回節點中的每個元素。相反，`innerText` 能夠感知樣式，並且不會返回「隱藏」元素的文本。
此外，由於 `innerText` 考慮了 CSS 樣式，因此讀取 `innerText` 的值會觸發重排以確保最新的計算樣式。（重排可能會消耗大量計算資源，因此應盡量避免。）

⭐ **運用：**

從MDN文件得知，`innerText`「只顯示「人類可讀」（實際所見的內容）」的元素。因此空格無法渲染(呈現）到HTML，我們需要使用`textContent` 取代`innerText`。

```js
function save() {

countStr = count + " - "

// 我們需要使用textContent 取代innerText

saveEl.textContent += countStr

console.log(count)

}
```

這樣bug就修好啦～

![](https://i.imgur.com/q03FcxC.gif)

😊 貼心小提醒：
教學影片作者有提到，看這一類「文件」的網路資源，不需看懂所有內容，只要擷取需要的資訊就好，他也不建議以一類「文件」的網路資源來學習（特別是新手），因為內容太複雜，可以嘗試看看其他專門「讓人學習」的網路資源，例如：[W3Schools](https://www.w3schools.com/)。

>[MDN DOCS](https://developer.mozilla.org/)

>[W3Schools](https://www.w3schools.com/)



### 🎢 筆者玩玩看 - 用AI debug

教學影片拍攝時間是2021年，那時還沒有ChatGPT。剛好在寫此篇學習筆記時，MDN出了「[AI Help Beta](https://developer.mozilla.org/en-US/plus/ai-help)」功能，它其實也算是ChatGPT，只不過有了最新的MDN文件資料，相信在Web技術這方面，會比一般的GPT更加準確。

🪄 一起來當AI詠唱師吧！我們來嘗試把剛剛的bug，問AI如何解決(記得要先註冊MDN的帳號喔～)：

**🪄 提詞：**
請問如何<u>透過修改以下原始碼</u>，字串(strings)中的空格(space)，渲染到HTML。以下是我的原始碼：

```js
function save() {

countStr = count + " - "

saveEl.innerText += countStr

console.log(count)

}
```


結果：
AI 給了另一種解決方式，使用`innerHTML`取代`innerText`，也是能執行。

![](https://i.imgur.com/4o55bJD.png)

<u>完整答覆：</u>
根據提供的原始碼，您可以透過修改 `saveEl.innerText` 的方式將字串中的空格渲染到HTML。請參考以下修改後的程式碼：

```js
function save() {
      countStr = count + " - ";
      saveEl.innerHTML += countStr;
      console.log(count);
}
```

在這個修改後的程式碼中，我們將 `saveEl.innerText` 改為 `saveEl.innerHTML`。這是因為 `innerText` 只會將文字內容直接渲染到HTML，而 `innerHTML` 則會將文字內容作為HTML解析並渲染到HTML。這樣一來，字串中的空格就能正確地顯示在HTML中了。

請注意，修改後的程式碼僅針對提供的原始碼進行了修改，其他部分可能需要根據您的需求進行調整。如果您有其他問題，請隨時提出。

[NamedNodeMap: setNamedItem() method](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap/setNamedItem)

<u>💡 AI詠唱 Tips </u>

提詞其實我修改了好幾次。我發現一個詠唱小撇步：為了避免AI (GPT)~~亂唬爛~~，請記得在提詞開頭要有 `...透過修改以下原始碼... `，並提供你要它修改的原始碼。另外，無論是MDN文件資料，或是GPT本身的資料庫，英文的資料一定比中文資料更多、更齊全，所以記得在專用名詞後面補充英文，例如字串(strings)、空格(space)。

歡迎到[Github的issue](https://github.com/michellechang2006/Javascript-basic-playground/issues)和我交流一下你使用MDN「[AI Help Beta](https://developer.mozilla.org/en-US/plus/ai-help)」功能的技巧、心得喔～


**比較Bing(GPT 4):**

確實比起一般的GPT，回答上更加精準。

![](https://i.imgur.com/R3Zss5P.png)


>[MDN AI Help Beta](https://developer.mozilla.org/en-US/plus/ai-help)

>[Bing](https://www.bing.com/)


## [Set count to 0](https://youtu.be/jS4aFq5-91M?t=4169)

### 🏁 Challenge （綜合實作題）

⭐ 這個挑戰題，我們需要應用目前所學的JS，來實作Passenger counter app。

完成此功能：當使用者按下`SAVE`按鈕時，歸零。

本次挑戰題，沒有提供任何提示，嘗試完成這個挑戰題吧！

![](https://i.imgur.com/XxPARfw.gif)


[參考答案](#Challenge-參考答案)



## [Recap](https://youtu.be/jS4aFq5-91M?t=4349)

我們來回顧，我們目前學了什麼JS:

- [script tag](#Setting-up-file)
- [variables](#Create-variable)
- [numbers](#Strings-vs.-Numbers)
- [strings](#What-is-string?)
- [console.log()](#Create-variable)
- [functions](#Using-functions-to-write-less-code)
- [The DOM (Document Object Model)](#Document-Object-Model-(DOM))
- [getElementByld()](#Display-count)
- [innerText](#Display-count)
- [textContent](#Debugging-online)

恭喜🎉 你已經學會以上JS，並製作出你的第一個JS應用程式 -Javascript 新手 教學 - [Passenger counter app](https://codepen.io/michellechang2006/pen/abQwNZB)！

⭐ 接下來的單元，會有更多題目讓你練習。


# Recap Challenge


## [Variables practice](https://youtu.be/jS4aFq5-91M?t=4548)

1. 創建兩個變數，分別為`firstName`和`lastName`（分別宣告你的名字和姓氏為變數的值
  Create two variables, `firstName` and `lastName`

2. 把這兩個變數的值串連起來，宣告為`fullName`變數的值。
  Concatenate the two variables into a third variable called `fullName`

3. 將`fullName`變數顯示（Log ）在控制台（console）。
   Log `fullName` to the console

[參考答案](#Challenge-參考答案)

## [Concatenate strings](https://youtu.be/jS4aFq5-91M?t=4662)

創建一個函式（function），讓`"Hi there, Linda!"`顯示(log)在控制台（console)
Create a function that logs out `"Hi there, Linda!"` when called

```js
let name = "Linda"

let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called
```

[參考答案](#Challenge-參考答案)



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

[參考答案](#Challenge-參考答案)



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

[參考答案](#Challenge-參考答案)

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

[參考答案](#Challenge-參考答案)

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

[參考答案](#Challenge-參考答案)


# [復刻 APP](https://codepen.io/michellechang2006/pen/abQwNZB)

🎉 恭喜你！學完第一階段啦～在將目前所學到JS學以致用，做一個小小的專案前，我決定先自行嘗試，從零開始復刻Passenger counter app的功能。歡迎透過[Github Issues](https://github.com/michellechang2006/Javascript-basic-playground/issues)來和我交流你復刻的Passenger counter app喔！

### ✏️ 復刻筆記

[Create variable](#Create-variable)

[宣告一個變數](#Create-variable) `count`，作為計數功能。

```js
let count = 0;
```

**[The DOM](#Document-Object-Model-(DOM))**

[宣告了幾個變數](#Create-variable)，其值為[取出 HTML 內容當中](#Display-count)：

```js
let countEl = document.getElementById("counter")

let saveEl = document.getElementById("save-el")
```

**[onclick event listener](#onclick-event-listener)**

加入了`onclick`事件監聽（event listener)，這代表當使用者按一次按鈕時，則會執行`incrementBtn()`和`saveBtn()`函式裡的程式碼。

```html
<button id="increment-btn" onclick="incrementBtn()">INCREMENT</button>

<button id="save-btn" onclick="saveBtn()">SAVE</button>
```

**[Using functions to write less code](#Using-functions-to-write-less-code)**

透過函式，讓JS記住使用者按一次`INCREMENT`和`Save`按鈕時，要執行什麼程式碼。

```js
function incrementBtn(){

}

function saveBtn(){

}
```



**[Mathematical operations](#Mathematical-operations)**

創建完函式，接著是寫裡面的程式碼。每次使用者按一次`INCREMENT`時，`count`變數的值加一。

```js
function incrementBtn(){

count += 1;

}
```

**[Display count / innerText](#Display-count-/-innerText)**

計算好後，使用[`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)來將計算好的值嵌入HTML。

```js
function incrementBtn(){

count += 1;

countEl.textContent = count;

}
```

**[What is string?](#What-is-string?)**

除了計數功能外，還有儲存計數的功能。每次使用者按一次`SAVE`時，`count`變數的值會加入`" - "`[字串](#What-is-string?)後嵌入HTML，ID為`save-el`的段落。

```js
function saveBtn(){

saveEl.textContent += count + " - "

count = 0;

countEl.textContent = count;

}
```

**[Set count to 0](#Set-count-to-0)**

最後，編寫此功能：當使用者按下`SAVE`按鈕時，計數歸零。完成啦～

```js
function saveBtn(){

saveEl.textContent += count + " - "

count = 0;

countEl.textContent = count;

}
```

**[復刻成果 原始碼](https://github.com/michellechang2006/Javascript-basic-playground/tree/main/(FreeCodeCampJavaScript_Programming-Full_Course/1.%20Build%20a%20Passenger%20Counter%20App/%E5%BE%A9%E5%88%BB)**

![](https://i.imgur.com/CXBzZao.gif)


# [Solo Project 學以致用](https://michellechang2006.github.io/My-First-Javascript-APP/)

![](https://i.imgur.com/gE3lMwA.gif)

### ✏️ 筆記



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

```js
// Create a variable, messageToUser, that contains the message we have Logged

let messageToUser = message + ', ' + username + '!';

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

## [Strings vs. Numbers](https://youtu.be/jS4aFq5-91M?t=3198)
 
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