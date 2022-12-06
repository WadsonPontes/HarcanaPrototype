class Jogador {
	constructor(id, posicao, partida, oponente) {
    this.id = JOGADORES[id][0];
    this.posicao = posicao;
		this.nome_jogador = JOGADORES[id][1];
    this.tipo = JOGADORES[id][2];
		this.personagem = new Personagem(JOGADORES[id][3], JOGADORES[id][4]);
    this.baralho = new Baralho(JOGADORES[id][5], this);
    this.mao = ['posicao', null, null, null, null];
    this.campo = ['posicao', null, null, null, null, null];
    this.partida = partida;
    this.oponente = oponente;
    this.el = {};
    this.getEl();
	}

  jogar() {
    this.puxar();

    if (this.tipo == 'computador')
      this.inteligencia();
  }

  async puxar() {
    this.partida.estado = 'puxando';

    for (let i = 1; i <= 4 && this.baralho.cartas.length; ++i) {
      if (this.mao[i])
        continue;

      let carta = this.baralho.cartas.pop();
      await carta.animPuxar(i);
      this.mao[i] = carta;
    }

    this.partida.estado = 'jogando';
  }

  inteligencia() {

  }

  getEl() {
    this.el.compra = this.getElCarta('draw', this.posicao);
    this.el.personagem = this.getElPersonagem(this.posicao);
    this.el.mao = [null];
    this.el.campo = [null];
    
    for (let i = 1; i <= 4; ++i) {
      let carta = this.getElCarta('hand', this.posicao, i);
      this.el.mao.push(carta);
    }

    for (let i = 1; i <= 5; ++i) {
      let carta = this.getElCarta('field', this.posicao, i);
      this.el.campo.push(carta);
    }
  }

  getElCarta(tipo, posicao_jogador, posicao_carta) {
    let carta = {};
    carta.primaria = {};
    carta.secundaria = {};
    carta.terciaria = {};
    
    carta.el = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}`);
    carta.imagem = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-img`);
    carta.nome = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-name`);
    carta.nivel = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-level`);
    carta.tipo = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-type-icon`);
    carta.dano = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-attack-number`);
    carta.saude = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-health-number`);
    carta.primaria.el = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-primary`);
    carta.primaria.valor = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-primary-number`);
    carta.primaria.imagem = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-primary-icon`);
    carta.secundaria.el = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-secondary`);
    carta.secundaria.valor = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-secondary-number`);
    carta.secundaria.imagem = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-secondary-icon`);
    carta.terciaria.el = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-tertiary`);
    carta.terciaria.valor = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-tertiary-number`);
    carta.terciaria.imagem = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-tertiary-icon`);
    carta.especial = document.querySelector(`#${tipo}-${posicao_jogador}${tipo == 'draw' ? '' : `-card-${posicao_carta}`}-special-icon`);

    return carta;
  }

  getElPersonagem(posicao_jogador) {
    let personagem = {};

    personagem.imagem = document.querySelector(`#char-${posicao_jogador}-img`);
    personagem.titulo = document.querySelector(`#char-${posicao_jogador}-title`);
    personagem.subtitulo = document.querySelector(`#char-${posicao_jogador}-subtitle`);
    personagem.saude = document.querySelector(`#char-${posicao_jogador}-health-number`);

    return personagem;
  }
}