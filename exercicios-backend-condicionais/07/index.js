const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000;

if (portadoraDeDoenca || aposentada) {
  console.log("ISENTA");
} else if (totalDeRendimentos <= 2855970) { 
  console.log("Vaza Leão, já ta dificil sem voce");
} else {
  console.log("Pega Leão!");
}
