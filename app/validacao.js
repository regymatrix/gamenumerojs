function verificarValorValido(pchute){

    const numero =+pchute;
    if (chuteForInvalido(numero)){
        elementoChute.innerHTML+='<div>Valor inválido</div>'
    }

    if (numeroMaiorouMenor(numero)){
        elementoChute.innerHTML+=`<div>Valor inválido. Precisa está entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero===numeroSecreto){
        document.body.innerHTML=`
           <h2>Você acertou!</h2>
           <h3>O número secreto era ${numeroSecreto}</h3>

           <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML+=  `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i>
        </div> `

    }else{
        elementoChute.innerHTML+=  `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i>
        </div> `
    }
}

function chuteForInvalido(numero){

    return Number.isNaN(numero);
}

function numeroMaiorouMenor(pnumero){
    return pnumero > maiorValor || pnumero < menorValor

}

document.body.addEventListener('click', e=>{
    if (e.target.id=="jogar-novamente"){
        window.location.reload(); 
    }
})