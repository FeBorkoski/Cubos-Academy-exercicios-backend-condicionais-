const c = "E";

if (c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U' || c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
  if (c === c.toUpperCase()) {
    console.log("Vogal maiúscula");
  } else {
    console.log("Vogal minúscula");
  }
} else if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
  console.log("Consoante");
} else if (c >= '0' && c <= '9') {
  console.log("Número");
} else {
  console.log("Caractere inválido");
}
