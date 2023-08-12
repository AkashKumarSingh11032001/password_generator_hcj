const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]></-/?";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
  let newPassword = "";
  newPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
  newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  newPassword += numbers[Math.floor(Math.random() * numbers.length)];
  newPassword += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > newPassword.length) {
    newPassword += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = newPassword;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
