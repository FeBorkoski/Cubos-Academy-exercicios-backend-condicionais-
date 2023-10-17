// Tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

// Valor da mercadoria (centavos)
const valorDoProduto = 13000;

let desconto = 0;

if (tipoDePagamento === "credito") {
  desconto = 0.05;
} else if (tipoDePagamento === "cheque") {
  desconto = 0.03;
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
  desconto = 0.1;
} else {
  console.log("Forma de pagamento inválida.");
}

const valorFinal = valorDoProduto - valorDoProduto * desconto;
const valorFinalFormatado = (valorFinal / 100).toFixed(2);

console.log(`Valor a ser pago: R$${valorFinalFormatado}`);
