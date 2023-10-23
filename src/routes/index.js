const { Router } = require('express')
const npcRoutes = require('../routes/npcs.routes')
const initialRoutes = require('../routes/initial.routes')

const routes = Router()

routes.use('/', initialRoutes)
routes.use('/personagens', npcRoutes)

module.exports = routes