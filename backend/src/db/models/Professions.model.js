/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize/types').DataTypes} dataTypes
 */

module.exports = (sequelize, dataTypes) => {
  const alias = 'Professions'
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
    }
  }

  const config = {
    timestamps: false,
    deletedAt: false
  }

  const Professions = sequelize.define(alias, cols, config)
/*   Professions.associate = (models) => {
    Professions.hasMany(models.ApplicantsProfessions, {
      foreignKey: 'profession_id',
      as: 'ApplicantsProfessions'
    })
  } */

  return Professions
}
