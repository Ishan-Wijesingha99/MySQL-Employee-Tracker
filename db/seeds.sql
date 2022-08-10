
INSERT INTO employees (id, first_name, last_name, title, department, salary, manager)
VALUES 
    (1, 'John', 'Doe', 'Sales Lead', 'Sales', 100000, null),
    (2, 'Mike', 'Chan', 'Salesperson', 'Sales', 80000, 'John Doe'),
    (3, 'Ashley', 'Rodriquez', 'Lead Engineer', 'Engineering', 150000, null),
    (4, 'Kevin', 'Tupik', 'Software Engineer', 'Engineering', 120000, 'Ashley Rodriguez'),
    (5, 'Kunal', 'Singh', 'Account Manager', 'Finance', 160000, null),
    (6, 'Malia', 'Brown', 'Accountant', 'Finance', 125000, 'Kunal Singh'),
    (7, 'Sarah', 'Lourd', 'Legal Team Lead', 'Legal', 250000, null),
    (8, 'Tom', 'Allen', 'Lawyer', 'Legal', 190000, 'Sarah Lourd');



INSERT INTO departments (id, department_name)
VALUES 
    (1, 'Sales'),
    (2, 'Engineering'),
    (3, 'Finance'),
    (4, 'Legal');



INSERT INTO roles (id, title, department_name, salary)
VALUES 
    (1, 'Sales Lead', 'Sales', 100000),
    (2, 'Salesperson', 'Sales', 80000),
    (3, 'Lead Engineer', 'Engineering', 150000),
    (4, 'Software Engineer', 'Engineering', 120000),
    (5, 'Account Manager', 'Finance', 160000),
    (6, 'Accountant', 'Finance', 125000),
    (7, 'Legal Team Lead', 'Legal', 250000),
    (8, 'Lawyer', 'Legal', 190000);


