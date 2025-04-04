// db.js
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();
// Load environment variables from .env file
const dbConfig = {
  development: {
    host: process.env.DEV_DB_HOST,
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
  },
  production: {
    host: process.env.PROD_DB_HOST,
    user: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
  },
};

const connection = mysql.createConnection(dbConfig[process.env.NODE_ENV || 'development']);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the Local database');
});

module.exports = connection;
