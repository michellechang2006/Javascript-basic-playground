

# 🔗 Section links


### [✏️ 學習筆記](#學習筆記)

[Setting up files](#Setting_up_files)

[Document Object Model (DOM) ](#Document_Object_Model (DOM))

[addEventListener()](#addEventListener())

[修改 The DOM](#修改_The_DOM)

[Generating random numbers](#Generating_random_numbers)

[Hex Code Tab: JS Setting](#Hex_Code_Tab:_JS_Setting)

[`for loop` : 添加隨機的hex code到 `hexColor` 變數](#`for loop`__:_添加隨機的hex code到_`hexColor`_變數)

### [⭐ 復刻 APP](#復刻-APP)




# 學習筆記


## [Setting up files](https://youtu.be/3PHXvlpOkf4?si=MBKsS8FyTnPMrCqz&t=482)



![](https://i.imgur.com/WrzgxvT.png)



>[檔案下載](https://tinyurl.com/2bxamlus)




## [Document Object Model (DOM) ](https://youtu.be/3PHXvlpOkf4?si=1Q683f4Uz3iL_Wrm)


我們需要修改的HTML元素有兩個，分別是「按紐」及「顯示色票的文字」。


```js
const btn = document.getElementById('btn')

const color = document.querySelector('.color')
```


![](https://i.imgur.com/s1uKlxy.png)




>[Document: querySelector() method](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

>[Document: getElementById() method | | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

>[Introduction to the DOM | | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

> [HTML DOM Documents list](https://www.w3schools.com/jsref/dom_obj_document.asp)



## [addEventListener()](https://youtu.be/3PHXvlpOkf4?si=_Gw8hPFG2pKcbNXb&t=745)


我們加入`addEventListener()`這個語法，這樣當使用者按下按鈕時，就會執行函式裡的程式碼。


```js
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')

const color = document.querySelector('.color')

  

btn.addEventListener('click',function(){ // 當使用者按下按鈕時，就會執行函式裡的程式碼

console.log(document.body) // HTML body 元素

})
```


![](https://i.imgur.com/OztwTuE.gif)


>[EventTarget: addEventListener() method | | MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)




## [修改 The DOM](https://youtu.be/3PHXvlpOkf4?si=O6X6vO5yJryTCwoq&t=869)


```js
btn.addEventListener('click', function () {

const randomNumber = 2;

document.body.style.backgroundColor = colors[randomNumber];

color.textContent = colors[randomNumber];

});
```


>[HTMLElement: style property | | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)




## [Generating random numbers](https://youtu.be/3PHXvlpOkf4?si=qNAV4Narbkf8_iMY&t=948)


```js
btn.addEventListener('click', function () {

const randomNumber = getRandomNumber();

// 修改 The DOM
document.body.style.backgroundColor = colors[randomNumber];

color.textContent = colors[randomNumber];

console.log(getRandomNumber())

});

  

function getRandomNumber() {

return Math.floor(Math.random() * colors.length) 
// Math.floor() 函式會回傳小於等於所給數字的最大整數。
// Math.random() * colors.length 意思是產生的隨機數字最大不超過colors陣列實體中包含的元素個數
}
```


>[Math.random() | | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

>[Math.floor() | | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

>[Array.length | | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/length)




## [Hex Code Tab: JS Setting](https://youtu.be/3PHXvlpOkf4?si=Hj83ToQA6MQDuy_g&t=1315)




```js
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

  

btn.addEventListener('click',function(){

  

});
```




## [`for loop` : 添加隨機的hex code到 `hexColor` 變數](https://youtu.be/3PHXvlpOkf4?si=vy31d2eNcozI430x&t=1479)


```js
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  

const btn = document.getElementById('btn');

const color = document.querySelector('.color');


btn.addEventListener('click', function () {

let hexColor = '#';

for (let i = 0; i < 6; i++) { // hexcode 總共有六個碼

hexColor += hex[getRandomNumber()]

}

// 修改 The DOM
document.body.style.backgroundColor = hexColor

color.textContent = hexColor

console.log(hexColor)

});

  

function getRandomNumber() {

return Math.floor(Math.random() * hex.length)

// Math.floor() 函式會回傳小於等於所給數字的最大整數。
// Math.random() * colors.length 意思是產生的隨機數字最大不超過colors陣列實體中包含的元素個數

}
```


>[for | | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/for)

>[學習筆記](https://tinyurl.com/223oyx48)

>[HEX 色碼 ｜ 秒懂16 進位原理，快速搭配所需顏色](https://www.shutterstock.com/zh-Hant/blog/how-hex-colors-work)

