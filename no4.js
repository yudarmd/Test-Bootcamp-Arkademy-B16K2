function validateColor(input) {
  var code, len;

  if (input[0] == "#") {
    len = input.length
    if (len == 4 || len == 7) {
      input = input.toLowerCase();
      for (let i = 1; i < len; i++) {
        code = input.charCodeAt(i);
        if (!((code >= 48 && code <= 57) || (code >= 97 && code <= 102))) {
          return "Format kode Hex salah!";
        }
      }
      return "Format kode Hex benar!";
    }
  }
  return "Format kode Hex salah!";
}

var result = validateColor("#FFF")
console.log(result);