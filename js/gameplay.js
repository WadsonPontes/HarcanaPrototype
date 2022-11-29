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

const HABILIDADES = [
	['id', 'nome_habilidade', 'descricao', 'imagem',                ],
	[1,    'Cura',            '',          'img/icon/skill/cura.png'],
];

const ESPECIAIS = [
	['id', 'nome_especial', 'descricao', 'imagem',                       ],
	[1,    'Furtividade',   '',          'img/icon/skill/furtividade.png'],
];

const TIPOS_DE_CARTAS = [
	['id', 'nome_tipo', 'descricao', 'imagem',                       ],
];

const CARTAS = [
	['id', 'nome_carta',    'descricao', 'imagem',         'id_tipo', 'nivel', 'dano', 'saude', 'id_primaria', 'id_secundaria', 'id_terciaria', 'id_especial'],
	[1,    'Dragão Branco', '',          'img/card/1.jpg', 1,         'nivel', 'dano', 'saude', 'id_primaria', 'id_secundaria', 'id_terciaria', 'id_especial'],
];

class Habilidade {
	constructor(id, valor) {
		this.id = id;
		this.nome_habilidade = HABILIDADES[id].nome_habilidade;
		this.descricao = HABILIDADES[id].descricao;
		this.imagem = HABILIDADES[id].imagem;
		this.valor_base = valor;
		this.valor = valor;
	}
}

class Especial {
	constructor(id) {
		this.id = id;
		this.nome_especial = ESPECIAIS[id].nome_especial;
		this.descricao = ESPECIAIS[id].descricao;
		this.imagem = ESPECIAIS[id].imagem;
	}
}

class Carta {
	constructor(id, nome_carta, descricao, imagem, tipo, elemento, signo, nivel, dano, saude) {
		this.id = id;
		this.nome_carta = nome_carta;
		this.descricao = descricao;
		this.imagem = imagem;
		this.tipo = tipo;
		this.elemento = elemento;
		this.signo = signo;
		this.nivel = nivel;
		this.dano_base = dano;
		this.saude_base = saude;
		this.dano = dano;
		this.saude = saude;
		this.primaria = Habilidade(id, 1);
		this.secundaria = Habilidade(id, 2);
		this.terciaria = Habilidade(id, 3);
		this.especial = new Especial();
	}
}

class Personagem {
	constructor(id, nome_personagem, descricao, imagem, classe, nivel, dano, saude) {
		this.id = id;
		this.nome_personagem = nome_personagem;
		this.descricao = descricao;
		this.imagem = imagem;
		this.classe = classe;
		this.nivel = nivel;
		this.dano = dano;
		this.saude = saude;
		this.primaria = Habilidade(id, 1);
		this.secundaria = Habilidade(id, 2);
		this.terciaria = Habilidade(id, 3);
		this.especial = new Especial();
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