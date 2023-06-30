## 🔗 Section links 

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

[Create save button](#Create save button)

[What is string?](#What-is-string?)

[First string variable](#First-string-variable)

[Log greeting to console](#Log-greeting-to-console)

[本章節 Challenge 題庫](link)

[🏁 Challenge 參考答案](#Challenge-參考答案)

## [Setting up file](https://youtu.be/jS4aFq5-91M?t=279)

### 在 HTML檔案中，嵌入Javascript 程式碼

使用`<script> </script>` 標籤，來嵌入JS程式碼。

範例碼：
```  
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
```  
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

```  
// document.getElementById("count-el").innerText = 5;
```  

![](https://i.imgur.com/kGIxLQw.jpg)

圖片中，因右邊畫面的JS 程式碼被註解，程式碼不會執行。所以左邊畫面（紅色方框內）的<u>數字為0而不是5</u>。

##### 📝 **延伸**

除了使用` // `來註解程式碼，我們還可以有方式：
` /* {要註解的程式碼} */ `

範例碼：

```  
/* document.getElementById("count-el").innerText = 5;*/
```  

> [w3schools](https://www.w3schools.com/js/js_comments.asp)

### 變數

在JS，我們需要以某種形式來儲存一個資料值的容器。我們以`let`來宣告（命名）變數名稱。

範例碼：

```  
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

```
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

```
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

```
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

```
let firstBatch = 5;

count = firstBatch;

console.log(count);
```


![](https://i.imgur.com/0qC8Mnn.png)

範例碼 2：

```
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

```
let count = 5;

count = 3;

count = 1;

console.log(count);
```

![](https://i.imgur.com/Y5pIkvv.png)

### ✋🏻 實作

這個單元，我們是要做一個計乘客人數的應用程式（Passenger counter app）。那麽，如何以我們目前所學到的JS，來coding呢？

範例碼：

```
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

```
<!-- HTML -->

<!-- Create a INCREMENT button with the id=increment-btn" -->

<button id="increment-btn" onclick="increment()">INCREMENT</button>
```

在這段程式碼中，我們加入了`onclick`事件監聽（event listener)，這代表當使用者按一次按鈕時，則會執行`increment()`函式的程式碼。

但我們的JS檔案，並沒有`increment()`函數。所以當使用者按一次按鈕時，並没有發生「事件」。

我們回到JS檔案，寫一個函式。

範例碼：

```
function increment(){

console.log("The button was clicked")

}
```

這樣當使用者按一次按鈕時，則會（觸法）執行`increment()`函數的程式碼。
而我們在`increment()`函數中編寫了將`"The button was clicked"`（Console. Log ）顯示在控制台。

### Recap

透過以上的程式碼，就完成了我們按鈕的事件監聽（event listener)。

當我們的使用者，按一次按鈕（onclick)後，透過`onclick`事件監聽（event listener)後，

```
<!-- HTML -->

<!-- Create a INCREMENT button with the id=increment-btn" -->

<button id="increment-btn" onclick="increment()">INCREMENT</button>
```

觸法了`increment()`函數。接著，執行`increment()`函式中的JS程式碼，也就是`console.log("The button was clicked")`。

```
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

```
/// Setting up the the race

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

```
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

```
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

```
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

```
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

```
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

```
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

## [Display count / innerText](https://youtu.be/jS4aFq5-91M?t=2627)

### 🏁 Challenge 

現在嘗試看看自己寫[Display count](https://youtu.be/jS4aFq5-91M?t=2195)單元的程式碼吧！

```
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

```
let count = 0

let countEl = document.getElementById("count-el"); // "count-el" 就是字串

function increment() {

count = count + 1

countEl.innerText = count;

}
```

##### **📝 延伸

在HTML中，所有的資料型態都是字串（string) 而不是數字（number)，則是因HTML並不是程式語言，沒辦法進行計算，所有自然不會有數字（number)這個資料型態。


> [MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)



## [First string variable](https://youtu.be/jS4aFq5-91M?t=2896)

字串（string）我們常常會使用到。我們可以宣告一個變數的值為字串（string）。

🌰 **例子**：

```
let username = "per" //字串（string）

console.log(username)
```

### ⚠️ 注意

我們可以使用雙引號`""`或單引號`''`來創建字串（string）。但必須注意不可同時使用雙引號`""`和單引號`''`來創建字串（string），否則執行時會`syntax error`。

❌ 範例碼

```
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

```
let message = "You have tree new notifications";

let username = "per" //字串（string）

console.log(message + username)
```

![](https://i.imgur.com/1baDtwE.png)

但字串這樣顯示在控制台不閱讀，所以我們要加入：

```
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

[MDN DOCS](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)


## Challenge 參考答案

### [Create variable](https://youtu.be/jS4aFq5-91M?t=462)


```
// 1. Create a variable, myAge, and set its Value to your age

let myAge = 16;

// 2. Log the myAge variable to the console

console.log(myAge);
```


### [Mathematical operations](https://youtu.be/jS4aFq5-91M?t=749)

```
// 1. Create two variable, myAge and humanDogRatio

let myAge = 16;

let humanDogRatio = 7;

// 2. Multiply the two together and store the result in myDogAge

myDogAge= myAge * humanDogRatio;

// 3. Log myDogAge to the console

console.log(myDogAge);
```


### [Reassigning & incrementing](https://youtu.be/jS4aFq5-91M?t=977)

```
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

```
// Create a function (you decide the name) that Logs out the number 42 to the console

function myFirstFunciton(){ //  函式名稱自行決定 you decide the name 

console.log(42);

}

// Call/ invoke the function

myFirstFunciton()
```


### [Function that logs sum](https://youtu.be/jS4aFq5-91M?t=1775)

```
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

```
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

```
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

```
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

```
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

```
// JS

// 1. Create a function, save(), which logs out the count when it's called

function save(){

console.log(count)

}
```


```
<!-- HTML -->

<!-- 2. Create a SAVE button. Set the id to "save-btn" and call the save() function when it's clicked -->

<button id="save-btn" onclick="save()">SAVE</button>
```

### [First string variable](https://youtu.be/jS4aFq5-91M?t=2896)

#### 🏁 Challenge 1

```
let message = "You have tree new notifications";
```

```
let message = 'You have tree new notifications';
```

#### 🏁 Challenge 2

```
// Create a variable, messageToUser, that contains the message we have Logged

let messageToUser = message + ", " + username + "!";

console.log(messageToUser)
```

```
// Create a variable, messageToUser, that contains the message we have Logged

let messageToUser = message + ', ' + username + '!';

console.log(messageToUser)
```


### [Log greeting to console](https://youtu.be/jS4aFq5-91M?t=3120)

```
// Create two variables, name and greeting. The name variable should store your name,

// and the greeting should store e.g. "Hi, my name is "

let name = "Michelle";

let greeting = "Hi, my name is ";

// Create a third variable, myGreeting, that contatenates the two strings

let myGreeting = greeting + name;

// Log myGreeting to the console

console.log(myGreeting);
```

```
// Create two variables, name and greeting. The name variable should store your name,

// and the greeting should store e.g. 'Hi, my name is '

let name = 'Michelle';

let greeting = 'Hi, my name is ';

// Create a third variable, myGreeting, that contatenates the two strings

let myGreeting = greeting + name;

// Log myGreeting to the console

console.log(myGreeting);
```