const { Profession, Applicant } = require('../db/models')
const { Op } = require('sequelize')

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

const findManyById = async (ids) => {
  const professions = await Profession.findAll({
    where: {
      id: {
        [Op.in]: ids
      }
    }
  })
  return professions
}

const createMany = async (data) => {
  const professions = await Profession.bulkCreate(data)
  return professions
}

const findAllByQuery = async (query) => {
  const professions = await Profession.findAll({
    where: {
      name: {
        [Op.like]: `%${query}%`
      }
    }
  })

  return professions
}

const professionsService = {
  findAll,
  createMany,
  findAllByQuery,
  findManyById
}

module.exports = { professionsService }
