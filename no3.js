function divide(ary, jum) {
  var temp = [];

  if (ary.length % jum == 1) {
    for (var i = 0; i < ary.length - 1; i += jum) {
      temp.push(ary.slice(i, i + jum));
    }
    temp[temp.length - 1].push(ary[ary.length - 1])
  } else {
    for (var i = 0; i < ary.length; i += jum) {
      temp.push(ary.slice(i, i + jum));
    }
  }

  return temp;
}

var result = divide([1, 2, 3, 4, 5], 2);

console.log(result)