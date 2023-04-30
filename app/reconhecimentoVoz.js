const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang="pt-BR";

recognition.start();

recognition.addEventListener('result',onSpeak);


function onSpeak(e){
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificarValorValido(chute);
}

function exibeChuteNaTela(pChute){

    elementoChute.innerHTML=`
      <div>Você disse</div>
      <span class="box">${pChute}</span>
    `
}

 recognition.addEventListener('end',()=>recognition.start())
