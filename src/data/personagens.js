require('dotenv').config()

const apiLink = process.env.APILINK

const personagens = [
    {
        name: "Ajudante",
        gender: "Desconhecido",
        lifeIn: "Cabana da Bruxa",
        marriage: "Nao",
        bestGifts: [
            "Maionese nula"
        ]
    },
    {
        name: "Avo",
        gender: "Homem",
        address: "A vida apos a morte",
        bestGifts: [
            "N/A"
        ]
    },
    {
        name: "Anao",
        gender: "Desconhecido",
        birthday: "Verao 22",
        lifeIn: "As Minas",
        address: "Caverna oriental",
        marriage: "Nao",
        bestGifts: [
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
        name: "Alex",
        gender: "Homem",
        birthday: "Verao 13",
        lifeIn: "Vila Pelicanos",
        address: "Estrada do Rio, n*1",
        family: [
            {
                type: "Avo",
                name: "George",
                url: `${apiLink}/personagens/george`,
            },
            {
                type: "Avo",
                name: "Evelyn",
                url: `${apiLink}/personagens/evelyn`
            }
        ],
        marriage: "Sim",
        VisitToClinic: "Verao 16",
        bestGifts: [
            "Cafe da manha completo",
            "Jantar de salmao"
        ]
    },
    {
        name: "Abigail",
        gender: "Mulher",
        birthday: "Outono 13",
        lifeIn: "Vila dos Pelicanos",
        address: "Armazem do Pierre",
        family: [
            {
                type: "Pai",
                name: "Pierre",
                url: `${apiLink}/personagens/pierre`
            },
            {
                type: "Mae",
                name: "Caroline",
                url: `${apiLink}/personagens/caroline`
            }
        ],
        marriage: "Sim",
        VisitToClinic: "Primavera 4",
        bestGifts: [
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
        name: "Caroline",
        gender: "Mulher",
        birthday: "Inverno 7",
        lifeIn: "Vila Pelicanos",
        address: "Armazem do Pierre",
        family: [
            {
                type: "Marido",
                name: "Pierre",
                url: `${apiLink}/personagens/pierre`,
            },
            {
                type: "Filha",
                name: "Abigail",
                url: `${apiLink}/personagens/abigail`
            }
        ],
        marriage: "Nao",
        VisitToClinic: "Outono 25",
        bestGifts: [
            "Cha verde",
            "Flor-Micanga",
            "Taco de peixe"
        ]
    },
    {
        name: "Clint",
        gender: "Homem",
        birthday: "Inverno 26",
        lifeIn: "Vila Pelicanos",
        address: "Ferreiro",
        marriage: "Nao",
        VisitToClinic: "Inverno 16",
        bestGifts: [
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
        name: "Demetrius",
        gender: "Homem",
        birthday: "Verao 19",
        lifeIn: "A Montanha",
        address: "Rua da Montanha, n*24",
        family: [
            {
                type: "Esposa",
                name: "Robin",
                url: `${apiLink}/personagens/robin`,
            },
            {
                type: "Filha",
                name: "Maru",
                url: `${apiLink}/personagens/maru`
            },
            {
                type: "Enteado",
                name: "Sebastian",
                url: `${apiLink}/personagens/sebastian`
            }
        ],
        marriage: "Nao",
        VisitToClinic: "Verao 25",
        bestGifts: [
            "Morando",
            "Pote de feijao",
            "Pudim de Arroz",
            "Sorvete"
        ]
    },
    {
        name: "Evelyn",
        gender: "Mulher",
        birthday: "Inverno 20",
        lifeIn: "Vila Pelicanos",
        address: "Estrada do Rio, n* 1",
        family: [
            {
                type: "Marido",
                name: "George",
                url: `${apiLink}/personagens/george`
            },
            {
                type: "Neto",
                name: "Alex",
                url: `${apiLink}/personagens/alex`
            }
        ],
        marriage: "Nao",
        VisitToClinic: [
            "O 2* de cada estacao",
            "O 23* de cada estacao(com George)"
        ],
        bestGifts: [
            "Beterraba",
            "Bolo de chocolate",
            "Diamante",
            "Recheio",
            "Rosa-de-fada",
            "Tulipa"
        ]
    },
    {
        name: "Elliot",
        gender: "Homem",
        birthday: "Outono 5",
        lifeIn: "A Praia",
        address: "Cabana do Elliot",
        marriage: "Sim",
        VisitToClinic: "Verao 9",
        bestGifts: [
            "Bolinhos de caranguejo",
            "Lagosta",
            "Pena de pato",
            "Roma",
            "Sopa Tom Kha",
            "Tinta de Lula"
        ]
    },
    {
        name: "Emily",
        gender: "Mulher",
        birthday: "Primavera 27",
        lifeIn: "Vila Pelicanos",
        address: "Rua do Salgueiro, n*2",
        family: [
            {
                type: "Irma",
                name: "Harley",
                url: `${apiLink}/personagens/harley`
            }
        ],
        marriage: "Sim",
        VisitToClinic: "Inverno 11",
        bestGifts: [
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
        name: "Feiticeiro",
        gender: "Homem",
        birthday: "Floresta Cinzaseiva",
        lifeIn: "Torre do Mago",
        marriage: "Nao",
        bestGifts: [
            "Cogumelo Roxo",
            "Essencia nula",
            "Essencia solar",
            "Superpepino"
        ]
    },
    {
        name: "George",
        gender: "Homem",
        birthday: "Outono 24",
        lifeIn: "Vila Pelicanos",
        address: "Estrada do Rio, n*1",
        family: [
            {
                type: "Esposa",
                name: "Evelyn",
                url: `${apiLink}/personagens/evelyn`
            },
            {
                type: "Neto",
                name: "Alex",
                url: `${apiLink}/personagens/alex`
            }
        ],
        marriage: "Nao",
        VisitToClinic: "O 23* de cada estacao",
        bestGifts: [
            "Alho-poro",
            "Cogumelo Frito"
        ]
    },
    {
        name: "Gus",
        gender: "Homem",
        birthday: "Verao 8",
        lifeIn: "Vila Pelicanos",
        address: "Saloon Fruta Estrelar",
        marriage: "Nao",
        VisitToClinic: "Outono 4",
        bestGifts: [
            "Diamante",
            "Escargo",
            "Laranja",
            "Taco de peixe"
        ]
    },
    {
        name: "Gil",
        gender: "Homem",
        lifeIn: "Vila Pelicanos",
        address: "Guilda dos Aventureiros",
        marriage: "Nao",
        bestGifts: [
            "N/A"
        ]
    },
    {
        name: "Governador",
        gender: "Homem",
        birthday: "Desconhecido",
        address: "Desconhecido",
        marriage: "Nao",
        bestGifts: [
            "N/A"
        ]
    },
    {
        name: "Gunther",
        gender: "Homem",
        birthday: "Desconhecido",
        lifeIn: "Vila Pelicanos",
        address: "Museu",
        marriage: "Nao",
        bestGifts: [
            "Nao recebe presentes"
        ]
    },
    {
        name: "Jas",
        gender: "menina",
        birthday: "Verao 4",
        lifeIn: "Floresta Cinzaseiva",
        address: "Rancho da Marnie",
        family: [
            {
                type: "Tia",
                name: "Marnie",
                url: `${apiLink}/personagens/marnie`
            },
            {
                type: "Padrinho",
                name: "Shane",
                url: `${apiLink}/personagens/shane`
            }
        ],
        marriage: "Nao",
        VisitToClinic: "Inverno 18",
        bestGifts: [
            "Bolo rosa",
            "Pudim de ameixa",
            "Rosa-de-fada"
        ]
    },
    {
        name: "Jodi",
        gender: "Mulher",
        birthday: "Outono 11",
        lifeIn: "Vila Pelicanos",
        address: "Rua do Salgueiro, n* 1",
        family: [
            {
                type: "Marido",
                name: "Kent",
                url: `${apiLink}/personagens/kent`
            },
            {
                type: "Filho",
                name: "Sam",
                url:`${apiLink}/personagens/sam`
            },
            {
                type: "Filho",
                name: "Vincent",
                url: `${apiLink}/personagens/vincent`

            }
        ],
        marriage: "Nao",
        VisitToClinic: [
            "Primavera 11 (com Vincent)",
            "Primavera 18"
        ],
        bestGifts: [
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
        name: "Kent",
        gender: "Homem",
        birthday: "Primavera 4",
        lifeIn: "Vila Pelicanos",
        address: "Rua do Salgueiro, n*1",
        family: [
            {
                type: "Esposa",
                name: "Jodi",
                url: `${apiLink}/personagens/Jodi`
            },
            {
                type: "Filho",
                name: "Vincent",
                url: `${apiLink}/personagens/vincent`
            },
            {
                type: "Filho",
                name: "Sam",
                url: `${apiLink}/personagens/sam`
            }
        ],
        marriage: "Nao",
        bestGifts: [
            "Avelas torradas",
            "Risoto de samambaia"
        ]

    },
    {
        name: "Krobus",
        gender: "Desconhecido",
        birthday: "Inverno 1",
        lifeIn: "Os Esgotos",
        address: "Loja do Krobus",
        marriage: "Nao(mas pode se tornar um colega de quarto)",
        bestGifts: [
            "Abobora",
            "Barra de iridio",
            "Diamante",
            "Maionese nula",
            "Ovo nulo",
            "Raiz-forte"
        ]
    },
    {
        name: "Leo",
        gender: "Menino",
        birthday: "Verao 26",
        lifeIn: "Ilha gengibre",
        address: [
            "Cabana (<6 coracao)",
            "Casa na arvore (>6 coracao)"
        ],
        marriage: "Nao",
        bestGifts: [
            "Manga",
            "Ovo de Avestruz",
            "Pena de pato",
            "Poi"
        ]
    },
    {
        name: "Lewis",
        gender: "Homem",
        birthday: "Primavera 7",
        lifeIn: "Vila Pelicanos",
        address: "Mansao do Prefeito",
        marriage: "Nao",
        VisitToClinic: "Outono 9",
        bestGifts: [
            "Cha verde",
            "Inhames com cobertura",
            "Mexido de legumes",
            "Pimenta quente",
            "Prato de outono"
        ]
    },
    {
        name: "Linus",
        gender: "Homem",
        birthday: "Inverno 3",
        lifeIn: "A Montanha",
        address: "Tenda",
        marriage: "Nao",
        bestGifts: [
            "Coco",
            "Fruto do cacto",
            "Inhame",
            "Prato do mar",
            "Torta de Mirtilo"
        ]
    },
    {
        name: "Harvey",
        gender: "Homem",
        birthday: "Inverno 14",
        lifeIn: "Vila dos pelicanos",
        address: "Clinica do Harvey",
        marriage: "Sim",
        bestGifts: [
            "Cafe",
            "Oleo de trufa",
            "Picles",
            "Superprato",
            "Vinho"
        ]
    },
    {
        name: "Harley",
        gender: "Mulher",
        birthday: "Primavera 14",
        lifeIn: "Vila Pelicanos",
        address: "Rua do salgueiro, n* 2",
        family: [
            {
                type: "Irma",
                name: "Emily",
                url: `${apiLink}/personagens/emily`
            }
        ],
        marriage: "Sim",
        VisitToClinic: "Inverno 9",
        bestGifts: [
            "Bolo rosa",
            "Coco",
            "Girassol",
            "Salada de frutas"
        ]
    },
    {
        name: "Leah",
        gender: "Mulher",
        birthday: "Inverno 23",
        lifeIn: "Floresta Cinzaseiva",
        address: "Cabana da Leah",
        marriage: "Sim",
        VisitToClinic: "Primavera 16",
        bestGifts: [
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
        name: "Maru",
        gender: "Mulher",
        birthday: "Verao 10",
        lifeIn: "A Montanha",
        address: "Rua da Montanha, n* 24",
        family: [
            {
                type: "Pai",
                name: "Demetrius",
                url: `${apiLink}/personagens/demetrius`
            },
            {
                type: "Mae",
                name: "Robin",
                url: `${apiLink}/personagens/robin`
            },
            {
                type: "Meio-Irmao",
                name: "Sebastian",
                url: `${apiLink}/personagens/sebastian`
            }
        ]
    },
    {
        name: "Marnie",
        gender: "Mulher",
        birthday: "Outono 18",
        lifeIn: "Floresta Cinzaseiva",
        address: "Rancho da Marnie",
        family: [
            {
                type: "Sobrinha",
                name: "Jas",
                url: `${apiLink}/personagens/jas`
            },
            {
                type: "Sobrinha",
                name: "Shane",
                url: `${apiLink}/personagens/shane`
            }
        ],
        marriage: "Nao",
        VisitToClinic: [
            "Outono 18",
            "Inverno 18(com Jas)"
        ],
        bestGifts: [
            "Almoco de fazendeiro",
            "Bolo rosa",
            "Diamante",
            "Torta de abobora"
        ]
    },
    {
        name: "Marlon",
        gender: "Homem",
        lifeIn: "Vila Pelicanos",
        address: "Guilda dos Aventureiros",
        marriage: "Nao",
        bestGifts: [
            "N/A"
        ]
    },
    {
        name: "Morris",
        gender: "Homem",
        lifeIn: "Vila Pelicanos",
        address: "Mercado Joja",
        marriage: "Nao",
        bestGifts: [
            "N/A"
        ]
    },
    {
        name: "Pam",
        gender: "Mulher",
        birthday: "Primavera 18",
        lifeIn: "Vila Pelicanos",
        address: "Trailer",
        family: [
            {
                type: "Filha",
                name: "Penny",
                url: `${apiLink}/personagens/penny`
            }
        ],
        marriage: "Nao",
        VisitToClinic: "Primavera 25",
        bestGifts: [
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
        name: "Professor Caracol",
        gender: "Homem",
        birthday: "Desconhecido",
        lifeIn:	"Ilha Gengibre",
        address: "Escritório local da ilha",
        marriage: "Não",
        bestGifts: [
            "N/A"
        ]
    },
    {
        name: "Passarinha",
        gender: "Mulher",
        birthday: "Desconhecido",
        lifeIn: "Ilha Gengibre",
        address: "Cabana na Regiao Oeste",
        marriage: "Nao",
        bestGifts: [
            "N/A"
        ]
    },
    {
        name: "Pierre",
        gender: "Mulher",
        birthday: "Primavera 26",
        lifeIn: "Vila Pelicanos",
        address: "Armazem do Pierre",
        family: [
            {
                type: "Esposa",
                name: "Caroline",
                url: `${apiLink}/personagens/caroline`
            },
            {
                type: "Filha",
                name: "Abigail",
                url: `${apiLink}/personagens/abigail`
            }
        ],
        marriage: "Nao",
        bestGifts: [
            "Lula frita"
        ]
    },
    {
        name: "Robin",
        gender: "Mulher",
        birthday: "Outono 21",
        lifeIn: "Vila Pelicanos",
        address: "Rua da Montanha, n*24",
        family: [
            {
                type: "Marido",
                name: "Demetrius",
                url: `${apiLink}/personagens/demetrius`
            },
            {
                type: "Filha",
                name: "Maru",
                url: `${apiLink}/personagens/maru`
            },
            {
                type: "Filho",
                name: "Sebastian",
                url: `${apiLink}/personagens/sebastian`
            }
        ],
        marriage: "Nao",
        VisitToClinic: "Verao 18",
        bestGifts: [
            "Espaguete",
            "Pessego",
            "Queijo de cabra"
        ]
    },
    {
        name: "Seguranca",
        gender: "Homem",
        lifeIn: "O Deserto",
        address: "Oasis",
        marriage: "Nao",
        bestGifts: [
            "N/A"
        ]
    },
    {
        name: "Sr.Qi",
        gender: "Desconhecido",
        lifeIn: "Deserto Calico",
        address: [
            "Cassino(Deserto Calico)",
            "Sala de Nozes(Ilha Gengibre)"
        ]
    },
    {
        name: "Sandy",
        gender: "Mulher",
        birthday: "Outono 15",
        lifeIn: "O Deserto",
        address: "Oasis",
        marriage: "Nao",
        bestGifts: [
            "Arroz Doce de Manga",
            "Ervilha-de-cheiro",
            "Narciso"
        ]
    },
    {
        name: "Vincent",
        gender: "Menino",
        birthday: "Primavera 10",
        lifeIn: "Vila Pelicanos",
        address: "RUa do Salgueiro, n*1",
        family: [
            {
                type: "Mae",
                name: "Jodi",
                url: `${apiLink}/personagens/jodi`
            },
            {
                type: "Pai",
                name: "Kent",
                url: `${apiLink}/personagens/kent`
            },
            {
                type: "Irmao",
                name: "Sam",
                url: `${apiLink}/personagens/sam`
            }
        ],
        marriage: "Nao",
        VisitToClinic: "Primavera 11",
        bestGifts: [
            "Bolo rosa",
            "Doce de oxicoco",
            "Ginger Ale",
            "Lesma",
            "Uva"
        ]
    },
    {
        name: "Willy",
        gender: "Homem",
        birthday: "Verao 24",
        lifeIn: "A Praia",
        address: "Peixaria",
        marriage: "Nao",
        VisitToClinic: "Primavera 9",
        bestGifts: [
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
        name: "Sam",
        gender: "Homem",
        birthday: "Verao 17",
        lifeIn: "Vila Pelicanos",
        address: "Rua do salgueiro, n* 1",
        family: [
            {
                type: "Mae",
                name: "Jodi",
                url: `${apiLink}/personagens/jodi`,
            },
            {
                type: "Pai",
                name: "Kent",
                url: `${apiLink}/personagens/kent`
            },
            {
                type: "Irmao",
                name: "Vincent",
                url: `${apiLink}/personagens/vincent`
            }
        ],
        marriage: "Sim",
        VisitToClinic: "Outono 11",
        bestGifts: [
            "Fruto cacto",
            "Olho de tigre",
            "Pao de acer",
            "Pizza"
        ]
    },
    {
        name: "Sebastian",
        gender: "Homem",
        birthday: "Inverno 10",
        lifeIn: "A montanha",
        address: "Rua da montanha, n* 24",
        family: [
            {
                type: "Mae",
                name: "Robin",
                url: `${apiLink}/personagens/robin`
            },
            {
                type: "Padrasto",
                name: "Demetrius",
                url: `${apiLink}/personagens/demetrius`
            },
            {
                type: "Meia-irma",
                name: "Maru",
                url: `${apiLink}/personagens/maru`
            }
        ],
        marriage: "Sim",
        VisitToClinic: "Verao 4",
        bestGifts: [
            "Lagrima congelada",
            "Obisidiana",
            "Ovo nulo",
            "Sashimi",
            "Sopa de abobora"
        ]
    },
]

module.exports = personagens