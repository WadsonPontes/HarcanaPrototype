class Carta {
	constructor(id, nivel, jogador) {
		this.id = id;
    this.jogador = jogador;
		this.nome_carta = CARTAS[id][1];
		this.descricao = CARTAS[id][2];
		this.imagem = CARTAS[id][3];
		this.tipo = new TipoCarta(CARTAS[id][4]);
		this.nivel = nivel;
		this.dano_base = Math.round(CARTAS[id][5] * (0.9 + nivel / 10));
		this.saude_base = Math.round(CARTAS[id][6] * (0.9 + nivel / 10));
		this.dano = this.dano_base;
		this.saude = this.saude_base;
		this.primaria = new Habilidade(CARTAS[id][7], CARTAS[id][8], nivel);
		this.secundaria = new Habilidade(CARTAS[id][9], CARTAS[id][10], nivel);
		this.terciaria = new Habilidade(CARTAS[id][11], CARTAS[id][12], nivel);
		this.especial = new Especial(CARTAS[id][13]);
	}

  async animPuxar(i) {
    this.mostrarCompra(i);
    await this.moverCompra(i);
    this.esconderCompra();
    await this.voltarCompra(i);
    this.mostrarCarta(i, 'mao');
  }

  async moverCompra(i) {
    let x = parseInt(this.jogador.el.mao[i].style.left);
    let y = 0;

    this.jogador.el.compra.style.transform =`translate(${(420 + 200 * i)}px, ${y}px)`;
    await dormir(1000);
  }

  async voltarCompra(i) {
    this.jogador.el.compra.style.transform ="translate(0, 0)";
    await dormir(500);
  }

  mostrarCarta(local, i) {
    this.jogador.el[local][i].imagem.src = this.imagem;
    this.jogador.el[local][i].nome.textContent = this.nome_carta;
    this.jogador.el[local][i].nivel.textContent = this.nivel;
    this.jogador.el[local][i].tipo.src = this.tipo.imagem;
    this.jogador.el[local][i].dano.textContent = this.dano;
    this.jogador.el[local][i].saude.textContent = this.saude;
    this.jogador.el[local][i].primaria.valor.textContent = this.primaria.valor;
    this.jogador.el[local][i].primaria.icone.src = this.primaria.imagem;
    this.jogador.el[local][i].secundaria.valor.textContent = this.secundaria.valor;
    this.jogador.el[local][i].secundaria.icone.src = this.secundaria.imagem;
    this.jogador.el[local][i].terciaria.valor.textContent = this.terciaria.valor;
    this.jogador.el[local][i].terciaria.icone.src = this.terciaria.imagem;
    this.jogador.el[local][i].especial.src = this.especial.imagem;
    this.jogador.el[local][i].el.style.visibility = 'visible';
    this.jogador.el[local][i].style.transition = 'all 1.0s linear';
	}

	mostrarCompra() {
    this.jogador.el.compra.imagem.src = this.imagem;
    this.jogador.el.compra.nome.textContent = this.nome_carta;
    this.jogador.el.compra.nivel.textContent = this.nivel;
    this.jogador.el.compra.tipo.src = this.tipo.imagem;
    this.jogador.el.compra.dano.textContent = this.dano;
    this.jogador.el.compra.saude.textContent = this.saude;
    this.jogador.el.compra.primaria.valor.textContent = this.primaria.valor;
    this.jogador.el.compra.primaria.icone.src = this.primaria.imagem;
    this.jogador.el.compra.secundaria.valor.textContent = this.secundaria.valor;
    this.jogador.el.compra.secundaria.icone.src = this.secundaria.imagem;
    this.jogador.el.compra.terciaria.valor.textContent = this.terciaria.valor;
    this.jogador.el.compra.terciaria.icone.src = this.terciaria.imagem;
    this.jogador.el.compra.especial.src = this.especial.imagem;
    this.jogador.el.compra.el.style.visibility = 'visible';
    this.jogador.el.compra.style.transition = 'all 1.0s linear';
	}

  esconderCompra() {
    this.jogador.el.compra.el.style.visibility = 'hidden';
    this.jogador.el.compra.style.transition = '';
  }
}