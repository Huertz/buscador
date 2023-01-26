// dependencies
const inquire = require('inquirer');
const mysql = require('mysql');
require('console.table');
const main = require('asciiart-logo');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username
      user: 'root',
      // TODO: Add your MySQL password here
      password: 'Huerta95',
      database: 'employee_trackerdb'
    },
    console.log(`Connected to the employee_trackerdb database.`)
  );

  // connection
connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + connection.threadId)
    initPrompt();
});

// employee manager logo
init();
function init() {
  const mainText = main({ name: "Employee Manager"}).render();

  console.log(mainText);
}

// init prompt
function initPrompt() {
    inquirer.prompt([
    {
    type: "list",
    message: "What would you like to do?",
    name: "choice",
    choices: [
              "View All Employees?", 
              "View All Employee's By Roles?",
              "View all Emplyees By Deparments", 
              "Update Employee",
              "Add Employee?",
              "Add Role?",
              "Add Department?"
            ]
    }
]).then(function(val) {
    switch (val.choice) {
        case "View All Employees?":
          viewAllEmployees();
        break;

      case "View All Employee's By Roles?":
          viewAllRoles();
        break;
      case "View All Emplyees By Deparments":
          viewAllDepartments();
        break;
      
      case "Add Employee?":
            addEmployee();
          break;

      case "Update Employee":
            updateEmployee();
          break;
  
        case "Add Role?":
            addRole();
          break;
  
        case "Add Department?":
            addDepartment();
          break;

        }
})
}
