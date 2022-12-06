class Carta {
	constructor(id, nivel, jogador) {
		this.id = id;
    this.jogador = jogador;
		this.nome_carta = CARTAS[id][1];
		this.descricao = CARTAS[id][2];
		this.imagem = CARTAS[id][3];
		this.tipo = new TipoCarta(CARTAS[id][4]);
		this.nivel = nivel;
		this.dano_base = Math.floor(CARTAS[id][5] * (0.9 + nivel / 10));
		this.saude_base = Math.floor(CARTAS[id][6] * (0.9 + nivel / 10));
		this.dano = this.dano_base;
		this.saude = this.saude_base;
		this.primaria = new Habilidade(CARTAS[id][7], 'primaria', CARTAS[id][8], nivel, jogador);
		this.secundaria = new Habilidade(CARTAS[id][9], 'secundaria', CARTAS[id][10], nivel, jogador);
		this.terciaria = new Habilidade(CARTAS[id][11], 'terciaria', CARTAS[id][12], nivel, jogador);
		this.especial = new Especial(CARTAS[id][13], 'especial', jogador);
	}

  async animPuxar(i) {
    await this.dormir(100);
    this.mostrarCompra(i);
    await this.moverCompra(i);
    await this.dormir(500);
    this.esconderCompra();
    await this.voltarCompra(i);
    this.mostrarCarta('mao', i);
  }

  async moverCompra(i) {
    this.jogador.el.compra.el.classList.add(`hand-${this.jogador.posicao}-card-${i}`);
  }

  async voltarCompra(i) {
    this.jogador.el.compra.el.classList.remove(`hand-${this.jogador.posicao}-card-${i}`);
  }

  mostrarCarta(local, i) {
    this.jogador.el[local][i].imagem.src = this.imagem;
    this.jogador.el[local][i].nome.textContent = this.nome_carta;
    this.jogador.el[local][i].nivel.textContent = this.getEstrelas();
    this.jogador.el[local][i].tipo.src = this.tipo.imagem;
    this.jogador.el[local][i].dano.textContent = this.dano;
    this.jogador.el[local][i].saude.textContent = this.saude;
    this.primaria.mostrarHabilidade(local, i);
    this.secundaria.mostrarHabilidade(local, i);
    this.terciaria.mostrarHabilidade(local, i);
    this.especial.mostrarEspecial(local, i);
    this.jogador.el[local][i].el.style.visibility = 'visible';
    this.jogador.el[local][i].el.style.transition = 'all 0.5s linear';
	}

	mostrarCompra() {
    this.jogador.el.compra.imagem.src = this.imagem;
    this.jogador.el.compra.nome.textContent = this.nome_carta;
    this.jogador.el.compra.nivel.textContent = this.getEstrelas();
    this.jogador.el.compra.tipo.src = this.tipo.imagem;
    this.jogador.el.compra.dano.textContent = this.dano;
    this.jogador.el.compra.saude.textContent = this.saude;
    this.primaria.mostrarCompra();
    this.secundaria.mostrarCompra();
    this.terciaria.mostrarCompra();
    this.especial.mostrarCompra();
    this.jogador.el.compra.el.style.visibility = 'visible';
    this.jogador.el.compra.el.style.transition = 'all 0.5s linear';
	}

  esconderCompra() {
    this.jogador.el.compra.el.style.visibility = 'hidden';
    this.jogador.el.compra.el.style.transition = '';
  }

  getEstrelas() {
    let estrelas = '';

    for (let i = 0; i < this.nivel; ++i) {
      estrelas += '⭐';
    }

    return estrelas;
  }

  dormir(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}