const { dbHost, dbUser, dbPass, dbName } = require('../../config/config')

module.exports = {
  development: {
    username: dbUser,
    password: '',
    database: dbName,
    host: dbHost,
    dialect: 'mysql'
  },
  test: {
    username: dbUser,
    password: '',
    database: dbName,
    host: dbHost,
    dialect: 'mysql'
  },
  production: {
    username: dbUser,
    password: '',
    database: dbName,
    host: dbHost,
    dialect: 'mysql'
  }
}
