// What are greeting and name? 
// parameter
// What are "Howdy" and "James"?
// argument
// What are num1 and num2?
// parameter
// What are 3 and 4?
// argument

function greetUser(greeting, name) { 
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}


let hi = "Howdy"
greetUser(hi, "James")


function add(num1, num2) {
    return num1 + num2
}

add(3, 4)