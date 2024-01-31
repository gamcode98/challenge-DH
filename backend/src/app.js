const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { port } = require('./config/config')

const app = express()

app.use(cors())
app.use(morgan('dev'))

app.listen(port, () => console.log(`Server listening on port ${port}`))
