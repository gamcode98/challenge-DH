const { Router } = require('express')
const { applicantRouter } = require('.')

const routerApi = (app) => {
  const router = Router()

  app.use('/api/v1', router)

  router.use('/applicants', applicantRouter)
}

module.exports = { routerApi }
