const { applicantService } = require('../services/applicant.services')
const { professionsService } = require('../services/professions.services')
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
    const {
      body: {
        firstName,
        lastName,
        email,
        cellphone,
        dni,
        gender,
        birthdate,
        professionsId
      }, file
    } = req

    const professions = await professionsService.findManyById(professionsId)

    const cldRes = await handleUpload(file, FOLDER_STORAGE.APPLICANTS)

    const data = await applicantService.create({
      firstName,
      lastName,
      email,
      cellphone,
      dni,
      gender,
      birthdate,
      image: cldRes.secure_url
    })

    await data.addProfession(professions)

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
const findOneById = async (req, res) => {
  try {
    const { id } = req.params
    const data = await applicantService.findOneById(id)

    res.status(200).json({
      meta: {
        error: false,
        count: data.length,
        statusCode: res.statusCode,
        url: '/applicants',
        message: 'Aspirante cargado exitosamente'
      },
      data
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(500).json({
      statusCode: res.statusCode,
      message: 'Server error de uno'
    })
  }
}

const applicantController = {
  findAll,
  create,
  findAllByQuery,
  findOneById
}

module.exports = { applicantController }
