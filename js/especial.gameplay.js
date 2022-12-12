class Especial {
	constructor(id, tipo, jogador, baralho, partida) {
		this.id = id;
    this.tipo = tipo;
    this.jogador = jogador;
    this.baralho = baralho;
    this.partida = partida;
		this.nome_especial = ESPECIAIS[id][1];
		this.descricao = ESPECIAIS[id][2];
		this.imagem = ESPECIAIS[id][3];
	}

  mostrarCompra() {
		if (this.id) {
			this.baralho.el.compra[this.tipo].style.display = 'block';
			this.baralho.el.compra[this.tipo].src = this.imagem;
		}
		else {
		  this.baralho.el.compra[this.tipo].style.display = 'none';
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