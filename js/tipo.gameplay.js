class TipoCarta {
	constructor(id) {
		this.id = id;
		this.nome_tipo = TIPOS_DE_CARTAS[id][1];
		this.descricao = TIPOS_DE_CARTAS[id][2];
		this.imagem = TIPOS_DE_CARTAS[id][3];
	}
}