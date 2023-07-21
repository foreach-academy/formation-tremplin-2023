-- Insère des données dans la table propriétaires

INSERT INTO owners(first_name, last_name, city, state, email)
VALUES ('Samuel', 'Smith', 'Boston', 'MA', 'samsmith@gmail.com'),
('Emma', 'Johnson', 'Seattle', 'WA', 'emjohnson@gmail.com'),
('John', 'Oliver', 'New York', 'NY', 'johnoliver@gmail.com'),
('Olivia', 'Brown', 'San Fransisco', 'CA', 'oliviabrown@gmail.com'),
('Simon', 'Smith', 'Dallas', 'TX', 'sismith@gmail.com'),
(null, 'Maxwell', 'Dallas', null, 'lordmaxwell@gmail.com');

-- Insère des données dans la tables animaux

INSERT INTO pets(species, full_name, age, owner_id)
VALUES ('Dog', 'Rex', 6, 1),
('Rabbit', 'Fluffy', 2, 5),
('Cat', 'Tom', 8, 2),
('Mouse', 'Jerry', 2, 2),
('Dog', 'Biggles', 4, 1),
('Tortoise', 'Squirtle', 42, 3);

-- Modifie l'âge de Fluffy le lapin

UPDATE pets
SET age = 3
WHERE full_name = 'Fluffy';

-- Supprime Mr Maxwell de la table propriétaires

DELETE FROM owners
WHERE owner_id = 6;