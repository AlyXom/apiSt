require('dotenv').config()
const express = require('express')
const routes = require('./routes')

const app = express()

app.use(routes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Rodando servidor na porta: ${PORT}`))