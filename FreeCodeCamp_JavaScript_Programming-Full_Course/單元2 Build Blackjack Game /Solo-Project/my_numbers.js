// 產生 隨機數字

// Before
// let getRandomNumbers = [Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1]
// let getMyNumbers = [Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1]


// After (from Bing)
function getMyNumbers(length, min, max) {
    let numbers = [];
    while (numbers.length < length) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

let myNumbers = getMyNumbers(6, 1, 49);


let myNumbersSpec = Math.floor(Math.random()*49)+1

export {myNumbers,myNumbersSpec}

