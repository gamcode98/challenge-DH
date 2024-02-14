const db = require('../db/models')

const findAll = async () => {
  const professions = await db.Profession.findAll(
    {
      include: {
        model: db.Applicant
      }
    }
  )
  return professions
}

const createMany = async (data) => {
  const professions = await db.Profession.bulkCreate(data)
  return professions
}

const professionsService = {
  findAll,
  createMany
}

module.exports = { professionsService }
