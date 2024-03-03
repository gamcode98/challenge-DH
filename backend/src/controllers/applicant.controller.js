const { applicantService } = require('../services/applicant.services')
const { handleUpload } = require('../utils/cloudinary.handler')
const { FOLDER_STORAGE } = require('../utils/constants')

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

const create = async (req, res) => {
  try {
    const { body, file } = req

    const cldRes = await handleUpload(file, FOLDER_STORAGE.APPLICANTS)

    const data = await applicantService.create({
      ...body,
      image: cldRes.secure_url
    })

    res.status(201).json({
      meta: {
        error: false,
        count: 1,
        statusCode: res.statusCode,
        url: '/applicants',
        message: 'Aspirante creado exitosamente'
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

const findAllByQuery = async (req, res) => {
  try {
    const { applicant } = req.query

    const data = await applicantService.findAllByQuery(applicant)

    res.status(200).json({
      meta: {
        error: false,
        count: data.length,
        statusCode: res.statusCode,
        url: '/applicants',
        message: 'Appirantes cargados exitosamente'
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
  findAll,
  create,
  findAllByQuery
}

module.exports = { applicantController }
