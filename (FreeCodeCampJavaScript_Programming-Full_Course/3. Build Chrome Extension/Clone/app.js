let myLeads = []
const inputEl = document.getElementById("input-el")
const saveInput = document.getElementById("save-input")
const ulEl = document.getElementById("lists")
const deleteBtn = document.getElementById("clear-btn")
let localStorageLeads = JSON.parse(localStorage.getItem("myLeads"))
console.log(JSON.parse(localStorage.getItem("myLeads")))

if (localStorageLeads) {
    myLeads = localStorageLeads
    render(myLeads)
}

saveInput.addEventListener("click", () => {
    // Before 
    // 這樣寫，和JS檔 設定的myLeads 陣列沒有關係，只會每次「重新」設定"myLeads"key和value
    // localStorage.setItem("myLeads",JSON.stringify(inputEl.value))
    // myLeads.push(inputEl.value)

    // After
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    render(myLeads)
})

deleteBtn.addEventListener("click", () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})




function render(leads) {
    let lists = ""
    leads.forEach(el => {
        lists += `<li><a href="${el}">${el}</a></li>`
    });
    ulEl.innerHTML = lists
}

saveTab.addEventListener("click", () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        inputEl.value = ""
        render(myLeads)
    });
})