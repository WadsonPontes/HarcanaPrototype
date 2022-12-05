class Partida {
	constructor(id_jogador1, id_jogador2) {
    this.estado = 'iniciando';
    this.jogador1 = new Jogador(id_jogador1, 1, this, null);
    this.jogador2 = new Jogador(id_jogador2, 2, this, this.jogador1);
    this.jogador1.oponente = this.jogador2;
    this.noataque = this.jogador1;
    this.nadefesa = this.jogador2;
    this.turno = 1;
    this.tempo = 99;
    this.som = true;
    this.tela_cheia = false;
    this.el = {};
    this.getEl();
    this.noataque.jogar();
	}

  getEl() {
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
}

let partida = new Partida(2, 1);