
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


// for whatever reason executing the queries 'source db/schema.sql' and 'source db/seeds.sql' is not working, therefore
db.query('SELECT * from entire_tables', (err, results) => {

    if(err) console.log(err)

    console.log(results)

    console.table(results)
    
})









let loopRunning = true;

let departmentArray = []
let employeeArray = []
let roleArray = []








const runApplication = async function() {

    while(loopRunning) {

        const p = await inquirer.createPromptModule([
            {
                type: 'list',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
                message: "What would you like to do",
                name: 'option'
            },
        ])

        if(p.option === 'View All Employees') {









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
                    choices: [...roleArray],
                    message: "What is the employee's role?",
                    name: 'employeeRole'
                },
                {
                    type: 'list',
                    choices: [...employeeArray],
                    message: "Who is the employee's manager?",
                    name: 'employeeManager'
                },
            ])








        } else if(p.option === 'Update Employee Role') {
            
            








        } else if(p.option === 'View All Roles') {
            
            let updateRolePromiseObject = await inquirer.prompt([
                {
                    type: 'list',
                    choices: [employeeArray],
                    message: "Which employee's role do you want to update?",
                    name: 'roleUpdateFullName'
                },
                {
                    type: 'list',
                    choices: [roleArray],
                    message: "Which role do you want to assign the selected employee?",
                    name: 'newRole'
                },
            ])







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
                    type: 'input',
                    message: "What department does the role belong to?",
                    name: 'roleDepartment'
                },
            ])

            // add role based off this







        } else if(p.option === 'View All Departments') {
            







        } else if(p.option === 'Add Department') {
            
            let departmentPromiseObject = await inquirer.prompt([
                {
                    type: 'input',
                    message: "What is the name of the department?",
                    name: 'departmentName' 
                },
            ])

            // add department






        }





    }



}