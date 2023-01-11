const mysql = require('mysql2');

const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Huerta95',
    database: 'employee_db',
  },
  console.log(`Connected to the employee_db database.`)
);

module.exports = connection;
