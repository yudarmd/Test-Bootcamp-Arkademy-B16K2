function usernameCheck(username) {
  if (username.match(/^[A-Z]{7}$/)) {
    return true
  }
  return false
}

function passwordCheck(password) {
  if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#])[a-zA-Z0-9#]{9,15}$/)) {
    return true
  }
  return false
}

console.log(usernameCheck("SABRINA"))
console.log(passwordCheck("#DirumahAj4"))