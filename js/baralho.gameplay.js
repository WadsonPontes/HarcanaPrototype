class Baralho {
	constructor(id, jogador) {
		this.id = id;
		this.cartas = [];

    for (let i = 1; i < BARALHOS[id].length; ++i) {
      let carta = new Carta(BARALHOS[id][i][0], i, 'baralho', BARALHOS[id][i][1], jogador);
      this.cartas.push(carta);
    }
	}
}