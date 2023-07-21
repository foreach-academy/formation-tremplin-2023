-- Insère un réalisateur (sans films)

--INSERT INTO directors(first_name, last_name, date_of_birth, nationality)
--VALUES ('Christopher', 'Nolan', '1970-07-30', 'British');

SELECT * FROM directors;
SELECT * FROM movies;

-- Joindre des tables

-- INNER JOIN

-- L'ordre des tables n'a pas d'importance avec INNER JOIN.

-- On ne voit pas Nolan car il n'y a pas de correspondance

SELECT directors.director_id, directors.first_name, directors.last_name, movies.movie_name
FROM directors
INNER JOIN movies ON directors.director_id = movies.director_id;


-- On peut aussi utiliser des clauses

SELECT directors.director_id, directors.first_name, directors.last_name, movies.movie_name
FROM directors
INNER JOIN movies ON directors.director_id = movies.director_id
WHERE movies.movie_lang = 'Japanese'
ORDER BY movies.movie_length;

-- Raccourci

SELECT d.director_id, d.first_name, d.last_name, mo.movie_name
FROM directors d
JOIN movies mo ON mo.director_id = d.director_id
WHERE mo.movie_lang = 'Japanese'
ORDER BY mo.movie_length;

-- USING - Uniquement lorsque les colonnes qui se rejoignent ont le même nom pour les clefs primaires et étrangères

SELECT mo.movie_name, mr.domestic_takings FROM movies mo
JOIN movie_revenues mr USING(movie_id);

SELECT mo.movie_name, mr.domestic_takings FROM movies mo
JOIN movie_revenues mr USING(movie_id)
WHERE mo.age_certificate IN ('12', '15', '18')
ORDER BY mr.domestic_takings DESC;

-- Challenge

-- 1. Selectionnez le prénoms et nom des réalisateurs, le noms des films et leur date de sortie pour tous les films chinois, coréens et japonais.

SELECT d.first_name, d.last_name, mo.movie_name, mo.release_date
FROM movies mo
JOIN directors d USING(director_id)
WHERE mo.movie_lang IN ('Chinese', 'Korean', 'Japanese');

-- 2. Sélectionnez le noms de films, date de sorties et recettes internationales de tous les films anglais.

SELECT mo.movie_name, mo.release_date, mr.international_takings
FROM movies mo
JOIN movie_revenues mr USING(movie_id)
WHERE mo.movie_lang = 'English';

-- 3. Sélectionnez le noms de films, recettes nationales et recettes internationales 
-- pour tous les films dont les recettes nationales ou les recettes internationales sont manquantes et classer les résultats par nom de film.

SELECT mo.movie_name, mr.domestic_takings, mr.international_takings
FROM movies mo
JOIN movie_revenues mr USING(movie_id)
WHERE mr.domestic_takings IS NULL OR mr.international_takings IS NULL
ORDER BY mo.movie_name;

-- LEFT JOIN

-- Si on regarde tout à la fin, Nolan n'a pas de films

SELECT d.director_id, d.first_name, d.last_name, mo.movie_name
FROM directors d 
LEFT JOIN movies mo USING(director_id);

-- Si on inverse les tables, on verra tous les films mais seulement les réalisateurs qui correspondent (donc, pas Nolan)

SELECT d.director_id, d.first_name, d.last_name, mo.movie_name 
FROM movies mo
LEFT JOIN directors d USING (director_id);

-- RIGHT JOIN

-- Retourne tous les résultat de la table 2 et seulement ceux qui correspondent de la table 1

SELECT d.director_id, d.first_name, d.last_name, mo.movie_name 
FROM directors d 
RIGHT JOIN movies mo USING (director_id);

SELECT d.director_id, d.first_name, d.last_name, mo.movie_name 
FROM  movies mo
RIGHT JOIN directors d USING (director_id);

-- FULL JOIN

-- Retourne toutes les données des tables.

SELECT d.director_id, d.first_name, d.last_name, mo.movie_name 
FROM directors d 
FULL JOIN movies mo USING (director_id);

-- Challenge

-- 1. Utilisez un LEFT JOIN pour sélectionner le prénoms et nom de tous les réalisateurs anglais ainsi que le nom et certifcat d'âge des films.

SELECT d.first_name, d.last_name, mo.movie_name, mo.age_certificate
FROM directors d
LEFT JOIN movies mo USING(director_id)
WHERE d.nationality = 'British';

-- 2. Comptez le nombre de films de chaque réalisateurs.

