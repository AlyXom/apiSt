require('dotenv').config()

const apiLink = process.env.APILINK

const personagens = [
    {
        nome: "Ajudante",
        tipo: "Desconhecido",
        moraEm: "Cabana da Bruxa",
        casamento: "Nao",
        melhoresPresentes: [
            "Maionese nula"
        ]
    },
    {
        nome: "Avo",
        tipo: "Homem",
        endereco: "A vida apos a morte",
        melhoresPresentes: [
            "N/A"
        ]
    },
    {
        nome: "Anao",
        tipo: "Desconhecido",
        aniversario: "Verao 22",
        moraEm: "As Minas",
        endereco: "Caverna oriental",
        casamento: "Nao",
        melhoresPresentes: [
            "Agua-marinha",
            "Ametista",
            "Esmeralda",
            "Jade",
            "Omnigeodo",
            "Pedra de limao",
            "Rubi",
            "Topazio"
        ]
    },
    {
        nome: "Alex",
        tipo: "Homem",
        aniversario: "Verao 13",
        moraEm: "Vila Pelicanos",
        endereco: "Estrada do Rio, n*1",
        familia: [
            {
                tipo: "Avo",
                nome: "George",
                url: `${apiLink}/personagens/george`,
            },
            {
                tipo: "Avo",
                nome: "Evelyn",
                url: `${apiLink}/personagens/evelyn`
            }
        ],
        casamento: "Sim",
        visitaAclinica: "Verao 16",
        melhoresPresentes: [
            "Cafe da manha completo",
            "Jantar de salmao"
        ]
    },
    {
        nome: "Abigail",
        tipo: "Mulher",
        aniversario: "Outono 13",
        moraEm: "Vila dos Pelicanos",
        endereco: "Armazem do Pierre",
        familia: [
            {
                tipo: "Pai",
                nome: "Pierre",
                url: `${apiLink}/personagens/pierre`
            },
            {
                tipo: "Mae",
                nome: "Caroline",
                url: `${apiLink}/personagens/caroline`
            }
        ],
        casamento: "Sim",
        visitaAclinica: "Primavera 4",
        melhoresPresentes: [
            "Abobora",
            "Ametista",
            "Baiacu",
            "Bolo de chocolate",
            "Enguia picante",
            "Mexido de aromas",
            "Pudim de Banana"
        ]
    },
    {
        nome: "Caroline",
        tipo: "Mulher",
        aniversario: "Inverno 7",
        moraEm: "Vila Pelicanos",
        endereco: "Armazem do Pierre",
        familia: [
            {
                tipo: "Marido",
                nome: "Pierre",
                url: `${apiLink}/personagens/pierre`,
            },
            {
                tipo: "Filha",
                nome: "Abigail",
                url: `${apiLink}/personagens/abigail`
            }
        ],
        casamento: "Nao",
        visitaAclinica: "Outono 25",
        melhoresPresentes: [
            "Cha verde",
            "Flor-Micanga",
            "Taco de peixe"
        ]
    },
    {
        nome: "Clint",
        tipo: "Homem",
        aniversario: "Inverno 26",
        moraEm: "Vila Pelicanos",
        endereco: "Ferreiro",
        casamento: "Nao",
        visitaAclinica: "Inverno 16",
        melhoresPresentes: [
            "Agua-Marinha",
            "Ametista",
            "Barra de iridio",
            "Barra de ouro",
            "Esmeralda",
            "Jade",
            "Molho de alcachofra",
            "Omnigeodo",
            "Risoto de samambaia",
            "Rubi",
            "Topazio"
        ]
    },
    {
        nome: "Demetrius",
        tipo: "Homem",
        aniversario: "Verao 19",
        moraEm: "A Montanha",
        endereco: "Rua da Montanha, n*24",
        familia: [
            {
                tipo: "Esposa",
                nome: "Robin",
                url: `${apiLink}/personagens/robin`,
            },
            {
                tipo: "Filha",
                nome: "Maru",
                url: `${apiLink}/personagens/maru`
            },
            {
                tipo: "Enteado",
                nome: "Sebastian",
                url: `${apiLink}/personagens/sebastian`
            }
        ],
        casamento: "Nao",
        visitaAclinica: "Verao 25",
        melhoresPresentes: [
            "Morando",
            "Pote de feijao",
            "Pudim de Arroz",
            "Sorvete"
        ]
    },
    {
        nome: "Evelyn",
        tipo: "Mulher",
        aniversario: "Inverno 20",
        moraEm: "Vila Pelicanos",
        endereco: "Estrada do Rio, n* 1",
        familia: [
            {
                tipo: "Marido",
                nome: "George",
                url: `${apiLink}/personagens/george`
            },
            {
                tipo: "Neto",
                nome: "Alex",
                url: `${apiLink}/personagens/alex`
            }
        ],
        casamento: "Nao",
        visitaAclinica: [
            "O 2* de cada estacao",
            "O 23* de cada estacao(com George)"
        ],
        melhoresPresentes: [
            "Beterraba",
            "Bolo de chocolate",
            "Diamante",
            "Recheio",
            "Rosa-de-fada",
            "Tulipa"
        ]
    },
    {
        nome: "Elliot",
        tipo: "Homem",
        aniversario: "Outono 5",
        moraEm: "A Praia",
        endereco: "Cabana do Elliot",
        casamento: "Sim",
        visitaAclinica: "Verao 9",
        melhoresPresentes: [
            "Bolinhos de caranguejo",
            "Lagosta",
            "Pena de pato",
            "Roma",
            "Sopa Tom Kha",
            "Tinta de Lula"
        ]
    },
    {
        nome: "Emily",
        tipo: "Mulher",
        aniversario: "Primavera 27",
        moraEm: "Vila Pelicanos",
        endereco: "Rua do Salgueiro, n*2",
        familia: [
            {
                tipo: "Irma",
                nome: "Harley",
                url: `${apiLink}/personagens/harley`
            }
        ],
        casamento: "Sim",
        visitaAclinica: "Inverno 11",
        melhoresPresentes: [
            "Agua marinha",
            "Ametista",
            "Esmeralda",
            "Hamburguer de sobrevivencia",
            "Jade",
            "La",
            "Rubi",
            "Tecido",
            "Topazio"
        ]
    },
    {
        nome: "Feiticeiro",
        tipo: "Homem",
        aniversario: "Floresta Cinzaseiva",
        moraEm: "Torre do Mago",
        casamento: "Nao",
        melhoresPresentes: [
            "Cogumelo Roxo",
            "Essencia nula",
            "Essencia solar",
            "Superpepino"
        ]
    },
    {
        nome: "George",
        tipo: "Homem",
        aniversario: "Outono 24",
        moraEm: "Vila Pelicanos",
        endereco: "Estrada do Rio, n*1",
        familia: [
            {
                tipo: "Esposa",
                nome: "Evelyn",
                url: `${apiLink}/personagens/evelyn`
            },
            {
                tipo: "Neto",
                nome: "Alex",
                url: `${apiLink}/personagens/alex`
            }
        ],
        casamento: "Nao",
        visitaAclinica: "O 23* de cada estacao",
        melhoresPresentes: [
            "Alho-poro",
            "Cogumelo Frito"
        ]
    },
    {
        nome: "Gus",
        tipo: "Homem",
        aniversario: "Verao 8",
        moraEm: "Vila Pelicanos",
        endereco: "Saloon Fruta Estrelar",
        casamento: "Nao",
        visitaAclinica: "Outono 4",
        melhoresPresentes: [
            "Diamante",
            "Escargo",
            "Laranja",
            "Taco de peixe"
        ]
    },
    {
        nome: "Gil",
        tipo: "Homem",
        moraEm: "Vila Pelicanos",
        endereco: "Guilda dos Aventureiros",
        casamento: "Nao",
        melhoresPresentes: [
            "N/A"
        ]
    },
    {
        nome: "Governador",
        tipo: "Homem",
        aniversario: "Desconhecido",
        endereco: "Desconhecido",
        casamento: "Nao",
        melhoresPresentes: [
            "N/A"
        ]
    },
    {
        nome: "Gunther",
        tipo: "Homem",
        aniversario: "Desconhecido",
        moraEm: "Vila Pelicanos",
        endereco: "Museu",
        casamento: "Nao",
        melhoresPresentes: [
            "Nao recebe presentes"
        ]
    },
    {
        nome: "Jas",
        tipo: "menina",
        aniversario: "Verao 4",
        moraEm: "Floresta Cinzaseiva",
        endereco: "Rancho da Marnie",
        familia: [
            {
                tipo: "Tia",
                nome: "Marnie",
                url: `${apiLink}/personagens/marnie`
            },
            {
                tipo: "Padrinho",
                nome: "Shane",
                url: `${apiLink}/personagens/shane`
            }
        ],
        casamento: "Nao",
        visitaAclinica: "Inverno 18",
        melhoresPresentes: [
            "Bolo rosa",
            "Pudim de ameixa",
            "Rosa-de-fada"
        ]
    },
    {
        nome: "Jodi",
        tipo: "Mulher",
        aniversario: "Outono 11",
        moraEm: "Vila Pelicanos",
        endereco: "Rua do Salgueiro, n* 1",
        familia: [
            {
                tipo: "Marido",
                nome: "Kent",
                url: `${apiLink}/personagens/kent`
            },
            {
                tipo: "Filho",
                nome: "Sam",
                url:`${apiLink}/personagens/sam`
            },
            {
                tipo: "Filho",
                nome: "Vincent",
                url: `${apiLink}/personagens/vincent`

            }
        ],
        casamento: "Nao",
        visitaAclinica: [
            "Primavera 11 (com Vincent)",
            "Primavera 18"
        ],
        melhoresPresentes: [
            "Achiga Crocante",
            "Bolo de chocolate",
            "Diamante",
            "Enguia frita",
            "Mexido de legumes",
            "Panquecas",
            "Parmesao com berinjela",
            "Torta de ruibarbo"
        ]
    },
    {
        nome: "Kent",
        tipo: "Homem",
        aniversario: "Primavera 4",
        moraEm: "Vila Pelicanos",
        endereco: "Rua do Salgueiro, n*1",
        familia: [
            {
                tipo: "Esposa",
                nome: "Jodi",
                url: `${apiLink}/personagens/Jodi`
            },
            {
                tipo: "Filho",
                nome: "Vincent",
                url: `${apiLink}/personagens/vincent`
            },
            {
                tipo: "Filho",
                nome: "Sam",
                url: `${apiLink}/personagens/sam`
            }
        ],
        casamento: "Nao",
        melhoresPresentes: [
            "Avelas torradas",
            "Risoto de samambaia"
        ]

    },
    {
        nome: "Krobus",
        tipo: "Desconhecido",
        aniversario: "Inverno 1",
        moraEm: "Os Esgotos",
        endereco: "Loja do Krobus",
        casamento: "Nao(mas pode se tornar um colega de quarto)",
        melhoresPresentes: [
            "Abobora",
            "Barra de iridio",
            "Diamante",
            "Maionese nula",
            "Ovo nulo",
            "Raiz-forte"
        ]
    },
    {
        nome: "Leo",
        tipo: "Menino",
        aniversario: "Verao 26",
        moraEm: "Ilha gengibre",
        endereco: [
            "Cabana (<6 coracao)",
            "Casa na arvore (>6 coracao)"
        ],
        casamento: "Nao",
        melhoresPresentes: [
            "Manga",
            "Ovo de Avestruz",
            "Pena de pato",
            "Poi"
        ]
    },
    {
        nome: "Lewis",
        tipo: "Homem",
        aniversario: "Primavera 7",
        moraEm: "Vila Pelicanos",
        endereco: "Mansao do Prefeito",
        casamento: "Nao",
        visitaAclinica: "Outono 9",
        melhoresPresentes: [
            "Cha verde",
            "Inhames com cobertura",
            "Mexido de legumes",
            "Pimenta quente",
            "Prato de outono"
        ]
    },
    {
        nome: "Linus",
        tipo: "Homem",
        aniversario: "Inverno 3",
        moraEm: "A Montanha",
        endereco: "Tenda",
        casamento: "Nao",
        melhoresPresentes: [
            "Coco",
            "Fruto do cacto",
            "Inhame",
            "Prato do mar",
            "Torta de Mirtilo"
        ]
    },
    {
        nome: "Harvey",
        tipo: "Homem",
        aniversario: "Inverno 14",
        moraEm: "Vila dos pelicanos",
        endereco: "Clinica do Harvey",
        casamento: "Sim",
        melhoresPresentes: [
            "Cafe",
            "Oleo de trufa",
            "Picles",
            "Superprato",
            "Vinho"
        ]
    },
    {
        nome: "Harley",
        tipo: "Mulher",
        aniversario: "Primavera 14",
        moraEm: "Vila Pelicanos",
        endereco: "Rua do salgueiro, n* 2",
        familia: [
            {
                tipo: "Irma",
                nome: "Emily",
                url: `${apiLink}/personagens/emily`
            }
        ],
        casamento: "Sim",
        visitaAclinica: "Inverno 9",
        melhoresPresentes: [
            "Bolo rosa",
            "Coco",
            "Girassol",
            "Salada de frutas"
        ]
    },
    {
        nome: "Leah",
        tipo: "Mulher",
        aniversario: "Inverno 23",
        moraEm: "Floresta Cinzaseiva",
        endereco: "Cabana da Leah",
        casamento: "Sim",
        visitaAclinica: "Primavera 16",
        melhoresPresentes: [
            "Bolinho de papoula",
            "Mexido de legumes",
            "Queijo de cabra",
            "Refogado",
            "Salada",
            "Trufa",
            "Vinho"
        ]
    },
    {
        nome: "Maru",
        tipo: "Mulher",
        aniversario: "Verao 10",
        moraEm: "A Montanha",
        endereco: "Rua da Montanha, n* 24",
        familia: [
            {
                tipo: "Pai",
                nome: "Demetrius",
                url: `${apiLink}/personagens/demetrius`
            },
            {
                tipo: "Mae",
                nome: "Robin",
                url: `${apiLink}/personagens/robin`
            },
            {
                tipo: "Meio-Irmao",
                nome: "Sebastian",
                url: `${apiLink}/personagens/sebastian`
            }
        ]
    },
    {
        nome: "Marnie",
        tipo: "Mulher",
        aniversario: "Outono 18",
        moraEm: "Floresta Cinzaseiva",
        endereco: "Rancho da Marnie",
        familia: [
            {
                tipo: "Sobrinha",
                nome: "Jas",
                url: `${apiLink}/personagens/jas`
            },
            {
                tipo: "Sobrinha",
                nome: "Shane",
                url: `${apiLink}/personagens/shane`
            }
        ],
        casamento: "Nao",
        visitaAclinica: [
            "Outono 18",
            "Inverno 18(com Jas)"
        ],
        melhoresPresentes: [
            "Almoco de fazendeiro",
            "Bolo rosa",
            "Diamante",
            "Torta de abobora"
        ]
    },
    {
        nome: "Marlon",
        tipo: "Homem",
        moraEm: "Vila Pelicanos",
        endereco: "Guilda dos Aventureiros",
        casamento: "Nao",
        melhoresPresentes: [
            "N/A"
        ]
    },
    {
        nome: "Morris",
        tipo: "Homem",
        moraEm: "Vila Pelicanos",
        endereco: "Mercado Joja",
        casamento: "Nao",
        melhoresPresentes: [
            "N/A"
        ]
    },
    {
        nome: "Pam",
        tipo: "Mulher",
        aniversario: "Primavera 18",
        moraEm: "Vila Pelicanos",
        endereco: "Trailer",
        familia: [
            {
                tipo: "Filha",
                nome: "Penny",
                url: `${apiLink}/personagens/penny`
            }
        ],
        casamento: "Nao",
        visitaAclinica: "Primavera 25",
        melhoresPresentes: [
            "Cerveja",
            "Chirivia",
            "Fruto do cacto",
            "Hidromel",
            "Inhames com cobertura",
            "Pale Ale",
            "Pina Colada",
            "Sopa de chirivia"
        ]
    },
    {
        nome: "Professor Caracol",
        tipo: "Homem",
        aniversario: "Desconhecido",
        moraEm:	"Ilha Gengibre",
        endereco: "Escritório local da ilha",
        casamento: "Não",
        melhoresPresentes: [
            "N/A"
        ]
    },
    {
        nome: "Passarinha",
        tipo: "Mulher",
        aniversario: "Desconhecido",
        moraEm: "Ilha Gengibre",
        endereco: "Cabana na Regiao Oeste",
        casamento: "Nao",
        melhoresPresentes: [
            "N/A"
        ]
    },
    {
        nome: "Pierre",
        tipo: "Mulher",
        aniversario: "Primavera 26",
        moraEm: "Vila Pelicanos",
        endereco: "Armazem do Pierre",
        familia: [
            {
                tipo: "Esposa",
                nome: "Caroline",
                url: `${apiLink}/personagens/caroline`
            },
            {
                tipo: "Filha",
                nome: "Abigail",
                url: `${apiLink}/personagens/abigail`
            }
        ],
        casamento: "Nao",
        melhoresPresentes: [
            "Lula frita"
        ]
    },
    {
        nome: "Robin",
        tipo: "Mulher",
        aniversario: "Outono 21",
        moraEm: "Vila Pelicanos",
        endereco: "Rua da Montanha, n*24",
        familia: [
            {
                tipo: "Marido",
                nome: "Demetrius",
                url: `${apiLink}/personagens/demetrius`
            },
            {
                tipo: "Filha",
                nome: "Maru",
                url: `${apiLink}/personagens/maru`
            },
            {
                tipo: "Filho",
                nome: "Sebastian",
                url: `${apiLink}/personagens/sebastian`
            }
        ],
        casamento: "Nao",
        visitaAclinica: "Verao 18",
        melhoresPresentes: [
            "Espaguete",
            "Pessego",
            "Queijo de cabra"
        ]
    },
    {
        nome: "Seguranca",
        tipo: "Homem",
        moraEm: "O Deserto",
        endereco: "Oasis",
        casamento: "Nao",
        melhoresPresentes: [
            "N/A"
        ]
    },
    {
        nome: "Sr.Qi",
        tipo: "Desconhecido",
        moraEm: "Deserto Calico",
        endereco: [
            "Cassino(Deserto Calico)",
            "Sala de Nozes(Ilha Gengibre)"
        ]
    },
    {
        nome: "Sandy",
        tipo: "Mulher",
        aniversario: "Outono 15",
        moraEm: "O Deserto",
        endereco: "Oasis",
        casamento: "Nao",
        melhoresPresentes: [
            "Arroz Doce de Manga",
            "Ervilha-de-cheiro",
            "Narciso"
        ]
    },
    {
        nome: "Vincent",
        tipo: "Menino",
        aniversario: "Primavera 10",
        moraEm: "Vila Pelicanos",
        endereco: "RUa do Salgueiro, n*1",
        familia: [
            {
                tipo: "Mae",
                nome: "Jodi",
                url: `${apiLink}/personagens/jodi`
            },
            {
                tipo: "Pai",
                nome: "Kent",
                url: `${apiLink}/personagens/kent`
            },
            {
                tipo: "Irmao",
                nome: "Sam",
                url: `${apiLink}/personagens/sam`
            }
        ],
        casamento: "Nao",
        visitaAclinica: "Primavera 11",
        melhoresPresentes: [
            "Bolo rosa",
            "Doce de oxicoco",
            "Ginger Ale",
            "Lesma",
            "Uva"
        ]
    },
    {
        nome: "Willy",
        tipo: "Homem",
        aniversario: "Verao 24",
        moraEm: "A Praia",
        endereco: "Peixaria",
        casamento: "Nao",
        visitaAclinica: "Primavera 9",
        melhoresPresentes: [
            "Abobora",
            "Bagre",
            "Barra de iridio",
            "Diamante",
            "Esturjao",
            "Hidromel",
            "Pepino-do-mar",
            "Polvo"
        ]
    },
    {
        nome: "Sam",
        tipo: "Homem",
        aniversario: "Verao 17",
        moraEm: "Vila Pelicanos",
        endereco: "Rua do salgueiro, n* 1",
        familia: [
            {
                tipo: "Mae",
                nome: "Jodi",
                url: `${apiLink}/personagens/jodi`,
            },
            {
                tipo: "Pai",
                nome: "Kent",
                url: `${apiLink}/personagens/kent`
            },
            {
                tipo: "Irmao",
                nome: "Vincent",
                url: `${apiLink}/personagens/vincent`
            }
        ],
        casamento: "Sim",
        visitaAclinica: "Outono 11",
        melhoresPresentes: [
            "Fruto cacto",
            "Olho de tigre",
            "Pao de acer",
            "Pizza"
        ]
    },
    {
        nome: "Sebastian",
        tipo: "Homem",
        aniversario: "Inverno 10",
        moraEm: "A montanha",
        endereco: "Rua da montanha, n* 24",
        familia: [
            {
                tipo: "Mae",
                nome: "Robin",
                url: `${apiLink}/personagens/robin`
            },
            {
                tipo: "Padrasto",
                nome: "Demetrius",
                url: `${apiLink}/personagens/demetrius`
            },
            {
                tipo: "Meia-irma",
                nome: "Maru",
                url: `${apiLink}/personagens/maru`
            }
        ],
        casamento: "Sim",
        visitaAclinica: "Verao 4",
        melhoresPresentes: [
            "Lagrima congelada",
            "Obisidiana",
            "Ovo nulo",
            "Sashimi",
            "Sopa de abobora"
        ]
    },
]

module.exports = personagens