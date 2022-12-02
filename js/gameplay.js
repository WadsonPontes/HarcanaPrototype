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

const PERSONAGENS = [
	['id', 'nome_personagem',    'descricao', 'imagem',         'classe',  'saude'],
	[ 1,   'Brif Wolfsteam',     '',          'img/char/1.jpg', 'bárbaro',  50    ],
];

const BARALHOS = [
  [
    ['id', 'nivel'],
  ],
  
  [ // BARALHO 1
    ['id', 'nivel'],
    [ 1,    1     ],
    [ 2,    1     ],
    [ 3,    1     ],
    [ 4,    1     ],
    [ 5,    1     ],
    [ 6,    1     ],
    [ 7,    1     ],
    [ 8,    1     ],
    [ 9,    1     ],
    [ 10,   1     ],
    [ 11,   1     ],
    [ 12,   1     ],
  ],
];

const JOGADORES = [
  ['id', 'nome_jogador',  'tipo',   'id_personagem', 'nivel_personagem', 'id_baralho'],
  [ 1,   'Wadson Pontes', 'humano',  1,               1,                  1          ],
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
	constructor(id, nivel) {
		this.id = id;
		this.nome_carta = PERSONAGENS[id][1];
		this.descricao = PERSONAGENS[id][2];
		this.imagem = PERSONAGENS[id][3];
		this.classe = PERSONAGENS[id][4];
		this.nivel = nivel;
		this.saude_base = PERSONAGENS[id][5] * (0.9 + nivel / 10);
		this.saude = this.saude_base;
	}
}

class Baralho {
	constructor(id) {
		this.id = id;
		this.cartas = [];

    for (let linha of BARALHOS[id]) {
      let carta = new Carta(linha[0], linha[1]);
      this.cartas.push(carta);
    }
	}
}

class Jogador {
	constructor(id, posicao, partida, oponente) {
    this.id = JOGADORES[id][0];
    this.posicao = posicao;
		this.nome_jogador = JOGADORES[id][1];
    this.tipo = JOGADORES[id][2];
		this.personagem = new Personagem(JOGADORES[id][3], JOGADORES[id][4]);
    this.baralho = new Baralho(JOGADORES[id][5]);
    this.partida = partida;
    this.oponente = oponente;
    oponente.oponente = this;
    this.el = {};
    this.getEl();
	}

  getEl() {
    this.el.mao = [];
    this.el.campo = [];
    
    for (let i = 1; i <= 4; ++i) {
      let carta = this.getElCarta('hand', this.posicao, i);
      this.el.mao.push(carta);
    }

    for (let i = 1; i <= 5; ++i) {
      let carta = this.getElCarta('field', this.posicao, i);
      this.el.campo.push(carta);
    }

    this.el.draw = this.getElCarta('draw', this.posicao);
    this.el.personagem = this.getElPersonagem(this.posicao);
  }

  getElCarta(tipo, posicao_jogador, posicao_carta) {
    let carta = {};
    carta.dano = {};
    carta.saude = {};
    carta.primaria = {};
    carta.secundaria = {};
    carta.terciaria = {};
    carta.especial = {};
    
    carta.imagem = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-img`);
    carta.nome = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-name`);
    carta.nivel = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-level`);
    carta.tipo = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-type-icon`);
    carta.dano.valor = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-attack-number`);
    carta.dano.icone = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-attack-icon`);
    carta.saude.valor = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-health-number`);
    carta.saude.icone = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-health-icon`);
    carta.primaria.valor = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-primary-number`);
    carta.primaria.icone = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-primary-icon`);
    carta.secundaria.valor = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-secondary-number`);
    carta.secundaria.icone = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-secondary-icon`);
    carta.terciaria.valor = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-tertiary-number`);
    carta.terciaria.icone = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-tertiary-icon`);
    carta.especial.icone = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-special-icon`);

    return carta;
  }

  getElPersonagem(posicao_jogador) {
    let personagem = {};
    personagem.saude = {};

    personagem.imagem = document.querySelector(`#char-${posicao_jogador}-img`);
    personagem.titulo = document.querySelector(`#char-${posicao_jogador}-title`);
    personagem.subtitulo = document.querySelector(`#char-${posicao_jogador}-subtitle`);
    personagem.saude.valor = document.querySelector(`#char-${posicao_jogador}-health-number`);
    personagem.saude.icone = document.querySelector(`#char-${posicao_jogador}-health-icon`);
  }
}

class Partida {
	constructor(id_jogador1, id_jogador2) {
    this.jogador1 = new Jogador(id_jogador1, 1, this, null);
    this.jogador2 = new Jogador(id_jogador2, 2, this, this.jogador1);
    this.ataque = this.jogador1;
    this.defesa = this.jogador2;
    this.turno = 1;
    this.tempo = 99;
    this.som = true;
    this.tela_cheia = false;
    this.el = {};
    this.getEl();
	}

  getEl() {
    this.el.tempo = document.querySelector('#game-time');
    this.el.tela_cheia = document.querySelector('#fullscreen-icon');
    this.el.desistir = document.querySelector('#surrender-icon');
    this.el.som = document.querySelector('#sound-icon');
  }
}

let SOUND = true;
let FULLSCREEN = false;

function gameplay() {
  let partida = new Partida();
}

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