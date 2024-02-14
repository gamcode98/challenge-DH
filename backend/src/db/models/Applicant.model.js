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
    firstName: {
      type: dataTypes.STRING(255),
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: dataTypes.STRING(255),
      allowNull: false,
      field: 'last_name'
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
    },
    dni: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: dataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: dataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: dataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }

  const config = {
    timestamps: true,
    deletedAt: true,
    underscored: true
  }

  const Applicant = sequelize.define(alias, cols, config)
  Applicant.associate = (models) => {
    Applicant.belongsToMany(models.Profession, {
      through: 'applicants_professions',
      foreignKey: 'applicant_id'
    })
  }

  return Applicant
}
