// Recap
// The Dom 
// Variable
// funcation
// (onclick) event listener
// Math (+-*/)
// JS data type (strings & number)




let scoreLeft = document.querySelector(".score-left")
let scoreRight = document.querySelector(".score-right")
let scoreRecorder = document.getElementById("score-recorder")

let countLeft = 0
let countRight = 0


function incrementLeftBtn() {
    countLeft += 1;
    scoreLeft.textContent = countLeft
}
function incrementRightBtn() {
    countRight += 1;
    scoreRight.textContent = countRight
}

function saving(){
countAll = " " + countLeft + " : " + countRight + " | "
scoreRecorder.textContent += countAll 
}

function set0() {
    countLeft = 0;
    countRight = 0;
    scoreRight.textContent = countRight
    scoreLeft.textContent = countLeft
}

function deleteRecord() {
    countAll = "成績紀錄: "
scoreRecorder.textContent = countAll 
}


