const { port } = require('./config/config')
const { app } = require('./app')

app.listen(port, () => console.log(`Server listening on http://localhost:${port} 🚀`))
