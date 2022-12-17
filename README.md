## HARCANA: The Card Game

Jogo de cartas com objetivo de colecionar cartas e vencer desafios. Cada missão cumprida habilita um novo desafio e concede moedas que podem ser gasto na loja para comprar pacotes de cartas e jóias para aumentar o número de estrelas das cartas e deixá-las mais fortes.

## Regras

- Cada jogador começa com 4 cartas na mão.
- Todo início de turno o jogador puxa 1 carta de modo a ficar sempre com 4.
- Uma carta é jogada por turno.
- Ao entrar em campo suas habilidades são ativadas.
- Em seguida, é passado automaticamente para a fase e batalha.
- Na fase de batalha todas as cartas do jogador, uma por vez, atacam, caso exista, a carta a frente ou o personagem do adversário no caso campo a frente livre.
- O jogador vence ao zerar a saúde do personagem do adversário.

## Carta

Cartas tem nome, estrelas, tipo, dano, saúde, de 0 a 3 habilidades e 0 ou 1 especial.

![Carta](https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/item/card-exemple-2.png)

## Tipos
Os tipos de carta atualmente no jogo são:
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/type/dragao.png" width="50" height="50"> Dragão: Inclui Wyvern, Amphiptere, Wrym, Lindwrum, Drake entre outros.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/type/golem.png" width="50" height="50"> Golem: Inclui monstros de pedra e similares.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/type/elfo.png" width="50" height="50"> Elfo: Inclui duendes entre outros.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/type/animal.png" width="50" height="50"> Animal: Inclui insetos e não inclui aves.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/type/passaro.png" width="50" height="50"> Pássaro: Inclui todos os animais que tem pena.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/type/dinossauro.png" width="50" height="50"> Dinossauro: Inclui animais pré-históricos.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/type/maquina.png" width="50" height="50"> Máquina: Inclui droids, cyborgs entre outros.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/type/alienigena.png" width="50" height="50"> Alienígena: Inclui animais de outros planetas.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/type/orc.png" width="50" height="50"> Orc: Inclui monstros fora de outras categorias.

## Habilidades

Algumas das habilidades do jogo são:

- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/cura.png" width="50" height="50"> Cura: Ao entrar em campo, cartas aliadas adjacentes recebem um incremento de x em sua saúde.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/golpe.png" width="50" height="50"> Golpe: Ao entrar em campo, decrementa em x a saúde do adversário a frente.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/bencao.png" width="50" height="50"> Bênção: Ao entrar em campo, concede um incremento de x de dano e saúde a uma outra carta aliada aleatoriamente.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/maldicao.png" width="50" height="50"> Maldição: Ao entrar em campo, decrementa em x a saúde e dano a uma carta adversária aleatoriamente.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/explosao.png" width="50" height="50"> Explosão: Ao entrar em campo, decrementa em x a saúde de todas as cartas em campo.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/aleatorio.png" width="50" height="50"> Aleatório: Ao entrar em campo, habilidade é trocada por outra aleatoriamente.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/confusao.png" width="50" height="50"> Confusão: Ao atacar, decrementa em x a saúde de outra carta em campo aleatoriamente.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/escudo.png" width="50" height="50"> Escudo: Habilidades de decremento de saúde reduzem o Escudo no lugar. O Escudo é removido a chegar a zero e reduções seguintes voltam a afetar a saúde.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/contra-ataque.png" width="50" height="50"> Contra-Ataque: Ao ser atacado, decrementa a saúde a carta atacante em x.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/brutalidade.png" width="50" height="50"> Brutalidade: Ao atacar, decrementa a saúde em x das cartas adjacentes a atacada.

## Especiais

Alguns dos especiais do jogo são:

- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/aproximacao.png" width="50" height="50"> Aproximação: Ao entrar em campo, se posiciona entra cartas aliadas.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/distanciamento.png" width="50" height="50"> Distanciamento: Ao entrar em campo, se posiciona a uma casa de distância de cartas aliadas.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/furtividade.png" width="50" height="50"> Furtividade: Ao entrar em campo, se posiciona na casa mais a direita.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/paralisia.png" width="50" height="50"> Paralisia: Ao entrar em campo, paralisa adversário a frente o impedindo de atacar no próximo turno.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/vidente.png" width="50" height="50"> Vidente: Enquanto em campo, jogador consegue vizualizar cartas da mão do adversário.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/sorte.png" width="50" height="50"> Sorte: Enquanto em campo, aliados adjacentes com Confusão afetam apenas adversários.
- <img src="https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/icon/skill/antidoto.png" width="50" height="50"> Antídoto: Torna-se imune a Veneno, Hemorragia e Sanguessuga.

## Telas

- Página Inicial: Primeira página vizualizada ao abrir o jogo.

![Página Inicial](https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/other/screenshot-pagina-inicial.png)

- Tela de Cadastro: Página para criar uma conta.

![Tela de Cadastro](https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/other/screenshot-tela-cadastro.png)

- Tela de Login: Página para entrar no jogo.

![Tela de Login](https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/other/screenshot-tela-login.png)

- Tela de Missões: Jogador pode escolher uma missão habilitada para fazer e ganhar uma quantidade de moedas como recompensa.

![Tela de Missões](https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/other/screenshot-tela-missoes.png)

- Tela de Perfil: É possível alterar a senhar e outras informações pessoais.

![Tela de Perfil](https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/other/screenshot-tela-perfil.png)

- Tela de Loja: Usando moedas, é possível comprar pacotes de cartas, jóias ou uma carta disponível para venda por uma semana.

![Tela de Loja](https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/other/screenshot-tela-loja.png)

- Tela de Inventário: Onde se edita o baralho e também melhora os atributos das cartas com jóias.

![Tela de Inventário](https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/other/screenshot-tela-inventario.png)

- Tela de Jogo: Ao selecionar uma missão o jogador vai direto para Tela de Jogo enfrentar um desafio.

![Tela de Jogo](https://github.com/WadsonPontes/HarcanaPrototype/blob/master/img/other/screenshot-tela-jogo.png)

## Autores

- Wadson Pontes - [@WadsonPontes](https://github.com/WadsonPontes)
- Jason Willyan - [@jasonwillyan](https://github.com/jasonwillyan)
- Rodrigo Saads - [@Rsaads](https://github.com/Rsaads)
- Robert Matheus - [@rbert1n](https://github.com/rbert1n)