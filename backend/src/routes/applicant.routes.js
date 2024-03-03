const { Router } = require('express')
const { applicantController } = require('../controllers/applicant.controller')
const { upload } = require('./../middlewares/file.middleware')

const applicantRouter = Router()

applicantRouter.get(
  '/',
  applicantController.findAll
)

applicantRouter.get(
  '/find',
  applicantController.findAllByQuery
)

applicantRouter.post(
  '/',
  upload.single('image'),
  applicantController.create
)

module.exports = { applicantRouter }
