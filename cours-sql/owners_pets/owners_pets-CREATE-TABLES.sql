-- Database: owners_pets

-- DROP DATABASE IF EXISTS owners_pets;

CREATE DATABASE owners_pets
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_France.1252'
    LC_CTYPE = 'French_France.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
-- Crée la table propriétaires

CREATE TABLE owners(
	owner_id SERIAL PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	city VARCHAR(30),
	state CHAR(2)
);

-- Crée la table animaux

CREATE TABLE pets(
	pet_id SERIAL PRIMARY KEY,
	species VARCHAR(30),
	fullname VARCHAR(30),
	age INT,
	owner_id INT REFERENCES owners(owner_id)
);

-- Ajoute une colonne email à la table propriétaire

ALTER TABLE owners
ADD COLUMN email VARCHAR(30) UNIQUE;

-- Modifie le type de la colonne last_name

ALTER TABLE owners
ALTER COLUMN last_name TYPE VARCHAR(50);