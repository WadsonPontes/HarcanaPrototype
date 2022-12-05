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

  async animPuxar(carta, i) {
    this.setarCartaCompra();

    await dormir(1000);

    jogador.el_deck.style.transition = '';
    jogador.at_deck.textContent = '';
    jogador.vi_deck.textContent = '';
    jogador.at_deck.style.display = 'none';
    jogador.vi_deck.style.display = 'none';
    jogador.el_deck.style.backgroundImage = '';
    jogador.el_deck.style.zIndex = '-1';

    jogador.el_deck.style.transform ="translate(0, 0)";

    await dormir(500);

    t['mao' + jogador.id][i].card = carta;
    t['mao' + jogador.id][i].at.textContent = carta.ataque;
    t['mao' + jogador.id][i].vi.textContent = carta.vida;
    t['mao' + jogador.id][i].at.style.display = 'block';
    t['mao' + jogador.id][i].vi.style.display = 'block';
    t['mao' + jogador.id][i].el.style.backgroundImage = 'url("'+ carta.img +'")';
  }

	setarCartaCompra() {
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

		this.jogador.el.compra.style.transition = 'all 1.0s linear';
		
		jogador.at_deck.textContent = carta.ataque;
		jogador.vi_deck.textContent = carta.vida;
		jogador.at_deck.style.display = 'block';
		jogador.vi_deck.style.display = 'block';
		jogador.el_deck.style.backgroundImage = 'url("'+ carta.img +'")';
		jogador.el_deck.style.zIndex = '5';
	
		if (jogador.id == 1) {
		  jogador.el_deck.style.transform ="translate(" + (420 + 200 * i) + "px, -20px)";
		}
		else {
		  jogador.el_deck.style.transform = "translate(" + (420 + 200 * i) + "px, 20px)";
		}
	}
}