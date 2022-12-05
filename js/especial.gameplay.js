class Especial {
	constructor(id) {
		this.id = id;
		this.nome_especial = ESPECIAIS[id][1];
		this.descricao = ESPECIAIS[id][2];
		this.imagem = ESPECIAIS[id][3];
	}
}