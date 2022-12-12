class Baralho {
	constructor(id, jogador, partida) {
		this.id = id;
    this.jogador = jogador;
		this.partida = partida;
    this.imagem = '';
		this.cartas = [];
    this.el = {};
    this.getEl();
    this.iniciar();
	}

  iniciar() {
    for (let i = 1; i < BARALHOS[this.id].length; ++i) {
      let carta = new Carta(BARALHOS[this.id][i][0], i, 'baralho', BARALHOS[this.id][i][1], this.jogador, this, this.partida);
      this.cartas.push(carta);
    }

    this.embaralhar();
  }

  puxar() {
    this.el.quantidade.textContent = `${this.cartas.length-1}`;
    return this.cartas.pop();
  }

  embaralhar() {
    let i = this.cartas.length, temp, index;

    while (i > 0) {
      index = Math.floor(Math.random() * i);

      i--;

      temp = this.cartas[i];
      this.cartas[i] = this.cartas[index];
      this.cartas[index] = temp;
    }
  }

  getEl() {
    this.el.imagem = document.querySelector(`#deck-${this.jogador.posicao}-img`);
    this.el.quantidade = document.querySelector(`#deck-${this.jogador.posicao}-number`);
    this.el.compra = this.jogador.getElCarta('draw', this.jogador.posicao);
  }
}