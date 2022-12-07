class Partida {
	constructor(id_jogador1, id_jogador2) {
    this.estado = 'iniciando';
    this.jogadores = [null];
    this.jogador1 = new Jogador(id_jogador1, 1, this, null);
    this.jogador2 = new Jogador(id_jogador2, 2, this, this.jogador1);
    this.jogador1.oponente = this.jogador2;
    this.noataque = this.jogador2;
    this.nadefesa = this.jogador1;
    this.humano = null;
    this.turno = 1;
    this.tempo = 99;
    this.som = true;
    this.tela_cheia = false;
    this.el = {};
    this.getEl();
    this.iniciar();
	}

  iniciar() {
    if (this.jogador1.tipo == 'humano')
      this.humano = this.jogador1;
    else
      this.humano = this.jogador2;
    
    this.jogadores.push(this.jogador1);
    this.jogadores.push(this.jogador2);
    this.jogador1.personagem.monstrar();
    this.jogador2.personagem.monstrar();
    this.noataque.jogar();
  }

  // REFERENCIA: https://codepen.io/bramus/pen/eBZgPB
  movendoMouse() {
    let main = {
      x: this.el.main.offsetLeft,
      y: this.el.main.offsetTop,
      largura: this.el.main.offsetWidth,
      altura: this.el.main.offsetHeight
    };
    let mao = {
      x: this.jogador.el.mao[0].offsetLeft,
      y: this.jogador.el.mao[0].offsetTop
    };
    let carta = {
      largura: this.jogador.el.compra.offsetWidth,
      altura: this.jogador.el.compra.offsetHeight
    };
    let x = event.clientX - main.x - mao.x - (carta.largura/2);
    let y = event.clientY - main.y - mao.y - (carta.altura/2);
    
    this.el.root.style.setProperty('--mouse-x', `${x}px`);
    this.el.root.style.setProperty('--mouse-y', `${y}px`);

    if (this.estado == 'segurando-carta') {
      if (event.clientX < (main.x + main.largura * 0.17)) // Esquerda
        this.soltar(true);
      else if (event.clientY < (main.y + main.altura * 0.1)) // Cima
        this.soltar(true);
      else if (event.clientX > (main.x + main.largura - main.largura * 0.05)) // Direita
        this.soltar(true);
      else if (event.clientY > (main.y + main.altura)) // Baixo
        this.soltar(true);
    }
  }

  async mostrarMao() {
    if (this.estado != 'jogando' && this.estado != 'abaixando-mao')
      return;

    this.estado = 'mostrando-mao';
    this.humano.el.mao[0].style.transition = 'all 0.2s linear';
    this.humano.el.mao[0].classList.remove(`hand-down-${this.humano.posicao}`);
    await this.dormir(200);
    this.estado = 'jogando';
  }

  async esconderMao() {
    if (this.estado != 'jogando') return;

    this.estado = 'abaixando-mao';
    this.humano.el.mao[0].style.transition = 'all 0.2s linear';
    this.humano.el.mao[0].classList.add(`hand-down-${this.humano.posicao}`);
    await this.dormir(200);
    this.estado = 'jogando';
  }

  getEl() {
    this.el.root = document.documentElement;
    this.el.main = document.querySelector('main');
    this.el.tempo = document.querySelector('#game-time');
    this.el.tela_cheia = document.querySelector('#fullscreen-icon');
    this.el.desistir = document.querySelector('#surrender-icon');
    this.el.som = document.querySelector('#sound-icon');
  }

  alternarSom() {
    if (this.som) {
      this.som = false;
      this.el.som.src = 'img/icon/gui/sound-off.png';
    }
    else {
      this.som = true;
      this.el.som.src = 'img/icon/gui/sound.png';
    }
  }
  
  alternarFullscreen() {
    if (this.tela_cheia) {
      this.tela_cheia = false;
      this.el.tela_cheia.src = 'img/icon/gui/fullscreen.png';
      this.fecharFullscreen();
    }
    else {
      this.tela_cheia = true;
      this.el.tela_cheia.src = 'img/icon/gui/fullscreen-off.png';
      this.abrirFullscreen();
    }
  }
  
  abrirFullscreen() {
    if (document.body.requestFullscreen) {
      document.body.requestFullscreen();
    }
    else if (document.body.webkitRequestFullscreen) { /* Safari */
      document.body.webkitRequestFullscreen();
    }
    else if (document.body.msRequestFullscreen) { /* IE11 */
      document.body.msRequestFullscreen();
    }
  }
  
  fecharFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    }
    else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }

  desistir() {
    window.location.href = "missions.html";
  }

  dormir(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

let partida = new Partida(2, 1);