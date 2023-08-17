let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    fightersA = Math.floor(Math.random() * fighters.length)
    fightersB = Math.floor(Math.random() * fighters.length)
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    console.log(fighters[fightersA] + " vs " + fighters[fightersB])
    stageEl.textContent = fighters[fightersA] + " vs " + fighters[fightersB]
})