const { applicantService } = require('../services/applicant.services')

const findAll = async (req, res) => {
  try {
    const data = await applicantService.findAll()

    res.status(200).json({
      meta: {
        error: false,
        count: data.length,
        statusCode: res.statusCode,
        url: '/applicants',
        message: 'Aspirantes cargados exitosamente'
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

const applicantController = {
  findAll
}

module.exports = { applicantController }
