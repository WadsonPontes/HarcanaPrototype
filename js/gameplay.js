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
	[ 1,   'Cura',            '',          'img/icon/skill/cura.png'],
];

const ESPECIAIS = [
	['id', 'nome_especial', 'descricao', 'imagem',                       ],
	[ 1,   'Furtividade',   '',          'img/icon/skill/furtividade.png'],
];

const TIPOS_DE_CARTAS = [
	['id', 'nome_tipo', 'descricao', 'imagem',                 ],
	[ 1,   'Dragão',    '',          'img/icon/type/dragao.png'],
];

const CARTAS = [
	['id', 'nome_carta',    'descricao', 'imagem',         'id_tipo', 'dano', 'saude', 'id_primaria', 'valor_primario', 'id_secundaria', 'valor_secundario', 'id_terciaria', 'valor_terciaria', 'id_especial'],
	[ 1,   'Dragão Branco', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
];

class Habilidade {
	constructor(id, valor, nivel) {
		this.id = id;
		this.nome_habilidade = HABILIDADES[id][1];
		this.descricao = HABILIDADES[id][2];
		this.imagem = HABILIDADES[id][3];
		this.valor_base = valor * (0.9 + nivel / 10);
		this.valor = this.valor_base;
	}
}

class Especial {
	constructor(id) {
		this.id = id;
		this.nome_especial = ESPECIAIS[id][1];
		this.descricao = ESPECIAIS[id][2];
		this.imagem = ESPECIAIS[id][3];
	}
}

class TipoCarta {
	constructor(id) {
		this.id = id;
		this.nome_tipo = TIPOS_DE_CARTAS[id][1];
		this.descricao = TIPOS_DE_CARTAS[id][2];
		this.imagem = TIPOS_DE_CARTAS[id][3];
	}
}

class Carta {
	constructor(id, nivel) {
		this.id = id;
		this.nome_carta = CARTAS[id][1];
		this.descricao = CARTAS[id][2];
		this.imagem = CARTAS[id][3];
		this.tipo = new TipoCarta(CARTAS[id][4]);
		this.nivel = nivel;
		this.dano_base = CARTAS[id][5] * (0.9 + nivel / 10);
		this.saude_base = CARTAS[id][6] * (0.9 + nivel / 10);
		this.dano = this.dano_base;
		this.saude = this.saude_base;
		this.primaria = Habilidade(CARTAS[id][7], CARTAS[id][8], nivel);
		this.secundaria = Habilidade(CARTAS[id][9], CARTAS[id][10], nivel);
		this.terciaria = Habilidade(CARTAS[id][11], CARTAS[id][12], nivel);
		this.especial = new Especial(CARTAS[id][13]);
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