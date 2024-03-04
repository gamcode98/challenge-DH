/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize/types').DataTypes} dataTypes
 */

module.exports = (sequelize, dataTypes) => {
  const alias = 'Profession'
  const cols = {
    id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
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

  const Profession = sequelize.define(alias, cols, config)
  Profession.associate = (models) => {
    Profession.belongsToMany(models.Applicant, {
      through: 'applicants_professions',
      foreignKey: 'profession_id'
    })
  }

  return Profession
}
