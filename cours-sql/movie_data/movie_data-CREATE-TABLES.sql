-- Database: movie_data

DROP DATABASE IF EXISTS movie_data;

CREATE DATABASE movie_data
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_France.1252'
    LC_CTYPE = 'French_France.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
-- Crée une table réalisateurs

CREATE TABLE directors(
	director_id SERIAL PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30) NOT NULL,
	date_of_birth DATE,
	nationality VARCHAR(20)
);

-- Sélectionne toutes les colonnes de la tables réalisateurs

SELECT * FROM directors;

-- Crée la table acteurs

CREATE TABLE actors(
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	gender CHAR(1),
	date_of_birth DATE
);

SELECT * FROM actors;

-- Crée une table films (avec une clef étrangère)

CREATE TABLE movies(
	movie_id SERIAL PRIMARY KEY,
	movie_name VARCHAR(50) NOT NULL,
	movie_length INT,
	movie_lang VARCHAR(20),
	release_date DATE,
	age_certificate VARCHAR(5),
	director_id INT REFERENCES directors(director_id)
);

-- Crée une table recettes de films (avec clef étrangère)

CREATE TABLE movie_revenues(
	revenue_id SERIAL PRIMARY KEY,
	movie_id INT REFERENCES movies(movie_id),
	domestic_takings NUMERIC(6,2),
	international_takings NUMERIC(6,2)
);

-- Crée la table films-acteurs

CREATE TABLE movies_actors(
	movie_id INT REFERENCES movies(movie_id),
	actor_id INT REFERENCES actors(actor_id),
	PRIMARY KEY(movie_id, actor_id)
);
