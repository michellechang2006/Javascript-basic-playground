
// Gas 
const gas = 10

// if (gas > 0) {
//     console.log("繼續直走") 
// } else {
//     console.log("右轉去加油") 
// }


if (gas) {
   console.log("繼續直走") 
} else {
    console.log("右轉去加油") 
}




// Challenge

console.log(  Boolean("")   ) // false
console.log(  Boolean("0")  ) // true
console.log(  Boolean(100)  ) // true
console.log(  Boolean(null) ) // false
console.log(  Boolean([0])  ) // true
console.log(  Boolean(-0)   ) // false