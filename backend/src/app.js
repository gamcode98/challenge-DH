const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { routerApi } = require('./routes/main.routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

routerApi(app)

module.exports = { app }
