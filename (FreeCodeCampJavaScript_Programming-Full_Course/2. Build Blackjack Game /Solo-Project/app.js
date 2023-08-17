import { randomNumbers } from "./random_numbers.js"
import { myNumbers, } from "./my_numbers.js";
// 隨機數字範圍 1～49


let randomBtn = document.querySelector('#start-random');
randomBtn.addEventListener('click', StartRandom);

let countBtn = document.querySelector('#result');
countBtn.addEventListener("click", result)

let startRandomBtn = document.querySelector("#start-random")
let resultBtn = document.querySelector("#result")



let startBtn = document.getElementById("start-btn")

startBtn.addEventListener("click", start)


let restartBtn = document.getElementById("restart-btn")

restartBtn.addEventListener("click", restart)

let colorCleanBtn = document.getElementById("clean-color-btn")

colorCleanBtn.addEventListener("click", colorClean)

let resultEl = document.getElementById("result-el")
let randomSpecEl = document.querySelector(".random-spec")
let numberSpecEl = document.querySelector(".number-spec")
let specialNumbers
let myNumbersSpec = 0
let randomNumbersSpec = 0
let randomEl = [];
let myNumbersEl = [];
let count = 0;


for (let i = 1; i <= 6; i++) {
    randomEl.push(document.querySelector(`.random${i}`));
}
for (let i = 1; i <= 6; i++) {
    myNumbersEl.push(document.querySelector(`.number${i}`));
}







function random() {
    randomNumbersSpec = Math.floor(Math.random() * 49) + 1
    randomSpecEl.textContent = randomNumbersSpec
    let randomEl = [];

    // DOM
    for (let i = 1; i <= 6; i++) {
        randomEl.push(document.querySelector(`.random${i}`));
    }
    // inner Html
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



function Numbers() {
    myNumbersSpec = Math.floor(Math.random() * 49) + 1
    numberSpecEl.textContent = myNumbersSpec
    startRandomBtn.style = "display:inline";
    // DOM
    let myNumbersEl = [];

    for (let i = 1; i <= 6; i++) {
        myNumbersEl.push(document.querySelector(`.number${i}`));
    }
    // inner Html
    for (let i = 0; i <= 6; i++) {
        myNumbersEl[i].textContent = myNumbers[i]

    }

}




function start() {
    startBtn.style = "display:none"
    resultEl.textContent = ""
    for (let i = 0; i < myNumbers.length; i++) {
        myNumbers[i] = Math.floor(Math.random() * 49) + 1;
    }

    Numbers()

}


function refresh() {
    let randomEl = [];
    randomSpecEl.textContent = "?"
    for (let i = 1; i <= 6; i++) {
        randomEl.push(document.querySelector(`.random${i}`));
    }
    for (let i = 0; i < randomEl.length; i++) {
        randomEl[i].textContent = "?";
    }
}


function restart() {
    restartBtn.style = "display:none"
    refresh()
    start()
    resultEl.textContent = ""

}



function result() {
    let randomEl = []
    let count = 0;
    startRandomBtn.style = "display:none";
    resultBtn.style = "display:none";
    colorCleanBtn.style = "display:inline"
    restartBtn.style = "display:none";

    console.log(randomNumbers)
    console.log(myNumbers)
    if (randomNumbersSpec === myNumbersSpec) {
        specialNumbers = true
        numberSpecEl.style = " background: radial-gradient(circle at 65% 15%, white 1px, #FF7070 3%, red 60%, #FF7070 100%);"
        randomSpecEl.style = " background: radial-gradient(circle at 65% 15%, white 1px, #FF7070 3%, red 60%, #FF7070 100%);"
    } else {
        specialNumbers = false
    }

    console.log("特別號是否中獎？" + specialNumbers)

    for (let i = 0; i < 7; i++) {
        if (myNumbers.includes(randomNumbers[i])) {
            count++
        }

    }
    for (let i = 1; i <= 6; i++) {
        randomEl.push(document.querySelector(`.random${i}`));
    }
    // DOM
    let myNumbersEl = [];

    for (let i = 1; i <= 6; i++) {
        myNumbersEl.push(document.querySelector(`.number${i}`));
    }
    randomNumbers.forEach((value, index) => {
        let indexInArray2 = myNumbers.indexOf(value);
        if (indexInArray2 !== -1) {
            console.log(`數字 ${value} 在 randomNumbers 的索引是 ${index}，在 myNumbers 的索引是 ${indexInArray2}`);
            randomEl[index].style = "background: radial-gradient(circle at 65% 15%, white 1px, #FF7070 3%, red 60%, #FF7070 100%);"
            myNumbersEl[indexInArray2].style = "background: radial-gradient(circle at 65% 15%, white 1px, #FF7070 3%, red 60%, #FF7070 100%);"
        }

        // randomEl[i].textContent = randomNumbers[i]
    });






    console.log("公布特別號： " + randomNumbersSpec)
    console.log("我的特別號： " + myNumbersSpec)
    console.log("特別號是否中獎？" + specialNumbers)
    console.log("獎號相符數量： " + count)


    // 與當期六個獎號完全相同者 = 頭獎
    // 對中當期獎號之任五碼＋特別號 = 貳獎
    // 對中當期獎號之任五碼 = 參獎
    // 對中當期獎號之任四碼＋特別號 = 肆獎
    // 對中當期獎號之任三碼＋特別號 = 伍獎 NT$2,000
    // 對中當期獎號之任兩碼＋特別號 = 柒獎 NT$400
    // 對中當期獎號之任三碼 = 普獎 NT$400



    switch (count) {
        case 6:
            resultEl.textContent = "6"
            break
        case 5:
            if (specialNumbers === true) {
                resultEl.textContent = "5";
            }
            break
        case 5:
            resultEl.textContent = "5"
            break

        case 4:
            if (specialNumbers === true) {
                resultEl.textContent = "4";
            }
            break
        case 4:
            resultEl.textContent = "🥲"
            break
        case 4:
            if (specialNumbers === true) {
                resultEl.textContent = "4";
            }
            break
        case 3:
            resultEl.textContent = "3";
            break
        case 3:
            if (specialNumbers === true) {
                resultEl.textContent = "3";
            }
            break
        case 2:
            resultEl.textContent = "🥲"
            break
        case 2:
            if (specialNumbers === true) {
                resultEl.textContent = "2";
            }
            break

        case 1:
            resultEl.textContent = "🥲"
            break
        case 0:
            resultEl.textContent = "🥲"
            break
    }



}

function colorClean() {
    let count = 0;
    restartBtn.style = "display:inline"
    colorCleanBtn.style = "display:none;"
    numberSpecEl.style = "background: radial-gradient(circle at 65% 15%, white 1px, #C5C8B1 3%, #9DA27C 60%, #C5C8B1 100%);  "
    randomSpecEl.style = "background: radial-gradient(circle at 65% 15%, white 1px, #C5C8B1 3%, #9DA27C 60%, #C5C8B1 100%);  "

    if (randomNumbersSpec === myNumbersSpec) {
        specialNumbers = true
    } else {
        specialNumbers = false
    }
    for (let i = 0; i < 7; i++) {
        if (myNumbers.includes(randomNumbers[i])) {
            count++
        }

    }

    for (let i = 0; i < 6; i++) {
        myNumbersEl[i].style = "background: radial-gradient(circle at 65% 15%, white 1px, #FDB800 3%, #FE7543 60%, #FDB800 100%"

    }
    for (let i = 0; i < 6; i++) {
        randomEl[i].style = " background: radial-gradient(circle at 65% 15%, white 1px, #C280B8 3%, #97498C 60%, #C280B8 100%);"
    }

    console.log(count)
    console.log("特別號是否中獎？" + specialNumbers)

    // 與當期六個獎號完全相同者 = 頭獎
    // 對中當期獎號之任五碼＋特別號 = 貳獎
    // 對中當期獎號之任五碼 = 參獎
    // 對中當期獎號之任四碼＋特別號 = 肆獎
    // 對中當期獎號之任三碼＋特別號 = 伍獎 NT$2,000
    // 對中當期獎號之任兩碼＋特別號 = 柒獎 NT$400
    // 對中當期獎號之任三碼 = 普獎 NT$400

    switch (count) {
        case 6:
            resultEl.textContent = "6"
            break
        case 5:
            if (specialNumbers === true) {
                resultEl.textContent = "5";
            }
            break
        case 5:
            resultEl.textContent = "5"
            break

        case 4:
            if (specialNumbers === true) {
                resultEl.textContent = "4";
            }
            break
        case 4:
            window.alert("🥲")
            break
        case 4:
            if (specialNumbers === true) {
                resultEl.textContent = "4";
            }
            break
        case 3:
            resultEl.textContent = "3";
            break
        case 3:
            if (specialNumbers === true) {
                resultEl.textContent = "3";
            }
            break
        case 2:
            window.alert("🥲")
            break
        case 2:
            if (specialNumbers === true) {
                resultEl.textContent = "2";
            }
            break

        case 1:
            window.alert("🥲")
            break
        case 0:
            window.alert("🥲")
            break
    }

}

// test DOM

// randomEl[0].textContent = randomNumbersSpec;

// console.log(randomEl)

