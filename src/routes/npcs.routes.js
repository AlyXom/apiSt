const { Router } = require('express')
const NpcController = require('../controllers/NpcController')

const npcRoutes = Router()
const npcController = new NpcController()

npcRoutes.get('/', npcController.index)
npcRoutes.get('/:nome?', npcController.get)

module.exports = npcRoutes