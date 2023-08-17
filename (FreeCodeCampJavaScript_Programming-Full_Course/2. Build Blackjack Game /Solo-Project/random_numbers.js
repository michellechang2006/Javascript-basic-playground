// 產生 隨機數字

// Before
// let getRandomNumbers = [Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1]
// let getMyNumbers = [Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1,Math.floor(Math.random()*49)+1]


// After (from Bing)
function getRandomNumbers(length, min, max) {
    let numbers = [];
    while (numbers.length < length) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

let randomNumbers = getRandomNumbers(6, 1, 49);
// console.log(randomNumbers);

let randomNumbersSpec = Math.floor(Math.random()*49)+1


export {randomNumbers,randomNumbersSpec}


