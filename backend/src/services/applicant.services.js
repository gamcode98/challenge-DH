const { Applicant, Profession } = require('./../db/models')
const { Op } = require('sequelize')

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

const create = async (data) => {
  const applicant = await Applicant.create(data)
  return applicant
}

const findAllByQuery = async (query) => {
  const applicants = await Applicant.findAll({
    where: {
      name: {
        [Op.like]: `%${query}%`
      }
    }
  })

  return applicants
}

const applicantService = {
  findAll,
  createMany,
  create,
  findAllByQuery
}

module.exports = { applicantService }
