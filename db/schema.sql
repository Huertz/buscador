-- db created
DROP DATABASE IF EXISTS employee_trackerdb;
CREATE DATABASE employee_trackerdb;

USE employee_trackerdb;

--  created department table
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

-- created role table
CREATE TABLE role(
    id INT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- created employee table 
CREATE TABLE employee(
    id INT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    manager_id INT, 
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);
