class Personagem {
	constructor(id, nivel, jogador) {
		this.id = id;
		this.jogador = jogador;
		this.nome_carta = PERSONAGENS[id][1];
		this.descricao = PERSONAGENS[id][2];
		this.imagem = PERSONAGENS[id][3];
		this.classe = PERSONAGENS[id][4];
		this.nivel = nivel;
		this.saude_base = Math.round(PERSONAGENS[id][5] * (0.9 + nivel / 10));
		this.saude = this.saude_base;
	}

	monstrar() {
		this.jogador.el.personagem.imagem.src = this.imagem;
		this.jogador.el.personagem.titulo.textContent = this.jogador.nome_jogador;
		this.jogador.el.personagem.subtitulo.textContent = this.classe;
		this.jogador.el.personagem.saude.textContent = this.saude;
	}

	getEl() {
		let personagem = {};
	
		personagem.imagem = document.querySelector(`#char-${this.jogador.posicao}-img`);
		personagem.titulo = document.querySelector(`#char-${this.jogador.posicao}-title`);
		personagem.subtitulo = document.querySelector(`#char-${this.jogador.posicao}-subtitle`);
		personagem.saude = document.querySelector(`#char-${this.jogador.posicao}-health-number`);
	
		return personagem;
	  }
}