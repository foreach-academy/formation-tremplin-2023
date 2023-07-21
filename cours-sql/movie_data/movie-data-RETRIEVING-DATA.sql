-- Nous avons vu la requête la plus simple de `SELECT` pour retourner les données d'une table

SELECT * FROM directors;

SELECT first_name FROM directors;

SELECT first_name, last_name, nationality FROM directors;

-- Récupérer les données avec une clause WHERE

SELECT * FROM movies
WHERE age_certificate = '15';

SELECT * FROM movies
WHERE age_certificate = '15' AND movie_lang = 'Chinese';

SELECT * FROM movies
WHERE age_certificate = '15' OR movie_lang = 'Chinese';

-- En utilisant les opérateurs logiques (>, >=, <, <=)

SELECT movie_name, movie_length FROM movies
WHERE movie_length < 120;

SELECT * FROM movies
WHERE release_date > '1999-12-31';

-- Challenge 1

-- 1. Sélectionnez les colonnes movie_name et release_date de tous les films.

SELECT movie_name, release_date FROM movies;

-- 2. Sélectionnez le prénoms et le nom de tous les réalisateurs américains.

SELECT first_name, last_name FROM directors
WHERE nationality = 'American';

-- 3. Sélectionnez tous les acteurs mâles nés après le 1er Janvier 1970.

SELECT * FROM actors
WHERE gender = 'M' AND date_of_birth > '1970-01-01';

-- 4. Sélectionnez le noms des films qui durent plus de 90min et dont la langue est l'anglais.

SELECT movie_name FROM movies
WHERE movie_length > 90 AND movie_lang = 'English';

-- Utilisation de IN et NOT IN

SELECT first_name, last_name FROM actors
WHERE first_name IN ('Bruce', 'John', 'Peter');

SELECT first_name, last_name FROM actors
WHERE first_name NOT IN ('Bruce', 'John', 'Peter');

SELECT actor_id, first_name, last_name FROM actors
WHERE actor_id IN (2, 3, 4, 5, 6, 8);

SELECT actor_id, first_name, last_name FROM actors
WHERE actor_id NOT IN (2, 3, 4, 5, 6, 8);

-- En utilisant LIKE avec % et _

-- Récupère le prénom des acteurs commençant par 'P'

SELECT * FROM actors
WHERE first_name LIKE 'P%';

-- Récupère le prénom des acteurs commençant exactement par 'Pe_'
-- _ est un joker

SELECT * FROM actors
WHERE first_name LIKE 'Pe_';

-- Récupère le prénom des acteurs se terminant par 'r'

SELECT * FROM actors
WHERE first_name LIKE '%r';

-- Récupère le prénom des acteurs qui contiennent un 'r'

SELECT * FROM actors
WHERE first_name LIKE '%r%';

SELECT * FROM actors
WHERE first_name LIKE '__rl__';

-- BETWEEN - Récupère les données qui sont entre 2 valeurs

SELECT movie_name, release_date FROM movies
WHERE release_date BETWEEN '1995-01-01' AND '1999-12-31';

SELECT movie_name, movie_length FROM movies
WHERE movie_length BETWEEN 90 AND 120;

-- Challenge 2

-- 1. Sélectionnez le noms et la langue de tous les films avec une langue anglaise, espagnole ou corréenne.

SELECT movie_name, movie_lang FROM movies
WHERE movie_lang IN ('English', 'Spanish', 'Korean');

-- 2. Sélectionnez le prénom et le nom des acteurs dont le prénom commence par 'M' et qui sont nés entre 01/01/1940 et 31/12/1969.

SELECT first_name, last_name FROM actors
WHERE first_name LIKE 'M%' 
AND date_of_birth BETWEEN '1940-01-01' AND '1969-12-31';

-- 3. Sélectionnez le prénom et le nom des réalisateurs avec une nationalité anglaise, française ou germaine nés entre 01/01/1950 et 31/12/1980.

SELECT first_name, last_name FROM directors
WHERE nationality IN ('British', 'French', 'German')
AND date_of_birth BETWEEN '1950-01-01' AND '1980-12-31';

-- Trie les résultats retournés

-- `ASC` du plus petit au plus grand - par défaut
-- `DESC` du plus grand au plus petit

SELECT first_name, last_name, date_of_birth FROM actors
ORDER BY first_name DESC;

-- Fonctionne avec les entiers

SELECT actor_id, first_name, last_name, date_of_birth FROM actors
ORDER BY actor_id;

-- Fonctionne aussi avec les dates - ASC -> de l'ancienne à la récente

SELECT actor_id, first_name, last_name, date_of_birth FROM actors
ORDER BY date_of_birth;

SELECT actor_id, first_name, last_name, date_of_birth FROM actors
WHERE gender = 'F'
ORDER BY date_of_birth;

-- Limite le nombre d'enregistrements retournés

SELECT * FROM movie_revenues
ORDER BY domestic_takings
LIMIT 3;

-- OFFSET - décalage

SELECT * FROM movie_revenues
ORDER BY revenue_id
LIMIT 5 OFFSET 5;

-- Valeurs distinctes

SELECT DISTINCT movie_lang FROM movies
ORDER BY movie_lang;

-- Combinaisons distinctes

SELECT DISTINCT movie_lang, age_certificate FROM movies
ORDER BY movie_lang;

-- Challenge 3

-- 1. Sélectionnez les réalisateurs américains ordonnés du plus vieux au plus jeune

SELECT * FROM directors
WHERE nationality = 'American'
ORDER BY date_of_birth;

-- 2. Sélectionnez les nationalités distinctes de la table directors

SELECT DISTINCT nationality FROM directors;

-- 3. Sélectionnez le prénom, le nom et la date de naissance des 10 plus jeunes actrices

SELECT first_name, last_name, date_of_birth FROM actors
WHERE gender = 'F'
ORDER BY date_of_birth DESC
LIMIT 10;

-- Faire avec les valeurs NULL

SELECT * FROM  actors
WHERE date_of_birth IS NULL;

SELECT * FROM  actors
WHERE date_of_birth IS NOT NULL;

-- On précise une clause WHERE car la liste commence par les valeurs NULL

SELECT * FROM movie_revenues
WHERE domestic_takings IS NOT NULL
ORDER BY domestic_takings DESC;

-- Défini un alias de nom de colonne

-- La colonne n'est renommée que dans le résultat

SELECT last_name AS surname FROM directors;

-- On doit quand même utiliser le nom original de la colonne dans la clause sinon on a une erreur

SELECT last_name AS surname FROM directors
WHERE last_name = 'Anderson';

-- Concatène

SELECT 'string1' || ' ' || 'string2' AS new_string;

-- Concatène les valeurs des colonnes

-- WS - With Separator

SELECT CONCAT_WS(' ', first_name, last_name, date_of_birth) AS full_name FROM actors;

-- Challenge 4

-- 1. Sélectionnez le top 3 des films avec les recettes internationales (international takings) les plus élévés

SELECT * FROM movie_revenues
WHERE international_takings IS NOT NULL
ORDER BY international_takings DESC
LIMIT 3;

-- 2. Concaténez le prénom et le nom des réalisateurs, séparés par un espace, et appelez la colonne "full_name"

SELECT CONCAT_WS(' ', first_name, last_name) AS full_name FROM directors;

-- 3. Sélectionnez les acteurs avec un prénom ou une date de naissance manquants

SELECT * FROM actors
WHERE first_name IS NULL OR date_of_birth IS NULL;