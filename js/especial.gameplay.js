class Especial {
	constructor(id, tipo, jogador, partida) {
		this.id = id;
    this.tipo = tipo;
    this.jogador = jogador;
    this.partida = partida;
		this.nome_especial = ESPECIAIS[id][1];
		this.descricao = ESPECIAIS[id][2];
		this.imagem = ESPECIAIS[id][3];
	}

  mostrarCompra() {
		if (this.id) {
			this.jogador.el.compra[this.tipo].el.style.display = 'block';
			this.jogador.el.compra[this.tipo].valor.textContent = this.valor;
			this.jogador.el.compra[this.tipo].imagem.src = this.imagem;
		}
		else {
		  this.jogador.el.compra[this.tipo].style.display = 'none';
		}
	}

  mostrarEspecial(local, i) {
    if (this.id) {
      this.jogador.el[local][i][this.tipo].src = this.imagem;
    }
    else {
      this.jogador.el[local][i][this.tipo].style.display = 'none';
    }
  }
}