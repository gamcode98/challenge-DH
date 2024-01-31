/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize/types').DataTypes} dataTypes
 */

module.exports = (sequelize, dataTypes) => {
  const alias = 'Applicant'
  const cols = {
    id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    firstname: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    lastname: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    cellphone: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    image: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    gender: {
      type: dataTypes.STRING(100),
      allowNull: false
    },
    birthdate: {
      type: dataTypes.DATE,
      allowNull: false
    }
  }

  const config = {
    timestamps: false,
    deletedAt: false
  }

  const Applicant = sequelize.define(alias, cols, config)

  return Applicant
}
