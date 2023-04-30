const elementoChute = document.getElementById('chute');
const bntParar= document.getElementById('bntParar');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();


// recognition.lang="en-US";
recognition.lang="pt-BR";
recognition.continuous = true;
recognition.interimResults=true;

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

// recognition.addEventListener('end',function(){
//   document.getElementById('status').textContent = "Parado";
// })

//  recognition.onstart = function() {
//   document.getElementById('status').textContent = "Gravando";
// }

// bntParar.addEventListener('click',function(){
//   recognition.stop();
//   document.getElementById('status').textContent = "Parado";
// })