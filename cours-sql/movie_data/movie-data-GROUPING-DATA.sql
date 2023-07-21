-- Regroupement de données

-- retourne le nombre de films par langue

SELECT movie_lang, COUNT(movie_lang) FROM movies
GROUP BY movie_lang;

-- retourne la longueur moyenne des films par langue

SELECT movie_lang, AVG(movie_length) FROM movies
GROUP BY movie_lang;

-- retourne la longeur moyenne des films pour chaque combinaison distincte

SELECT movie_lang, age_certificate, AVG(movie_length) FROM movies
GROUP BY movie_lang, age_certificate;

SELECT movie_lang, age_certificate, AVG(movie_length) FROM movies
WHERE movie_length > 120
GROUP BY movie_lang, age_certificate;

SELECT movie_lang, MIN(movie_length), MAX(movie_length) FROM movies
WHERE age_certificate = '15'
GROUP BY movie_lang;

-- clause HAVING

SELECT movie_lang, COUNT(movie_lang) FROM movies
GROUP BY movie_lang
HAVING COUNT(movie_lang) > 1;

SELECT movie_lang, COUNT(movie_lang) FROM movies
WHERE movie_length > 120
GROUP BY movie_lang
HAVING COUNT(movie_lang) > 1;

-- Challenge 2

-- 1. Combien de réalisateurs y a-til par nationalité ?

SELECT nationality, COUNT(nationality) FROM directors
GROUP BY nationality;

-- 2. Quelle est la somme total des longueurs de films pour chaque combinaison de langues et d'âge (certificate) ?

SELECT movie_lang, age_certificate, SUM(movie_length) FROM movies
GROUP BY movie_lang, age_certificate;

-- 3. Retouner les langages de films qui ont une longueur de films totale supérieurs à 500 minutes.

SELECT movie_lang, SUM(movie_length) FROM movies
GROUP BY movie_lang
HAVING SUM(movie_length) > 500;
