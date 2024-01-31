const { applicantService } = require('../services')

const findAll = async () => {
  const data = await applicantService.findAll()
  return data
}

const applicantController = {
  findAll
}

module.exports = { applicantController }
