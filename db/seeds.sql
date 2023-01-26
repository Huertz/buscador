-- department seed
INSERT INTO department(name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

--  role seed
INSERT INTO role (title, salary department)
VALUES ("Lead Engineer", 150000, 2);
       ("Legal Team Lead", 250000, 4);
       ("Accountant", 125000, 3);
       ("Sales Lead", 100000, 1);
       ("Salesperson", 80000, 1);
       ("Software Engineer", 120000, 2);
       ("Lawyer", 190000, 4);

-- employee seed
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Lionel", "Messi", null, 1);
       ("Cristiano", "Ronaldo", null, 2);
       ("Sergio", "Ramos", null, 3);
       ("Andres", "Iniesta", 1, 4);
       ("Andriy", "Shevchenko", 4, 5);
       ("Antoine", "Griezmann", 1, 6);
       ("Eden", "Hazard", 2, 7);
