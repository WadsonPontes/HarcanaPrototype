class Personagem {
	constructor(id, nivel) {
		this.id = id;
		this.nome_carta = PERSONAGENS[id][1];
		this.descricao = PERSONAGENS[id][2];
		this.imagem = PERSONAGENS[id][3];
		this.classe = PERSONAGENS[id][4];
		this.nivel = nivel;
		this.saude_base = Math.round(PERSONAGENS[id][5] * (0.9 + nivel / 10));
		this.saude = this.saude_base;
	}
}