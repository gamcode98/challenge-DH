const { Router } = require('express')

const { professionsController } = require('../controllers/professions.controller')

const professionsRouter = Router()

professionsRouter.get(
  '/',
  professionsController.findAll
)

professionsRouter.get(
  '/find',
  professionsController.findAllByQuery
)

module.exports = { professionsRouter }
