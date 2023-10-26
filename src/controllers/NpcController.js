const personagens = require('../data/personagens')

class NpcController {
    get(req, res) {
        const nome = req.params.nome.toLowerCase()
        console.log(nome)
        const personagem = personagens.filter(item => {
            if (item.nome.toLowerCase() == nome) {
                return item.nome
            }
        })
        res.json(personagem)
    }

    index(req, res) {
        res.json(personagens)
    }
}

module.exports = NpcController