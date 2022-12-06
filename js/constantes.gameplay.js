const HABILIDADES = [
	['id', 'nome_habilidade', 'descricao', 'imagem',                ],
	[ 1,   'Cura',            '',          'img/icon/skill/cura.png'],
];

const ESPECIAIS = [
	['id', 'nome_especial', 'descricao', 'imagem',                       ],
	[ 1,   'Furtividade',   '',          'img/icon/skill/furtividade.png'],
];

const TIPOS_DE_CARTAS = [
	['id', 'nome_tipo', 'descricao', 'imagem',                 ],
	[ 1,   'Dragão',    '',          'img/icon/type/dragao.png'],
];

const CARTAS = [
	['id', 'nome_carta',     'descricao', 'imagem',         'id_tipo', 'dano', 'saude', 'id_primaria', 'valor_primario', 'id_secundaria', 'valor_secundario', 'id_terciaria', 'valor_terciaria', 'id_especial'],
	[ 1,   'White Dragon',   '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 2,   'Unicorn Dragon', '',          'img/card/2.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 3,   'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 4,   'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 5,   'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 6,   'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 7,   'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 8,   'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 9,   'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 10,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 11,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 12,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 13,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 14,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 15,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 16,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 17,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 18,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 19,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 20,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 21,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 22,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 23,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 24,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 25,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 26,  'Unicorn Dragon', '',          'img/card/1.jpg',  1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
];

const PERSONAGENS = [
	['id', 'nome_personagem',    'descricao', 'imagem',         'classe',    'saude'],
  [ 1,   'Garffon Delpho',     '',          'img/char/1.png', 'apprentice', 50    ],
	[ 2,   'Brif Wolfsteam',     '',          'img/char/4.png', 'barbarian',  50    ],
];

const BARALHOS = [
  [
    ['id', 'nivel'],
  ],
  
  [ // BARALHO 1
    ['id', 'nivel'],
    [ 1,    1     ],
    [ 2,    1     ],
    [ 3,    1     ],
    [ 4,    1     ],
    [ 5,    1     ],
    [ 6,    1     ],
    [ 7,    1     ],
    [ 8,    1     ],
    [ 9,    1     ],
    [ 10,   1     ],
    [ 11,   1     ],
    [ 12,   1     ],
  ],

  [ // BARALHO 2
    ['id', 'nivel'],
    [ 13,   1     ],
    [ 14,   1     ],
    [ 15,   1     ],
    [ 16,   1     ],
    [ 17,   1     ],
    [ 18,   1     ],
    [ 19,   1     ],
    [ 20,   1     ],
    [ 21,   1     ],
    [ 22,   1     ],
    [ 23,   1     ],
    [ 24,   1     ],
  ],
];

const JOGADORES = [
  ['id', 'nome_jogador',   'tipo',       'id_personagem', 'nivel_personagem', 'id_baralho'],
  [ 1,   'Wadson Pontes',  'humano',      1,               1,                  1          ],
  [ 2,   'Brif Wolfsteam', 'computador',  2,               1,                  2          ],
];