SELECT d.first_name, d.last_name, COUNT(mo.movie_id)
FROM directors d
LEFT JOIN movies mo USING (director_id)
GROUP BY d.first_name, d.last_name;

-- Joindre plusieurs tables

SELECT d.first_name, d.last_name, mo.movie_name, mr.domestic_takings, mr.international_takings
FROM directors d
JOIN movies mo USING(director_id)
JOIN movie_revenues mr USING (movie_id);

SELECT ac.first_name, ac.last_name, mo.movie_name
FROM actors ac
JOIN movies_actors USING(actor_id)
JOIN movies mo USING(movie_id);

-- Jointure avec les 5 tables

SELECT d.first_name, d.last_name, mo.movie_name, ac.first_name, ac.last_name, mr.domestic_takings, mr.international_takings
FROM directors d
JOIN movies mo USING (director_id)
JOIN movies_actors USING (movie_id)
JOIN actors ac USING (actor_id)
JOIN movie_revenues mr USING (movie_id);

-- Challenge

-- 1. Sélectionnez le prénom et nom de tous les acteurs qui ont joués dans les films de Wes Anderson.

SELECT ac.first_name, ac.last_name FROM actors ac
JOIN movies_actors USING (actor_id)
JOIN movies USING (movie_id)
JOIN directors d USING (director_id)
WHERE d.first_name = 'Wes' AND d.last_name = 'Anderson';

-- 2. Quel réalisateur a le plus de recettes nationales ?

SELECT d.first_name, d.last_name, SUM(mr.domestic_takings) AS total_dom_takings FROM movie_revenues mr
JOIN movies USING (movie_id)
JOIN directors d USING (director_id)
WHERE mr.domestic_takings IS NOT NULL
GROUP BY d.first_name, d.last_name
ORDER BY total_dom_takings DESC
LIMIT 1;

-- UNION

-- Regroupe les types de données compatibles dans une même colonne et enlève les valeurs dupliquées.

-- - On doit sélectionner le même nombre de colonnes.
-- - Les colonnes doivent avoir des types de données compatibles entre elles

SELECT first_name, last_name FROM directors
UNION
SELECT first_name, last_name FROM actors;

SELECT first_name, last_name FROM directors
WHERE nationality = 'American'
UNION
SELECT first_name, last_name FROM actors
WHERE gender= 'F'
ORDER by first_name;

-- UNION ALL

-- Même principe que UNION mais retourne aussi les valeurs dupliquées.

SELECT first_name FROM directors
UNION ALL
SELECT first_name FROM actors
ORDER BY first_name;

-- Challenge

-- 1. Sélectionnez le prénom, le nom et la date de naissance des réalisateurs et acteurs. Ordonnez les résultats pas date de naissance.

SELECT first_name, last_name, date_of_birth FROM directors
UNION ALL
SELECT first_name, last_name, date_of_birth FROM actors
ORDER BY date_of_birth;

-- 2. Sélectionnez le prénom et le nom de tous les réalistateurs et acteur nés dans les années 1960. Ordonnez les résultats par nom.

SELECT first_name, last_name FROM directors
WHERE date_of_birth BETWEEN '1960-01-01' AND '1969-12-31'
UNION ALL
SELECT first_name, last_name FROM actors
WHERE date_of_birth BETWEEN '1960-01-01' AND '1969-12-31'
ORDER BY last_name;

-- EXCEPTION

-- Retourne seulement les lignes de la table 1 qui sont différentes de la table 2.

SELECT first_name FROM directors
EXCEPT
SELECT first_name FROM actors
ORDER BY first_name;

SELECT first_name FROM directors
WHERE nationality = 'American'
EXCEPT
SELECT first_name FROM actors
ORDER BY first_name;

-- INTERSECTION

-- Retourne seulement les lignes qui sont communes aux colonnes des tables sélectionnées.

SELECT first_name FROM directors
INTERSECT
SELECT first_name FROM actors
ORDER BY first_name;

SELECT first_name FROM directors
WHERE nationality = 'American' 
INTERSECT
SELECT first_name FROM actors
ORDER BY first_name;

-- Challenge

-- 1. Croisez les colonnes prénom, nom et date de naissance des tables réalisateurs et acteurs.

SELECT first_name, last_name, date_of_birth FROM directors
INTERSECT
SELECT first_name, last_name, date_of_birth FROM actors;

-- 2. Récupérez les prénoms des acteurs masculins, sauf s'ils portent le même prénom que des réalisateurs britanniques.

SELECT first_name FROM actors
WHERE gender = 'M'
EXCEPT
SELECT first_name FROM directors
WHERE nationality = 'British';
