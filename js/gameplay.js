// let mensagem = document.querySelector('#mensagem');

// // cria a conexão persistente
// var source = new EventSource('php/gameplay.php');

// // define um evento que é executado quando o servidor envia uma mensagem
// source.onmessage = function (event) {
// 	mensagem.textContent = event.data;
// };

// function enviar(entrada) {
// 	let dados = new FormData();
// 	dados.append('entrada', entrada);

// 	fetch('php/servidor.php', { method: 'POST', body: dados })
// 	then((raw) => console.log(raw))
// 	catch((erro) => {
// 		console.log(`error: ${erro.message}`);
// 	});
// }

class Carta {
	constructor(id, nome_carta, descricao, tipo, elemento, nivel, dano, saude) {
		this.id = id;
		this.nome_carta = nome_carta;
		this.descricao = descricao;
		this.tipo = tipo;
		this.elemento = elemento;
		this.nivel = nivel;
		this.dano = dano;
		this.saude = saude;
	}
}

class Personagem {
	constructor(id) {
		this.nome_jogador = sessionStorage.getItem(`nome_jogador_${id}`);
		this.personagem = new this.personagem(); sessionStorage.getItem(`personagem_${id}`);
	}
}

class Jogador {
	constructor(id) {
		this.nome_jogador = sessionStorage.getItem(`nome_jogador_${id}`);
		this.personagem = new this.personagem(); sessionStorage.getItem(`personagem_${id}`);
	}
}

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
		fecharFullscreen();
	}
	else {
		FULLSCREEN = true;
		document.querySelector('#fullscreen-img').src = 'img/icon/gui/fullscreen-off.png';
		abrirFullscreen();
	}
}

function abrirFullscreen() {
	if (document.body.requestFullscreen) {
		document.body.requestFullscreen();
	}
	else if (document.body.webkitRequestFullscreen) { /* Safari */
		document.body.webkitRequestFullscreen();
	}
	else if (document.body.msRequestFullscreen) { /* IE11 */
		document.body.msRequestFullscreen();
	}
}

function fecharFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	}
	else if (document.webkitExitFullscreen) { /* Safari */
		document.webkitExitFullscreen();
	}
	else if (document.msExitFullscreen) { /* IE11 */
		document.msExitFullscreen();
	}
}