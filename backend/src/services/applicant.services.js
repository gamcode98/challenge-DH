const db = require('./../db/models')

const findAll = async () => {
  const applicants = await db.Applicant.findAll()
  return applicants
}

const createMany = async (data) => {
  const applicants = await db.Applicant.bulkCreate(data)
  return applicants
}

const applicantService = {
  findAll,
  createMany
}

module.exports = { applicantService }