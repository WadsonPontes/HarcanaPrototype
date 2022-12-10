const HABILIDADES = [
	['id', 'nome_habilidade', 'descricao', 'imagem',                         ],
	[ 1,   'Cura',            '',          'img/icon/skill/cura.png'         ],
  [ 2,   'Golpe',           '',          'img/icon/skill/golpe.png'        ],
  [ 3,   'Aleatório',       '',          'img/icon/skill/aleatorio.png'    ],
  [ 4,   'Benção',          '',          'img/icon/skill/bencao.png'       ],
  [ 5,   'Brutalidade',     '',          'img/icon/skill/brutalidade.png'  ],
  [ 6,   'Contra-Ataque',   '',          'img/icon/skill/contra-ataque.png'],
  [ 7,   'Enfraquecer',     '',          'img/icon/skill/enfraquecer.png'  ],
  [ 8,   'Escudo',          '',          'img/icon/skill/escudo.png'       ],
  [ 9,   'Explosão',        '',          'img/icon/skill/explosao.png'     ],
  [ 10,  'Maldição',        '',          'img/icon/skill/maldicao.png'     ],
];

const ESPECIAIS = [
	['id', 'nome_especial', 'descricao', 'imagem',                       ],
	[ 1,   'Furtividade',   '',          'img/icon/skill/furtividade.png'],
  [ 2,   'Sorte',         '',          'img/icon/skill/sorte.png'      ],
  [ 3,   'Paralisia',     '',          'img/icon/skill/paralisia.png'  ],
  [ 4,   'Saquear',       '',          'img/icon/skill/saquear.png'    ],
  [ 5,   'Aproximação',   '',          'img/icon/skill/aproximacao.png'],
];

const TIPOS_DE_CARTAS = [
	['id', 'nome_tipo',  'descricao', 'imagem',                       ],
	[ 1,   'Dragão',     '',          'img/icon/type/dragao.png'      ],
  [ 2,   'Animal',     '',          'img/icon/type/animal.png'      ],
  [ 3,   'Elfo',       '',          'img/icon/type/elfo.png'        ],
  [ 4,   'Dinossauro', '',          'img/icon/type/dinossauro.png'  ],
  [ 5,   'Golem',      '',          'img/icon/type/golem.png'       ],
];

const CARTAS = [
	['id', 'nome_carta',     'descricao', 'imagem',                   'id_tipo', 'dano', 'saude', 'id_primaria', 'valor_primario', 'id_secundaria', 'valor_secundario', 'id_terciaria', 'valor_terciaria', 'id_especial'],
	[ 1,   'White Dragon',   '',          'img/card/1.jpg',            1,         36,     69,      6,             12,               7,               7,                  10,             1,                 3           ],
  [ 2,   'Unicorn Dragon', '',          'img/card/2.jpg',            1,         28,     60,      8,             15,               5,               4,                  0,              0,                 4           ],
  [ 3,   'Giant Piranha',  '',          'img/card/3.jpg',            2,         30,     40,      3,             3,                5,               1,                  9,              1,                 2           ],
  [ 4,   'Big Red Bird',   '',          'img/card/4.jpg',            2,         25,     50,      1,             3,                6,               2,                  7,              1,                 1           ],
  [ 5,   'Polar Beast',    '',          'img/card/5.jpg',            2,         26,     70,      8,             11,               7,               4,                  10,             1,                 2           ],
  [ 6,   'Super Cat',      '',          'img/card/6.jpg',            2,         22,     44,      4,             10,               1,               10,                 0,              0,                 4           ],
  [ 7,   'Ultimate Elf',   '',          'img/card/elfo-6.jpg',       3,         40,     70,      1,             15,               4,               15,                 0,              0,                 3           ],
  [ 8,   'Senior Elf',     '',          'img/card/elfo-2.jpg',       3,         32,     64,      1,             5,                4,               5,                  7,              2,                 5           ],
  [ 9,   'Elf Princess',   '',          'img/card/elfo-1.jpg',       3,         35,     68,      3,             10,               4,               10,                 1,              10,                3           ],
  [ 10,  'Red Dinosaurn',  '',          'img/card/dinossauro-6.jpg', 4,         39,     69,      5,             10,               0,               0,                  0,              0,                 0           ],
  [ 11,  'Electric Golem', '',          'img/card/18.jpg',           5,         38,     67,      8,             7,                6,               7,                  9,              7,                 3           ],
  [ 12,  'Lava Golem',     '',          'img/card/13.jpg',           5,         23,     61,      10,            6,                2,               5,                  8,              5,                 5           ],
  [ 13,  'Unicorn Dragon', '',          'img/card/1.jpg',            1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 14,  'Unicorn Dragon', '',          'img/card/1.jpg',            1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 15,  'Unicorn Dragon', '',          'img/card/1.jpg',            1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 16,  'Unicorn Dragon', '',          'img/card/1.jpg',            1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 17,  'Unicorn Dragon', '',          'img/card/1.jpg',            1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 18,  'Unicorn Dragon', '',          'img/card/1.jpg',            1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 19,  'Unicorn Dragon', '',          'img/card/1.jpg',            1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 20,  'Unicorn Dragon', '',          'img/card/1.jpg',            1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 21,  'Unicorn Dragon', '',          'img/card/1.jpg',            1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 22,  'Unicorn Dragon', '',          'img/card/1.jpg',            1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 23,  'Unicorn Dragon', '',          'img/card/1.jpg',            1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 24,  'Unicorn Dragon', '',          'img/card/1.jpg',            1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 25,  'Unicorn Dragon', '',          'img/card/1.jpg',            1,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
  [ 26,  'Unicorn Dragon', '',          'img/card/1.jpg',            2,         16,     25,      1,             5,                0,               0,                  0,              0,                 0           ],
];

const PERSONAGENS = [
	['id', 'nome_personagem',    'descricao', 'imagem',         'classe',    'saude'],
  [ 1,   'Garffon Delpho',     '',          'img/char/1.png', 'apprentice', 90    ],
	[ 2,   'Brif Wolfsteam',     '',          'img/char/4.png', 'barbarian',  99    ],
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
    [ 10,   1     ],
    [ 8,    1     ],
    [ 9,    1     ],
    [ 7,    1     ],
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