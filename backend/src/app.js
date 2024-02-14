const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { routerApi } = require('./routes/main.routes')
const { port } = require('./config/config')

const app = express()

app.use(cors())
app.use(morgan('dev'))

routerApi(app)

app.listen(port, () => console.log(`Server listening on http://localhost:${port} 🚀`))
