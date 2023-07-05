let countEl = document.getElementById("counter")
let saveEl = document.getElementById("save-el")
let count = 0;

function incrementBtn(){
    count += 1;
    countEl.textContent = count;
}

function saveBtn(){
    saveEl.textContent += count + " - "
    count = 0;
    countEl.textContent = count;
}