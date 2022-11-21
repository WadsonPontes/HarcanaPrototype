// let mensagem = document.querySelector('#mensagem');

// // cria a conexão persistente
// var source = new EventSource('php/gameplay.php');

// // define um evento que é executado quando o servidor envia uma mensagem
// source.onmessage = function (event) {
//     mensagem.textContent = event.data;
// };

// function enviar(entrada) {
//     let dados = new FormData();
//     dados.append('entrada', entrada);

//     fetch('php/servidor.php', { method: 'POST', body: dados })
//     .then((raw) => console.log(raw))
//     .catch((erro) => {
//         console.log(`error: ${erro.message}`);
//     });
// }

let SOUND = true;
let FULLSCREEN = false;

function alternarSom() {
    if (SOUND) {
        SOUND = false;
        document.querySelector('#sound-img').src = 'img/icon/gui/sound-off.png';
    }
    else {
        SOUND = true;
        document.querySelector('#sound-img').src = 'img/icon/gui/sound.png';
    }
}

function alternarFullscreen() {
    if (FULLSCREEN) {
        FULLSCREEN = false;
        document.querySelector('#fullscreen-img').src = 'img/icon/gui/fullscreen.png';
        closeFullscreen();
    }
    else {
        FULLSCREEN = true;
        document.querySelector('#fullscreen-img').src = 'img/icon/gui/fullscreen-off.png';
        openFullscreen();
    }
}

function openFullscreen() {
    if (document.body.requestFullscreen) {
      document.body.requestFullscreen();
    } else if (document.body.webkitRequestFullscreen) { /* Safari */
      document.body.webkitRequestFullscreen();
    } else if (document.body.msRequestFullscreen) { /* IE11 */
      document.body.msRequestFullscreen();
    }
  }
  
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }