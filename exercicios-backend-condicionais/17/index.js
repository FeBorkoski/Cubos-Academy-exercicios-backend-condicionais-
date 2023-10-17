//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const qntDoParcelamento = 10;

//valor pago
const valorPago = 300;
const produtosEmReais = valorDoProduto / 100;
const valorParcelas = (valorDoProduto / qntDoParcelamento)/100;
const pagas = valorPago /valorParcelas;
const falta = qntDoParcelamento - pagas;

console.log (`Restam ${falta} parcelas de R$ ${valorParcelas.toFixed(2)}`);