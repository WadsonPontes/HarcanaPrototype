class Habilidade {
	constructor(id, tipo, valor, nivel, jogador, partida) {
		this.id = id;
    this.tipo = tipo;
    this.jogador = jogador;
    this.partida = partida;
		this.nome_habilidade = HABILIDADES[id][1];
		this.descricao = HABILIDADES[id][2];
		this.imagem = HABILIDADES[id][3];
		this.valor_base = Math.floor(valor * (0.9 + nivel / 10));
		this.valor = this.valor_base;
	}

	mostrarCompra() {
		if (this.id) {
			this.jogador.el.compra[this.tipo].el.style.display = 'block';
			this.jogador.el.compra[this.tipo].valor.textContent = this.valor;
			this.jogador.el.compra[this.tipo].imagem.src = this.imagem;
		}
		else {
		  this.jogador.el.compra[this.tipo].el.style.display = 'none';
		}
	}

  mostrarHabilidade(local, i) {
    if (this.id) {
      this.jogador.el[local][i][this.tipo].valor.textContent = this.valor;
      this.jogador.el[local][i][this.tipo].imagem.src = this.imagem;
    }
    else {
      this.jogador.el[local][i][this.tipo].el.style.display = 'none';
    }
  }
}