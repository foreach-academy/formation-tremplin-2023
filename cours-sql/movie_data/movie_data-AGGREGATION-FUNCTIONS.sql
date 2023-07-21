-- Fonctions d'agrégation

-- COUNT

-- retourne le nom de ligne de données dans la table

SELECT COUNT(*) FROM movie_revenues;

-- le résultat est différent car COUNT ne compte pas les valeurs nulles

SELECT COUNT(international_takings) FROM movie_revenues;

SELECT COUNT(*) FROM movies
WHERE movie_lang = 'English';

-- SUM

SELECT SUM(domestic_takings) FROM movie_revenues;

SELECT SUM(domestic_takings) FROM movie_revenues
WHERE domestic_takings > 100.0;

SELECT SUM(movie_length) FROM movies
WHERE movie_lang = 'Chinese';

-- MIN et MAX

SELECT MAX(movie_length) FROM movies;

SELECT MIN(movie_length) FROM movies;

SELECT MIN(movie_length) FROM movies
WHERE movie_lang = 'Japanese';

-- fonctionne avec les dates

SELECT MIN(release_date) FROM movies;
SELECT MAX(release_date) FROM movies;

-- AVG (average)

SELECT AVG(movie_length) FROM movies;

SELECT AVG(movie_length) FROM movies
WHERE age_certificate = '18';

-- Challenge 1

-- Comptez le nombre d'acteurs nés après le 1er janvier 1970.

SELECT COUNT(*) FROM actors
WHERE date_of_birth >= '1970-01-01';

-- 2. Quelle est la plus grande et la plus petite recette nationale (domestic_takings) pour un film ?

SELECT MAX(domestic_takings) FROM movie_revenues;
SELECT MIN(domestic_takings) FROM movie_revenues;

-- 3. Quelle est la somme totale des longeurs de films pour les 15 ans ?

SELECT SUM(movie_length) FROM movies
WHERE age_certificate = '15';

-- 4. Combien de réalisateurs japonais y a-t-il dans la table réalisateurs ?

SELECT COUNT(*) FROM directors
WHERE nationality = 'Japanese';

-- 5. Quelle est la longueur moyenne des films Chinois ?

SELECT AVG(movie_length) FROm movies
WHERE movie_lang = 'Chinese';
