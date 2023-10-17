const ladoA = 3;
const ladoB = 3;

if (ladoA === ladoB) {
  let nomeBucha;
  
  if (ladoA === 0) {
    nomeBucha = "Branco";
  } else if (ladoA === 1) {
    nomeBucha = "Ás";
  } else if (ladoA === 2) {
    nomeBucha = "Duque";
  } else if (ladoA === 3) {
    nomeBucha = "Terno";
  } else if (ladoA === 4) {
    nomeBucha = "Quadra";
  } else if (ladoA === 5) {
    nomeBucha = "Quina";
  } else if (ladoA === 6) {
    nomeBucha = "Sena";
  } else {
    nomeBucha = "Desconhecido";
  }
  
  console.log(`Bucha de ${nomeBucha}`);
} else {
  console.log("NÃO");
}
