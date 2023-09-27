const welcomeEl = document.getElementById("welcome-el")

// Add the ability to choose the emoji as well!

function greetUser(greeting, name,emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

greetUser("Howdy", "James","👋🏻")
