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