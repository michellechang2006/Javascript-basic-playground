const array1 = [1, 3, 2];
const array2 = [4, 4, 2];

array1.forEach((value, index) => {
  const indexInArray2 = array2.indexOf(value);
  if (indexInArray2 !== -1) {
    console.log(`數字 ${value} 在 array1 的索引是 ${index}，在 array2 的索引是 ${indexInArray2}`);
  }
});
