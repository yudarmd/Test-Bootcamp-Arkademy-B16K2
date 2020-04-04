function findDuplicates(parm) {
  if (typeof parm == "string" && parm != "") {
    var str = parm.replace(/\s/g, "");
    var res_split = str.split("");
    var res = '';

    res_split.sort();

    var current = null;
    var count = 1;
    for (var i = 0; i < res_split.length; i++) {
      if (res_split[i] != current) {
        if (count > 1) {
          res += current + ' : ' + count + '\n';
        }
        current = res_split[i];
        count = 1;
      } else {
        count++;
      }
    }
    if (count > 1) {
      res += current + ' : ' + count + '\n';
    }
    if (res != "") {
      return res;
    } else {
      return "Tidak ada karakter yang berulang!";
    }
  } else {
    return "Input Harus String";
  }

}

var result = findDuplicates("cepat kerjakan!!!");

console.log(result);