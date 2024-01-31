const db = require('./../db/models')

const findAll = async () => {
  const data = await db.Applicant.findAll()
  return data
}

const applicantService = {
  findAll
}

module.exports = { applicantService }
