// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");
// Create two variables (name & greeting) that contains your name
let name ="Michelle"
// and the greeting we want to render on the page
let greeting = "Welcome back "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name;

// Add an emoji to the end!
// WRITE YOUR CODE BELOW HERE
welcomeEl.innerText = welcomeEl.innerText + "👋🏻";
// HINT: count = count + 1