CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
	id INT PRIMARY KEY   ,
	burger_name VARCHAR(50),
	devoured BOOLEAN default false,
	date TIMESTAMP,
	PRIMARY KEY (id)
	);
