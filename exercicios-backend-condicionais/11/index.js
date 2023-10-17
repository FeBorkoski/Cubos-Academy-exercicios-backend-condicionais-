const rendaMensalEmCentavos = 100000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;
const rendaMinimaParaParcela = 200000; 

const valorDasParcelas = (rendaMensalEmCentavos / 100) * 0.18;

if (mesesDecorridos > 60) {
    console.log("Você não deve mais nada!");
} else if (totalJaPagoPeloAluno >= 1800000) {
    console.log("Parcelas quitadas!");
} else if (rendaMensalEmCentavos < 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
} else {
    console.log(`O valor da parcela desse mês é R$ ${valorDasParcelas.toFixed(2)} reais`)
}