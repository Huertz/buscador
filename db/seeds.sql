INSERT INTO departments (department_name)
VALUES ('Engeneering');
       ('Finance');
       ('Legal');
       ('Sales');

INSERT INTO roles (title, department_id, salary)
VALUES ('Lead Sales', 4, 100000),
       ('Salesperson', 4, 80000),
       ('Lead Engineer', 1, 150000),
       ('Software Engineer', 1, 120000),
       ('Account Manager', 2, 160000),
       ('Accountant', 2, 125000),
       ('Legal Team Lead', 3, 250000),
       ('Lawyer', 3, 190000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Jose', 'Huerta', 1, NULL),
       ('Alfredo', 'Huerta', 2, 1),
       ('Jose', 'Valdes', 2, NULL),
       ('Alfredo', 'Valdes', 2, 1),
       ('Santos', 'Huerta', 2, NULL),
       ('Martha', 'Huerta', 2, 1),
       ('Erick', 'Huerta', 2, NULL);
       
     
