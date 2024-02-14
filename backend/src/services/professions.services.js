const { Profession, Applicant } = require('../db/models')

const findAll = async () => {
  const professions = await Profession.findAll(
    {
      include: {
        model: Applicant
      }
    }
  )
  return professions
}

const createMany = async (data) => {
  const professions = await Profession.bulkCreate(data)
  return professions
}

const professionsService = {
  findAll,
  createMany
}

module.exports = { professionsService }
