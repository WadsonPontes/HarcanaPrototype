class Carta {
	constructor(id, posicao, local, nivel, jogador, baralho, partida) {
		this.id = id;
    this.posicao = posicao;
    this.local = local;
    this.jogador = jogador;
    this.baralho = baralho;
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
		this.primaria = new Habilidade(CARTAS[id][7], 'primaria', CARTAS[id][8], nivel, jogador, baralho, partida);
		this.secundaria = new Habilidade(CARTAS[id][9], 'secundaria', CARTAS[id][10], nivel, jogador, baralho, partida);
		this.terciaria = new Habilidade(CARTAS[id][11], 'terciaria', CARTAS[id][12], nivel, jogador, baralho, partida);
		this.especial = new Especial(CARTAS[id][13], 'especial', jogador, baralho, partida);
    this.el = null;
	}

  atualizarSegurando(x, y) {
    let main = {
      x: this.partida.el.main.offsetLeft,
      y: this.partida.el.main.offsetTop,
      largura: this.partida.el.main.offsetWidth,
      altura: this.partida.el.main.offsetHeight,
    };
    let mao = {
      x: this.jogador.el.mao[0].offsetLeft,
      y: this.jogador.el.mao[0].offsetTop,
      largura: this.jogador.el.mao[0].offsetWidth,
      altura: this.jogador.el.mao[0].offsetHeight
    };
    let yfinal = y - main.y;

    if (x < (main.x + main.largura * 0.17)) // Esquerda
      this.soltar(true);
    else if (y < (main.y + main.altura * 0.1)) // Cima
      this.soltar(true);
    else if (x > (main.x + 0.95 * main.largura)) // Direita
      this.soltar(true);
    else if (y > (main.y + main.altura)) // Baixo
      this.soltar(true);
    else if (yfinal < main.altura - mao.altura)
      this.partida.esconderMaoSegurandoCarta();
    else
      this.partida.mostrarMaoSegurandoCarta();
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

  async irParaCampo() {
    let i = 1;
    this.partida.estado = 'entrando-em-campo';

    while (this.jogador.campo[i] != null);

    await this.animIrParaCampo(i);
    // this.entrarEmCampo();

    this.partida.estado = 'fase-de-batalha';
    // this.jogador.batalhar();
    // this.partida.mostrarMaoSegurandoCarta();
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
      largura: this.jogador.el.mao[0].offsetWidth,
      altura: this.jogador.el.mao[0].offsetHeight
    };
    let carta = {
      largura: this.baralho.el.compra.pai.offsetWidth,
      altura: this.baralho.el.compra.pai.offsetHeight
    };
    let y = event.clientY - main.y;

    if (this.partida.estado == 'segurando-carta') {
      this.el.pai.classList.remove('segurando');

      if (this.partida.noataque.id == this.jogador.id && !forcado && y < main.altura - mao.altura) {
        this.irParaCampo();
      }
      else {
        this.partida.mostrarMaoSegurandoCarta();
        this.partida.estado = 'jogando';
      }
    }
  }

  puxar(i) {
    this.posicao = i;
    this.local = 'mao';
    this.jogador.mao[i] = this;
    this.el = this.jogador.el.mao[i];
  }

  async animIrParaCampo(i) {
    await this.prepararEntradaEmCampo();
    await this.dormir(500);
    await this.entrarEmCampo(i);
    await this.dormir(200);
    await this.voltarMao(i);
    this.mostrarCarta('campo', i);
  }

  async prepararEntradaEmCampo() {
    this.el.pai.classList.add('preparar-entrada');
  }

  async entrarEmCampo(i) {
    this.el.pai.style.transition = 'all 0.2s linear';
    this.el.pai.classList.add(`field-${this.jogador.posicao}-card-${i}`);
  }

  async voltarMao(i) {
    this.el.pai.style.transition = '';
    this.el.pai.style.visibility = 'hidden';
    this.el.pai.classList.remove(`field-${this.jogador.posicao}-card-${i}`);
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
    this.baralho.el.compra.pai.classList.add(`hand-${this.jogador.posicao}-card-${i}`);
  }

  async voltarCompra(i) {
    this.baralho.el.compra.pai.classList.remove(`hand-${this.jogador.posicao}-card-${i}`);
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
    this.jogador.el[local][i].pai.style.transition = '';
    this.jogador.el[local][i].pai.style.visibility = 'visible';
	}

	mostrarCompra() {
    this.baralho.el.compra.imagem.src = this.imagem;
    this.baralho.el.compra.nome.textContent = this.nome_carta;
    this.baralho.el.compra.nivel.textContent = this.getEstrelas();
    this.baralho.el.compra.tipo.src = this.tipo.imagem;
    this.baralho.el.compra.dano.textContent = this.dano;
    this.baralho.el.compra.saude.textContent = this.saude;
    this.primaria.mostrarCompra();
    this.secundaria.mostrarCompra();
    this.terciaria.mostrarCompra();
    this.especial.mostrarCompra();
    this.baralho.el.compra.pai.style.visibility = 'visible';
    this.baralho.el.compra.pai.style.transition = 'all 0.5s linear';
	}

  esconderCompra() {
    this.baralho.el.compra.pai.style.transition = '';
    this.baralho.el.compra.pai.style.visibility = 'hidden';
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