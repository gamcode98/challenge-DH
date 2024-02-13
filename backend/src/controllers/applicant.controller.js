const { applicantService } = require('../services/applicant.services')

const findAll = async (req, res) => {
  const content = await applicantService.findAll()

  res.status(200).json({
    statusCode: res.statusCode,
    message: 'Aspirantes cargados exitosamente',
    content
  })
}

const applicantController = {
  findAll
}

module.exports = { applicantController }
