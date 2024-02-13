const { Router } = require('express')
const { applicantController } = require('../controllers/applicant.controller')

const applicantRouter = Router()

applicantRouter.get(
  '/',
  applicantController.findAll
)

module.exports = { applicantRouter }
