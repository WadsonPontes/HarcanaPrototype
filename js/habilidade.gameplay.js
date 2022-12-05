class Habilidade {
	constructor(id, valor, nivel) {
		this.id = id;
		this.nome_habilidade = HABILIDADES[id][1];
		this.descricao = HABILIDADES[id][2];
		this.imagem = HABILIDADES[id][3];
		this.valor_base = Math.round(valor * (0.9 + nivel / 10));
		this.valor = this.valor_base;
	}
}