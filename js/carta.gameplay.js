class Carta {
	constructor(id, posicao, local, nivel, jogador, partida) {
		this.id = id;
    this.posicao = posicao;
    this.local = local;
    this.jogador = jogador;
    this.partida = partida;
		this.nome_carta = CARTAS[id][1];
		this.descricao = CARTAS[id][2];
		this.imagem = CARTAS[id][3];
		this.tipo = new TipoCarta(CARTAS[id][4]);
		this.nivel = nivel;
		this.dano_base = Math.floor(CARTAS[id][5] * (0.9 + nivel / 10));
		this.saude_base = Math.floor(CARTAS[id][6] * (0.9 + nivel / 10));
		this.dano = this.dano_base;
		this.saude = this.saude_base;
		this.primaria = new Habilidade(CARTAS[id][7], 'primaria', CARTAS[id][8], nivel, jogador, partida);
		this.secundaria = new Habilidade(CARTAS[id][9], 'secundaria', CARTAS[id][10], nivel, jogador, partida);
		this.terciaria = new Habilidade(CARTAS[id][11], 'terciaria', CARTAS[id][12], nivel, jogador, partida);
		this.especial = new Especial(CARTAS[id][13], 'especial', jogador, partida);
    this.el = null;
	}

  atualizarSegurando(x, y, main) {
    if (x < (main.x + main.largura * 0.17)) // Esquerda
      this.soltar(true);
    else if (y < (main.y + main.altura * 0.1)) // Cima
      this.soltar(true);
    else if (x > (main.x + main.largura - main.largura * 0.05)) // Direita
      this.soltar(true);
    else if (y > (main.y + main.altura)) // Baixo
      this.soltar(true);
  }

  // REFERNCIA: https://codepen.io/tjramage/details/yOEbyw
  segurar() {
    if (this.partida.estado == 'jogando' && this.partida.humano.id == this.jogador.id) {
      this.partida.estado = 'segurando-carta';
      this.jogador.segurando = this;
      this.partida.movendoMouse();
      this.el.pai.classList.add('segurando');
    }
  }

  irParaCampo() {
    console.log('vai para campo!');
  }

  soltar(forcado) {
    let main = {
      x: this.partida.el.main.offsetLeft,
      y: this.partida.el.main.offsetTop,
      largura: this.partida.el.main.offsetWidth,
      altura: this.partida.el.main.offsetHeight,
    };
    let mao = {
      x: this.jogador.el.mao[0].offsetLeft,
      y: this.jogador.el.mao[0].offsetTop,
    };
    let carta = {
      largura: this.jogador.el.compra.pai.offsetWidth,
      altura: this.jogador.el.compra.pai.offsetHeight
    };
    let y = event.clientY - main.y - mao.y - (carta.altura/2);

    if (this.partida.estado == 'segurando-carta') {
      this.partida.estado = 'jogando';
      this.el.pai.classList.remove('segurando');

      if (this.partida.noataque.id == this.jogador.id && !forcado && y < main.y + main.altura * 0.62)
        this.irParaCampo();
    }
  }

  puxar(i) {
    this.posicao = i;
    this.local = 'mao';
    this.jogador.mao[i] = this;
    this.el = this.jogador.el.mao[i];
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
    this.jogador.el.compra.pai.classList.add(`hand-${this.jogador.posicao}-card-${i}`);
  }

  async voltarCompra(i) {
    this.jogador.el.compra.pai.classList.remove(`hand-${this.jogador.posicao}-card-${i}`);
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
    this.jogador.el[local][i].pai.style.visibility = 'visible';
    this.jogador.el[local][i].pai.style.transition = '';
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
    this.jogador.el.compra.pai.style.visibility = 'visible';
    this.jogador.el.compra.pai.style.transition = 'all 0.5s linear';
	}

  esconderCompra() {
    this.jogador.el.compra.pai.style.visibility = 'hidden';
    this.jogador.el.compra.pai.style.transition = '';
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