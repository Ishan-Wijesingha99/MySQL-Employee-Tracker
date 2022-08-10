
const inquirer = require('inquirer')
const mysql = require('mysql2')
const cTable = require('console.table')



// set up mysql connection
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'mysqlishan99',
      database: 'employee_tracker_db'
    },

    console.log(`Connected to the database`)
);



let loopRunning = true;

let departmentsArray = []
let employeesArray = []
let rolesArray = []

let allTitles = []
let allEmployees = []
let allDepartments = []


const runApplication = async function() {

    while(loopRunning) {

        // get new array of departments at the start of every loop
        db.query('SELECT department_name FROM departments', (err, results) => {

            departmentsArray = results

            departmentsArray.forEach(function(object) {
                allDepartments.push(object.department_name)
            })
        })

        // get new array of roles at the start of every loop
        db.query('SELECT title, department_name, salary FROM roles', (err, results) => {

            rolesArray = results

            rolesArray.forEach(function(element) {
                allTitles.push(element.title)
            })
        })

        // get new array of employees at the start of every loop
        db.query('SELECT first_name, last_name, title, manager FROM employees', (err, results) => {

            employeesArray = results

            employeesArray.forEach(function(element) {
                const firstNameString = element.first_name
                const lastNameString = element.last_name

                allEmployees.push(`${firstNameString} ${lastNameString}`)
            })

        })


        
        const p = await inquirer.prompt([
            {
                type: 'list',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
                message: "What would you like to do",
                name: 'option'
            },
        ])



        if(p.option === 'View All Employees') {

            db.query('SELECT * FROM employees', (err, results) => {

                if(err) console.log(err)
            
                console.log('\n\n\n')
            
                console.table(results)

                console.log('\n\n\n\n\n\n\n')
                
            })

        } else if(p.option === 'Add Employee') {

            let employeePromiseObject = await inquirer.prompt([
                {
                    type: 'input',
                    message: "What is the employee's first name?",
                    name: 'employeeFirstName'
                },
                {
                    type: 'input',
                    message: "What is the employee's last name?",
                    name: 'employeeLastName'
                },
                {
                    type: 'list',
                    choices: allTitles,
                    message: "What is the employee's role?",
                    name: 'employeeRole'
                },
                {
                    type: 'list',
                    choices: allEmployees,
                    message: "Who is the employee's manager?",
                    name: 'employeeManager'
                },
            ])

            // based off the role, you need to get a variable for department and salary
            let currentTitle;
            let currentDepartment;
            let currentSalary;

            rolesArray.forEach(function(element) {
                if(element.title === employeePromiseObject.employeeRole) {
                    currentTitle = element.title
                    currentDepartment = element.department_name
                    currentSalary = element.salary
                }
            })

            db.query(`INSERT INTO employees (first_name, last_name, title, department, salary, manager) VALUES ('${employeePromiseObject.employeeFirstName}', '${employeePromiseObject.employeeLastName}', '${currentTitle}', '${currentDepartment}', ${currentSalary}, '${employeePromiseObject.employeeManager}')`, (err, results) => {

                if(err) console.log(err)
            })    

        } else if(p.option === 'Update Employee Role') {
            
            let updateRolePromiseObject = await inquirer.prompt([
                {
                    type: 'list',
                    choices: [employeesArray],
                    message: "Which employee's role do you want to update?",
                    name: 'roleUpdateFullName'
                },
                {
                    type: 'list',
                    choices: [rolesArray],
                    message: "Which role do you want to assign the selected employee?",
                    name: 'newRole'
                },
            ])








        } else if(p.option === 'View All Roles') {
            
            db.query('SELECT * FROM roles', (err, results) => {

                if(err) console.log(err)

                console.log('\n\n\n')
            
                console.table(results)

                console.log('\n\n\n\n\n\n\n')
                
            })

        } else if(p.option === 'Add Role') {
            
            let rolePromiseObject = await inquirer.prompt([
                {
                    type: 'input',
                    message: "What is the name of the role?",
                    name: 'roleName'
                },
                {
                    type: 'input',
                    message: "What is the salary of the role?",
                    name: 'roleSalary'
                },
                {
                    type: 'list',
                    choices: allDepartments,
                    message: "What department does the role belong to?",
                    name: 'roleDepartment'
                },
            ])

            db.query(`INSERT INTO roles (title, department_name, salary) VALUES ('${rolePromiseObject.roleName}', '${rolePromiseObject.roleDepartment}', '${rolePromiseObject.roleSalary}')`, (err, results) => {

                if(err) console.log(err)
            })
            
        } else if(p.option === 'View All Departments') {
            
            db.query('SELECT * FROM departments', (err, results) => {

                if(err) console.log(err)

                console.log('\n\n\n')
            
                console.table(results)

                console.log('\n\n\n\n\n\n\n')
                
            })

        } else if(p.option === 'Add Department') {
            
            let departmentPromiseObject = await inquirer.prompt([
                {
                    type: 'input',
                    message: "What is the name of the department?",
                    name: 'departmentName' 
                },
            ])

            db.query(`INSERT INTO departments (department_name) VALUES ('${departmentPromiseObject.departmentName}')`, (err, results) => {

                if(err) console.log(err)
            })

        }

    }

}


runApplication()