require('dotenv').config()
const { Pool } = require('pg')

const connectionDevelopment = {
    database: process.env.DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: 5432
}

const connectionProduction = {
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false}
  }

const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionDevelopment)

module.exports = pool