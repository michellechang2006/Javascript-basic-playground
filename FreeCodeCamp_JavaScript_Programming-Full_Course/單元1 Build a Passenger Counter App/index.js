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

