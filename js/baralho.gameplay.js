class Baralho {
	constructor(id, jogador) {
		this.id = id;
		this.cartas = [];

    for (let linha of BARALHOS[id]) {
      let carta = new Carta(linha[0], linha[1], jogador);
      this.cartas.push(carta);
    }
	}
}