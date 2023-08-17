
// course 1 call Object

let course =

{ title : "course 1" ,

lessons : 16,

creator:"Emma",

length: 63,

level:2,

isFree: true,

tags: ["html","css"]}

  

console.log(course.creator) // or
console.log(course["creator"])





// course 2 add Object


let course2 =

{ title : "course 2" ,

lessons : 20,

creator:"Jack",

length: 120,

level:1,

isFree: true,

tags: ["javascript","html","css"]}


course2.rating = 5 // or
course2["rating"] = 5

console.log(course2)



// course3 delete Object

let course3 =

{ title : "course 3" ,

lessons : 10,

creator:"Jenny",

length: 34,

level:3,

isFree: false,

tags: ["react.js","javascript"]}



delete course3.title //or
delete course3["title"]

console.log(course3)


// new Object()

let mealA = new Object()

mealA.drinking = "Coke"

mealA.dish = "Hamburger"

mealA.sideDish = "French fries"

mealAPrice = 120

mealA.rating = 5

console.log(mealA)