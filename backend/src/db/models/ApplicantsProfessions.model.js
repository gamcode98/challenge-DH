/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 */

module.exports = (sequelize, dataTypes) => {
    let alias = 'ApplicantsProfessions'
    let cols = {
      applicant_id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
      },
      profession_id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
      }    
    }
  
    let config = {
      timestamps: false,
      deletedAt: false
    }
  
    const ApplicantsProfessions = sequelize.define(alias, cols, config)
    ApplicantsProfessions.associate = (models) => {
      ApplicantsProfessions.belongsTo(models.Applicant, {
        as: 'Applicant'
        foreignKey: 'applicant_id'
      }),
      ApplicantsProfessions.belongsTo(models.Applicant, {
        as: 'Profession'
        foreignKey: 'profession_id'
      })
    }
    return ApplicantsProfessions
}