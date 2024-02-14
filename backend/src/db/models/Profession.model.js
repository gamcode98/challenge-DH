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
    }
  }

  const config = {
    timestamps: false,
    deletedAt: false
  }

  const Profession = sequelize.define(alias, cols, config)
  Profession.associate = (models) => {
    Profession.belongsToMany(models.Applicant, {
      through: 'ApplicantsProfessions',
      foreignKey: 'profession_id'
    })
  }

  return Profession
}
