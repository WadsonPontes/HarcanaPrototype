class Carta {
	constructor(id, nivel) {
		this.id = id;
		this.nome_carta = CARTAS[id][1];
		this.descricao = CARTAS[id][2];
		this.imagem = CARTAS[id][3];
		this.tipo = new TipoCarta(CARTAS[id][4]);
		this.nivel = nivel;
		this.dano_base = Math.round(CARTAS[id][5] * (0.9 + nivel / 10));
		this.saude_base = Math.round(CARTAS[id][6] * (0.9 + nivel / 10));
		this.dano = this.dano_base;
		this.saude = this.saude_base;
		this.primaria = new Habilidade(CARTAS[id][7], CARTAS[id][8], nivel);
		this.secundaria = new Habilidade(CARTAS[id][9], CARTAS[id][10], nivel);
		this.terciaria = new Habilidade(CARTAS[id][11], CARTAS[id][12], nivel);
		this.especial = new Especial(CARTAS[id][13]);
	}
}