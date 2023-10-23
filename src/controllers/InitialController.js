require('dotenv').config()

class InitialController {
    index(req, res) {
        return res.json({
            personagens: `${process.env.APILINK}/personagens/`,
            itens: `${process.env.APILINK}/itens/`,
            lugares: `${process.env.APILINK}/lugares`
        })
    }
}

module.exports = InitialController