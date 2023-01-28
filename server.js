// dependencies
const inquirer = require('inquirer');
const mysql = require('mysql');
require('console.table');
const main = require('asciiart-logo');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Huerta95",
  database: "employee_trackerdb"
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

// view all employees
function viewAllEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      initPrompt()
  })
}

// view roles
function viewAllRoles() {
  connection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;", 
  function(err, res) {
  if (err) throw err
  console.table(res)
  initPrompt()
  })
}

// view all employees by department
function viewAllDepartments() {
  connection.query("SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;", 
  function(err, res) {
    if (err) throw err
    console.table(res)
    initPrompt()
  })
}

// query select role 
var roleArr = [];
function selectRole() {
  connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw err
    for (var i = 0; i < res.length; i++) {
      roleArr.push(res[i].title);
    }

  })
  return roleArr;
}
// query select manager
var managersArr = [];
function selectManager() {
  connection.query("SELECT first_name, last_name FROM employee WHERE manager_id IS NULL", function(err, res) {
    if (err) throw err
    for (var i = 0; i < res.length; i++) {
      managersArr.push(res[i].first_name);
    }

  })
  return managersArr;
}

// add employee
function addEmployee() { 
  inquirer.prompt([
      {
        name: "firstname",
        type: "input",
        message: "Enter first name "
      },
      {
        name: "lastname",
        type: "input",
        message: "Enter last name "
      },
      {
        name: "role",
        type: "list",
        message: "What is their role? ",
        choices: selectRole()
      },
      {
          name: "choice",
          type: "rawlist",
          message: "Managers name?",
          choices: selectManager()
      }
  ]).then(function (val) {
    var roleId = selectRole().indexOf(val.role) + 1
    var managerId = selectManager().indexOf(val.choice) + 1
    connection.query("INSERT INTO employee SET ?", 
    {
        first_name: val.firstName,
        last_name: val.lastName,
        manager_id: managerId,
        role_id: roleId
        
    }, function(err){
        if (err) throw err
        console.table(val)
        startPrompt()
    })

})
}

// update employee 
// function updateEmployee() {
//   connection.query("SELECT employee.last_name, role.title FROM employee JOIN role ON employee.role_id = role.id;", function(err, res) {
//    if (err) throw err
//    console.log(res)
//   inquirer.prompt([
//         {
//           name: "lastName",
//         type: "rawlist",
//         choices: function() {
//           var lastName = [];
//           for (var i = 0; i < res.length; i++) {
//             lastName.push(res[i].last_name);
//           }
//           return lastName;
//         },
//         message: "Employee last name? ",
//       },
//       {
//         name: "role",
//         type: "rawlist",
//         message: "Employee new title? ",
//         choices: selectRole()
//       },
//   ]).then(function(val) {
//     var roleId = selectRole().indexOf(val.role) + 1
//     connection.query("UPDATE employee SET WHERE ?", 
//     {
//       last_name: val.lastName
       
//     }, 
//     {
//       role_id: roleId
       
//     }, 
//     function(err){
//         if (err) throw err
//         console.table(val)
//         startPrompt()
//     })

// });
// });

// }

// add department

function addDepartment() {
  inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Add a department'
    }
  ])
}

