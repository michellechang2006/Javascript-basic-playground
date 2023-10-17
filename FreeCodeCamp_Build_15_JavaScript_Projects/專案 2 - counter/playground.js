var array = ['小明', '杰倫', '漂亮阿姨', '小美']
for (var i = 0; i < array.length; i++) {
  const item = array[i];
  console.log(i, item);
}

array.forEach(function(item, i) {
    console.log(i, item)
  });