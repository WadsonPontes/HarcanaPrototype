let mensagem = document.querySelector('#mensagem');

// cria a conexão persistente
var source = new EventSource('php/gameplay.php');

// define um evento que é executado quando o servidor envia uma mensagem
source.onmessage = function (event) {
    mensagem.textContent = event.data;
};

function enviar(entrada) {
    let dados = new FormData();
    dados.append('entrada', entrada);

    fetch('php/servidor.php', { method: 'POST', body: dados })
    .then((raw) => console.log(raw))
    .catch((erro) => {
        console.log(`error: ${erro.message}`);
    });
}