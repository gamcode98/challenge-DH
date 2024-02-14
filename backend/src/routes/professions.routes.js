const { Router } = require('express')

const { professionsController } = require('../controllers/professions.controller')

const professionsRouter = Router()

professionsRouter.get('/', professionsController.findAll)

module.exports = { professionsRouter }
