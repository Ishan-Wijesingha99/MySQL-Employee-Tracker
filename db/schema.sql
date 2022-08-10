DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE employees (
    id INT NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    title VARCHAR(40) NOT NULL,
    department VARCHAR(40) NOT NULL,
    salary INT NOT NULL,
    manager VARCHAR(40)
);

CREATE TABLE departments (
    id INT NOT NULL,
    department_name VARCHAR(40) NOT NULL
);


CREATE TABLE roles (
    id INT NOT NULL,
    title VARCHAR(40) NOT NULL,
    department_name VARCHAR(40) NOT NULL,
    salary INT NOT NULL
);


