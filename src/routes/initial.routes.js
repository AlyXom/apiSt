const { Router } = require('express')
const InitialController = require('../controllers/InitialController')

const initialRoutes = Router()
const initialController = new InitialController()

initialRoutes.get('/', initialController.index)

module.exports = initialRoutes