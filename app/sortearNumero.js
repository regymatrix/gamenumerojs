const menorValor=10;
const maiorValor=500;
const numeroSecreto = gerarNumeroAleatorio();
console.log("Número secreto: "+numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;


function gerarNumeroAleatorio(){
    
    return parseInt(Math.random() * maiorValor + 1);
}