const { professionsService } = require('../services')

const findAll = async (req, res) => {
  const content = await professionsService.findAll()

  res.status(200).json({
    statusCode: res.statusCode,
    message: 'Profesiones cargados exitosamente',
    content
  })
}

const professionsController = {
  findAll
}

module.exports = { professionsController }