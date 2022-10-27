function get(nome) {
    return document.querySelector(nome);
}

let t = {
    resultado: get('#resultado'),
    campo2: [
        { card: null, el: get('#card-campo-red-1'), at: get('#card-campo-red-1 .atk'), vi: get('#card-campo-red-1 .vi') },
        { card: null, el: get('#card-campo-red-2'), at: get('#card-campo-red-2 .atk'), vi: get('#card-campo-red-2 .vi') },
        { card: null, el: get('#card-campo-red-3'), at: get('#card-campo-red-3 .atk'), vi: get('#card-campo-red-3 .vi') },
        { card: null, el: get('#card-campo-red-4'), at: get('#card-campo-red-4 .atk'), vi: get('#card-campo-red-4 .vi') },
        { card: null, el: get('#card-campo-red-5'), at: get('#card-campo-red-5 .atk'), vi: get('#card-campo-red-5 .vi') },
        { card: null, el: get('#card-campo-red-6'), at: get('#card-campo-red-6 .atk'), vi: get('#card-campo-red-6 .vi') },
        { card: null, el: get('#card-campo-red-7'), at: get('#card-campo-red-7 .atk'), vi: get('#card-campo-red-7 .vi') },
    ],
    campo1: [
        { card: null, el: get('#card-campo-blue-1'), at: get('#card-campo-blue-1 .atk'), vi: get('#card-campo-blue-1 .vi') },
        { card: null, el: get('#card-campo-blue-2'), at: get('#card-campo-blue-2 .atk'), vi: get('#card-campo-blue-2 .vi') },
        { card: null, el: get('#card-campo-blue-3'), at: get('#card-campo-blue-3 .atk'), vi: get('#card-campo-blue-3 .vi') },
        { card: null, el: get('#card-campo-blue-4'), at: get('#card-campo-blue-4 .atk'), vi: get('#card-campo-blue-4 .vi') },
        { card: null, el: get('#card-campo-blue-5'), at: get('#card-campo-blue-5 .atk'), vi: get('#card-campo-blue-5 .vi') },
        { card: null, el: get('#card-campo-blue-6'), at: get('#card-campo-blue-6 .atk'), vi: get('#card-campo-blue-6 .vi') },
        { card: null, el: get('#card-campo-blue-7'), at: get('#card-campo-blue-7 .atk'), vi: get('#card-campo-blue-7 .vi') },
    ],
    mao2: [
        { card: null, el: get('#card-mao-red-1'), at: get('#card-mao-red-1 .atk'), vi: get('#card-mao-red-1 .vi') },
        { card: null, el: get('#card-mao-red-2'), at: get('#card-mao-red-2 .atk'), vi: get('#card-mao-red-2 .vi') },
        { card: null, el: get('#card-mao-red-3'), at: get('#card-mao-red-3 .atk'), vi: get('#card-mao-red-3 .vi') },
        { card: null, el: get('#card-mao-red-4'), at: get('#card-mao-red-4 .atk'), vi: get('#card-mao-red-4 .vi') },
    ],
    mao1: [
        { card: null, el: get('#card-mao-blue-1'), at: get('#card-mao-blue-1 .atk'), vi: get('#card-mao-blue-1 .vi') },
        { card: null, el: get('#card-mao-blue-2'), at: get('#card-mao-blue-2 .atk'), vi: get('#card-mao-blue-2 .vi') },
        { card: null, el: get('#card-mao-blue-3'), at: get('#card-mao-blue-3 .atk'), vi: get('#card-mao-blue-3 .vi') },
        { card: null, el: get('#card-mao-blue-4'), at: get('#card-mao-blue-4 .atk'), vi: get('#card-mao-blue-4 .vi') },
    ],
};

let cartas = [
    {ataque: 3, vida: 4},
    {ataque: 3, vida: 5},
    {ataque: 3, vida: 6},
    {ataque: 3, vida: 7},
    {ataque: 3, vida: 8},
    {ataque: 3, vida: 9},
    {ataque: 4, vida: 5},
    {ataque: 4, vida: 6},
    {ataque: 4, vida: 7},
    {ataque: 4, vida: 8},
    {ataque: 4, vida: 9},
    {ataque: 5, vida: 6},
    {ataque: 5, vida: 7},
    {ataque: 5, vida: 8},
    {ataque: 5, vida: 9},
    {ataque: 6, vida: 7},
    {ataque: 6, vida: 8},
    {ataque: 6, vida: 9},
    {ataque: 7, vida: 8},
    {ataque: 7, vida: 9},
    {ataque: 8, vida: 9},
];

let jogo = {
    estado: 'jogo',
    turno: 0
}

let jogador1 = {
    el: get('#personagem-blue'),
    vi: get('#personagem-blue .vida'),
    id: 1,
    vida: 30,
    baralho: []
};

let jogador2 = {
    el: get('#personagem-red'),
    vi: get('#personagem-red .vida'),
    id: 2,
    vida: 30,
    baralho: []
};

function copia(carta) {
    let nova = {
        ataque: carta.ataque,
        vida: carta.vida
    }

    return nova;
}

function aleatorio(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}

function embaralhar(jogador) {
    for (let i = 0; i < 12; ++i) {
        jogador.baralho.push(copia(cartas[aleatorio(0, cartas.length-1)]));
    }
}

