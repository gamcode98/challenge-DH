const { professionsService } = require('../services/professions.services')

const findAll = async (req, res) => {
  try {
    const data = await professionsService.findAll()

    res.status(200).json({
      meta: {
        error: false,
        count: data.length,
        statusCode: res.statusCode,
        url: '/professions',
        message: 'Profesiones cargados exitosamente'
      },
      data
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(500).json({
      statusCode: res.statusCode,
      message: 'Server error'
    })
  }
}

const professionsController = {
  findAll
}

module.exports = { professionsController }
