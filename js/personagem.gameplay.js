class Personagem {
	constructor(id, nivel, jogador, partida) {
		this.id = id;
		this.jogador = jogador;
		this.partida = partida;
		this.nome_carta = PERSONAGENS[id][1];
		this.descricao = PERSONAGENS[id][2];
		this.imagem = PERSONAGENS[id][3];
		this.classe = PERSONAGENS[id][4];
		this.nivel = nivel;
		this.saude_base = Math.round(PERSONAGENS[id][5] * (0.9 + nivel / 10));
		this.saude = this.saude_base;
		this.el = {};
    this.getEl();
	}

	monstrar() {
		this.el.imagem.src = this.imagem;
		this.el.titulo.textContent = this.jogador.nome_jogador;
		this.el.subtitulo.textContent = this.classe;
		this.el.saude.textContent = this.saude;
	}

	getEl() {
		this.el.imagem = document.querySelector(`#char-${this.jogador.posicao}-img`);
		this.el.titulo = document.querySelector(`#char-${this.jogador.posicao}-title`);
		this.el.subtitulo = document.querySelector(`#char-${this.jogador.posicao}-subtitle`);
		this.el.saude = document.querySelector(`#char-${this.jogador.posicao}-health-number`);
	}
}