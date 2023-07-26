# Exercices SQL

1. Sélectionnez le Prénom, Nom et GPA des étudiants avec un GPA de 4.0

```sql
SELECT first_name, last_name, gpa FROM students WHERE gpa = 4.0;
```

2. Sélectionnez tous les cours dont la première lettre est avant le 'D' dans l'alphabet

```sql
SELECT course FROM courses WHERE course < 'D';
```

3. Sélectionnez le prénom, nom et GPA des étudiants dont le nom commence par un 'R' ou les lettres d'après, et ont un GPA supérieur à 3.8 ou inférieur à 2.0

```sql
SELECT first_name, last_name, gpa FROM students WHERE last_name >= 'R' AND (gpa > 3.8 OR gpa < 2.0);
```

4. Sélectionnez le nom des étudiants dont le nom contient "sa" insensible à la casse ou un "r" comme avant dernière lettre.

```sql
SELECT last_name FROM students WHERE last_name ILIKE '%sa%' OR last_name ILIKE '%r_';
```

5. Sélectionnez le prénom, nom et GPA des étudiants qui n'ont pas sélectionnés une majeure et dont le prénom commence par un 'D' ou dont le GPA est supérieur à 3.0

```sql
SELECT first_name, last_name, gpa FROM students WHERE major_id IS NULL AND (first_name LIKE 'D%' OR gpa > 3.0);
```

6. Sélectionnez le noms des cinq premiers cours, dans l'ordre alphabétique inversé, qui ont un 'e' en seconde lettre ou qui se terminent par un 's'.

```sql
SELECT course FROM courses WHERE course LIKE '_e%' OR course LIKE '%s' ORDER BY course LIMIT 5;
```

7. Sélectionnez le GPA moyen de tous les étudiants arrondi à deux décimales.

```sql
SELECT ROUND(AVG(gpa), 2) FROM students;
```

8. Sélectionnez l'ID des majeures, le nombre total d'étudiants dans une colonne nommée "number_of_students" et le GPA moyen arrondi à deux décimales dans une colonne nommée "average_gpa", pour chaque ID de majeure dans le tableau des étudiants ayant un nombre d'étudiants supérieur à 1.

```sql
SELECT major_id, COUNT(student_id) AS number_of_students, ROUND(AVG(gpa), 2) AS average_gpa
FROM students
GROUP BY major_id
HAVING COUNT(student_id) > 1;
```

9. Sélectionnez la liste des majeures, par ordre alphabétique, qu'aucun étudiant ne suit ou a un étudiant dont le prénom contient un "ma" insensible à la casse :

Les table `majors` et `students` sont liées à la clef étrangère `major_id`. Si nous voulons voir le nom d'une majeure qu'un étudiant suit, nous devons `JOIN` les deux tables en une seule

Exemple pour voir le nom de la majeur qu'un étudiant suit :

```sql
SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;
```

Ça affiche toutes les colonnes des deux tables, les deux colonnes `major_id` sont les mêmes dans chaque ligne pour celles qui l'ont. Nous pouvons voir qu'il y a des étudiants sans majeure et d'autres sans aucun étudiant. Le `FULL JOIN` que nous avons utilisé inclura toutes les lignes des deux tables, qu'elles aient ou non une ligne utilisant cette clef étrangère dans l'autre. À partir de là, nous pouvons utiliser l'une des méthodes précédentes pour affiner, grouper, ordonner, etc. Utilisons un `LEFT JOIN` pour joindre les deux mêmes tables de la même manière.

```sql
SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;
```

Il y a quelques lignes de moins que la dernière requête. Dans le `LEFT JOIN` que nous avons utilisé, la table des `students` était la table de gauche puisqu'elle se trouvait du côté gauche du `JOIN`. `majors` était la bonne table. Un `LEFT JOIN` obtient toutes les lignes de la table de gauche, mais uniquement les lignes de la table de droite qui sont liées à celle de gauche. En regardant les données, nous pouvons voir que chaque étudiant a été renvoyé, mais pas les majeures sans étudiants. Joignons les deux mêmes tables avec un `RIGHT JOIN` cette fois.

```sql
SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;
```

La jointure de droite affichait toutes les lignes de la table de droite (`majors`), mais uniquement les lignes de la table de gauche (`students`) s'ils avaient une majeure. Il y a un autre type que vous devriez connaître. Joignez les deux tables avec un `INNER JOIN`.

```sql
SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;
```

L'`INNER JOIN` n'a renvoyé les étudiants que s'ils ont une majeure et des majeures qui ont un étudiant. En d'autres termes, il ne renvoyait que des lignes si elles avaient une valeur dans la colonne de la clef étrangère (`major_id`) de la table opposée. Vous devriez maintenant en savoir un peu plus sur les quatre principaux types de jointures. Essayons d'utiliser un `LEFT JOIN ` pour afficher toutes les majeures, mais uniquement les étudiants qui ont une majeure.

<details>
  <summary>Solution</summary>

```sql
SELECT * FROM majors LEFT JOIN students ON majors.major_id = students.major_id;
```

</details>
<br />

10. Écrire la requête de la question 9

```sql
SELECT major FROM majors FULL JOIN students USING(major_id) WHERE student_id IS NULL OR first_name ILIKE '%ma%' ORDER BY major;
```

11. Sélectionnez la liste des cours distincts, par ordre alphabétique inversé, qu'aucun étudiant ne suit ou qu'"Obie Hilpert" suit.

Il existe un mot-clef de raccourci, `USING` pour joindre des tables si la colonne de la clef étrangère porte le même nom dans les deux tables.

On peut aussi utliser `AS` pour renommer le nom des tables.

```sql
SELECT DISTINCT(course) FROM courses
FULL JOIN majors_courses USING(course_id)
FULL JOIN majors USING(major_id)
FULL JOIN students USING(major_id)
WHERE student_id IS NULL OR (first_name = 'Obie' AND last_name = 'Hilpert')
ORDER BY course DESC;
```

12. Sélectionnez la liste des cours, par ordre alphabétique, avec un seul étudiant inscrit.

```sql
SELECT course FROM courses
JOIN majors_courses USING(course_id)
JOIN majors USING(major_id)
JOIN students USING(major_id)
GROUP BY course
HAVING COUNT(student_id) = 1
ORDER BY course;
```
