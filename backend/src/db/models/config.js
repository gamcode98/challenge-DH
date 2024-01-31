const { dbHost, dbUser, dbPass, dbName } = require('./../../config/config')

module.exports = {
  development: {
    username: dbUser,
    password: dbPass,
    database: dbName,
    host: dbHost,
    dialect: 'mysql'
  },
  test: {
    username: dbUser,
    password: dbPass,
    database: dbName,
    host: dbHost,
    dialect: 'mysql'
  },
  production: {
    username: dbUser,
    password: dbPass,
    database: dbName,
    host: dbHost,
    dialect: 'mysql'
  }
}
