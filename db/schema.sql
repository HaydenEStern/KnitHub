CREATE DATABASE patterns_db;

USE patterns_db;

CREATE TABLE patterns
(
	id int NOT NULL AUTO_INCREMENT,
	pattern_name varchar(255) NOT NULL,
	chart_url varchar(255),
	user_id varchar(255) NOT NULL,
	garment_type varchar(255) NOT NULL,
	cables boolean NOT NULL,
	lace boolean NOT NULL,
	colorwork boolean NOT NULL,
	date timestamp NOT NULL,
	PRIMARY KEY (id)
);