require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3000,
  dbName: process.env.DB_NAME || 'challenge',
  dbUser: process.env.DB_USER || 'root',
  dbPass: process.env.DB_PASS || 'root',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || 3306
}
