const { Router } = require('express')
const { applicantController } = require('../controllers')

const applicantRouter = Router()

applicantRouter.get(
  '/',
  applicantController.findAll
)

module.exports = { applicantRouter }
