/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 */

module.exports = (sequelize, dataTypes) => {
  const alias = 'ApplicantsProfessions'
  const cols = {
    applicantId: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
      field: 'applicant_id'
    },
    professionId: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
      field: 'profession_id'
    }
  }

  const config = {
    timestamps: false,
    deletedAt: false
  }

  const ApplicantsProfessions = sequelize.define(alias, cols, config)
   ApplicantsProfessions.associate = (models) => {
    models.Applicant.belongsToMany(models.Professions, { through: ApplicantsProfessions })
    models.Professions.belongsToMany(models.Applicant, { through: ApplicantsProfessions })
  } 
  return ApplicantsProfessions
}