function puxar(jogador) {
    for (let i = 0; i < 4 && jogador.baralho.length; ++i) {
        if (t['mao' + jogador.id][i].card) {
            continue;
        }

        let carta = jogador.baralho.pop();

        t['mao' + jogador.id][i].card = carta;
        t['mao' + jogador.id][i].at.textContent = carta.ataque;
        t['mao' + jogador.id][i].vi.textContent = carta.vida;
        t['mao' + jogador.id][i].at.style.display = 'block';
        t['mao' + jogador.id][i].vi.style.display = 'block';
    }

    
}

function fimDeJogo() {
    jogo.estado = 'fim';
    t.resultado.style.display = 'block';

    if (jogador1.vida == 0) {
        t.resultado.textContent = 'O JOGADOR DE CIMA GANHOU!'
    }
    else {
        t.resultado.textContent = 'O JOGADOR DE BAIXO GANHOU!'
    }
}

function dormir(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function esperar(ms, fn, ...args) {
    await dormir(ms);
    return fn(...args);
}

async function animAndarParaTras(jogador, oponente, i) {
    t['campo' + oponente.id][i].el.style.zIndex = '2';
    t['campo' + jogador.id][i].el.style.zIndex = '3';

    if (jogador.id == 1) {
        t['campo' + jogador.id][i].el.style.transform = "translate(0, 20px)";
    }
    else {
        t['campo' + jogador.id][i].el.style.transform = "translate(0, -20px)";
    }

    await dormir(500);
    animBater(jogador, oponente, i);
}

async function animBater(jogador, oponente, i) {
    if (jogador.id == 1) {
        t['campo' + jogador.id][i].el.style.transform = "translate(0,-100px)";
    }
    else {
        t['campo' + jogador.id][i].el.style.transform = "translate(0,100px)";
    }

   await dormir(500);

   animVoltar(jogador, oponente, i);
}

async function animVoltar(jogador, oponente, i) {
    t['campo' + oponente.id][i].el.style.zIndex = '3';
    t['campo' + jogador.id][i].el.style.zIndex = '2';

    if (jogador.id == 1) {
        t['campo' + jogador.id][i].el.style.transform = "translate(0,0)";
    }
    else {
        t['campo' + jogador.id][i].el.style.transform = "translate(0,0)";
    }

    await dormir(500);

    concluirAtaque(jogador, oponente, i)
}

function atacar(jogador, oponente, i) {
    if (i == t['campo' + jogador.id].length) {
        return;
    }

    if (t['campo' + jogador.id][i].card == null) {
        atacar(jogador, oponente, ++i);
        return;
    }

    animAndarParaTras(jogador, oponente, i);
}

function concluirAtaque(jogador, oponente, i) {
    if (t['campo' + oponente.id][i].card == null) {
        oponente.vida -= t['campo' + jogador.id][i].card.ataque;
        oponente.vida = Math.max(0, oponente.vida);
        oponente.vi.textContent = oponente.vida;
        atacar(jogador, oponente, ++i);
        return;
    }

    if (t['campo' + jogador.id][i].card.ataque < t['campo' + oponente.id][i].card.vida) {
        t['campo' + oponente.id][i].card.vida -= t['campo' + jogador.id][i].card.ataque;
        t['campo' + oponente.id][i].vi.textContent = t['campo' + oponente.id][i].card.vida;
        atacar(jogador, oponente, ++i);
        return;
    }

    oponente.vida -= t['campo' + jogador.id][i].card.ataque - t['campo' + oponente.id][i].card.vida;
    oponente.vida = Math.max(0, oponente.vida);
    oponente.vi.textContent = oponente.vida;

    t['campo' + oponente.id][i].card = null;
    t['campo' + oponente.id][i].at.textContent = '';
    t['campo' + oponente.id][i].vi.textContent = '';
    t['campo' + oponente.id][i].at.style.display = 'none';
    t['campo' + oponente.id][i].vi.style.display = 'none';

    atacar(jogador, oponente, ++i);
}

async function clicou(id, pos) {
    let jogador;
    let oponente;
    let i = 0;

    if (jogo.estado != 'jogo') {
        return;
    }

    if (jogo.turno % 2 !== id-1) {
        return;
    }

    if (t['mao' + id][pos-1].card == null) {
        return;
    }

    while (i < 7 && t['campo' + id][i].card) {
        ++i;
    }

    if (i >= 7) {
        return;
    }

    let carta = t['mao' + id][pos-1].card;

    t['mao' + id][pos-1].card = null;
    t['mao' + id][pos-1].at.textContent = '';
    t['mao' + id][pos-1].vi.textContent = '';
    t['mao' + id][pos-1].at.style.display = 'none';
    t['mao' + id][pos-1].vi.style.display = 'none';

    t['campo' + id][i].card = carta;
    t['campo' + id][i].at.textContent = carta.ataque;
    t['campo' + id][i].vi.textContent = carta.vida;
    t['campo' + id][i].at.style.display = 'block';
    t['campo' + id][i].vi.style.display = 'block';

    if (id == 1) {
        jogador = jogador1;
        oponente = jogador2;
    }
    else {
        jogador = jogador2;
        oponente = jogador1;
    }

    jogo.estado = 'animacao';
    await atacar(jogador, oponente, 0);

    if (oponente.vida == 0) {
        fimDeJogo();
        return;
    }

    ++jogo.turno;
    puxar(oponente);
    jogo.estado = 'jogo';
}

function run() {
    ++jogo.turno;

    // window.requestAnimationFrame(run);
    setTimeout(run, 60);
}

function main() {
    jogador1.vi.textContent = jogador1.vida;
    jogador2.vi.textContent = jogador2.vida;

    embaralhar(jogador1);
    embaralhar(jogador2);

    puxar(jogador1);
    puxar(jogador2);

    // run();
}

main();