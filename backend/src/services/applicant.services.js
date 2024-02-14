const { Applicant, Profession } = require('./../db/models')

const findAll = async () => {
  const applicants = await Applicant.findAll({
    include: {
      model: Profession
    }
  })
  return applicants
}

const createMany = async (data) => {
  const applicants = await Applicant.bulkCreate(data)
  return applicants
}

const applicantService = {
  findAll,
  createMany
}

module.exports = { applicantService }
