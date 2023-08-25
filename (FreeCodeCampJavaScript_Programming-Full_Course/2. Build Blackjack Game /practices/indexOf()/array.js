let fruitProducts = [ "watermelons",
                      "oranges",
                      "mangos",
                      "apples"]


for (var i = 0; i < fruitProducts.length; i++) {
    const arr = fruitProducts[i];
    if (i === 2) {
       break;
    }
    console.log(arr)
}

// fruitProducts.forEach(arr => {
//     console.log(arr)
// });
            

// console.log(fruitProducts.indexOf("oranges",2))