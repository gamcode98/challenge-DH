/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize/types').DataTypes} dataTypes
 */

module.exports = (sequelize, dataTypes) => {
  const alias = 'ApplicantsProfessions'
  const cols = {
    // id: {
    //   type: dataTypes.INTEGER(10).UNSIGNED,
    //   primaryKey: true,
    //   allowNull: false,
    //   autoIncrement: true
    // },
    applicantId: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      autoIncrement: false,
      field: 'applicant_id',
      references: {
        model: 'Applicant',
        key: 'id'
      }
    },
    professionId: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      autoIncrement: false,
      field: 'profession_id',
      references: {
        model: 'Profession',
        key: 'id'
      }
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

  const ApplicantsProfessions = sequelize.define(alias, cols, config)
  return ApplicantsProfessions
}
