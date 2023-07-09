
# 🔗 Section links 


# 學習筆記

## [Add firstCard, secondCard, & sum](https://youtu.be/jS4aFq5-91M?t=5547)

### 🏁 Challenge

**⭐ Passenger counter app 複習題 [Create variable](https://tinyurl.com/28evusbg)**

1. 創建兩個變數，分別宣告為`firstCard`和`secondCard`。其值設定為二到十一中，隨機的數字。
  Create two variables, firstCard and secondCard.  Set their values to a random number between 2-11

2. 創建一個變數`sum`，其值為`firstCard`和`secondCard`的加總。
   Create a variable, sum, and set it to the sum of the two cards

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
  statement1 // 則執行執行陳述式1 statement1 （程式碼）
else if (condition2) // 如果符合條件 condition2
  statement3 // 則執行執行陳述式2 statement3 （程式碼）
  // ... (更多的條件)
else // 如果不符合條件 condition1
  statement2 // 則執行執行陳述式3 statement2 （程式碼）
```

**🖼️ 圖解**

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

} else if (sum === 21) { // 如果sum變數的值等於值

console.log("Wohoo! You've got Blackjack! 🥳") // 將 "Wohoo! You've got Blackjack! 🥳" 顯示（log）在控制台（console）

} else if (sum > 21) { // 如果sum變數的值大於21

console.log("You're out of the game! 😭")// 將 "You're out of the game! 😭" 顯示（log）在控制台（console）

}
```

`else if (sum > 21)`可取代為`else`。因爲我們第一個條件是設定為`如果sum變數的值小於21`，而`如果sum變數的值大於21`（true)條件代表說`如果sum變數的值沒有小於21，而是相反大於21`（false)，所以我們可以直接寫`else`即可。

**🖼️ 圖解**

![](https://i.imgur.com/rRYH8XH.png)

>[MDN DOCS | | 比較運算子](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators#%E6%AF%94%E8%BC%83%E9%81%8B%E7%AE%97)


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


## Your first if..else statement


# 🏁 Challenge 參考答案

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