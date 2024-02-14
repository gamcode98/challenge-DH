/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 */

module.exports = (sequelize, dataTypes) => {
  const alias = 'ApplicantsProfessions'
  const cols = {
    id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    applicant_id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      autoIncrement: false,
      field: 'applicant_id',
      references: {
        model: 'Applicant',
        key: 'id'
      }
    },
    profession_id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      autoIncrement: false,
      field: 'profession_id',
      references: {
        model: 'Profession',
        key: 'id'
      }
    }
  }

  const config = {
    timestamps: false,
    deletedAt: false
  }

  const ApplicantsProfessions = sequelize.define(alias, cols, config)
  return ApplicantsProfessions
}