const { Router } = require('express')
const { applicantRouter } = require('./applicant.routes')
const { professionsRouter } = require('./professions.routes')

const routerApi = (app) => {
  const router = Router()

  app.use('/api/v1', router)

  router.use('/applicants', applicantRouter)
  router.use('/professions', professionsRouter)
}

module.exports = { routerApi }
