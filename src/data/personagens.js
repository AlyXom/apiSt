require('dotenv').config()

const apiLink = process.env.APILINK

const personagens = [
    {
        nome: "anao",
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
        nome: "alex",
        tipo: "homem",
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
        nome: "abigail",
        tipo: "mulher",
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
        nome: "elliot",
        tipo: "homem",
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
        nome: "emily",
        tipo: "mulher",
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
        nome: "harvey",
        tipo: "homem",
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
        nome: "harley",
        tipo: "mulher",
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
        tipo: "mulher",
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
        nome: "maru",
        tipo: "mulher",
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
        nome: "sam",
        tipo: "homem",
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
        nome: "sebastian",
        tipo: "homem",
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