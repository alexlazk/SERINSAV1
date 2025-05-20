require('dotenv').config();

module.exports = {
  devServer: {
    apiSecret: process.env.CUBEJS_API_SECRET || 'secret',
  },
  driver: 'mssql',
  dbHost: process.env.CUBEJS_DB_HOST,
  dbName: process.env.CUBEJS_DB_NAME,
  dbUser: process.env.CUBEJS_DB_USER,
  dbPass: process.env.CUBEJS_DB_PASS,
  dbPort: process.env.CUBEJS_DB_PORT ? parseInt(process.env.CUBEJS_DB_PORT, 10) : 1433,
};
