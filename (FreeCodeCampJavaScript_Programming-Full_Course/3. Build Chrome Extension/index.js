let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")

const saveEl = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
  
saveEl.addEventListener("click",saveLead)

function saveLead() {
myLeads.push(inputEl.value)
console.log(myLeads)
}



for (let i = 0; i < myLeads.length; i++) {
// ulEl.innerHTML += "<i>"+ myLeads[i] + "</i><br>"
// create element
// set text content
// append to ul
let liEl = document.createElement("li")
liEl.textContent += myLeads[i]
ulEl.append(liEl)
}
