const express = require('express');
const app = express();
const { people } = require('./data.js');

app.use(express.static('./methods-public'));
// analyse les donnnées envoyées par le formulaire HTML
app.use(express.urlencoded({ extended: false }));
// analyse les donnnées envoyées par le JS
app.use(express.json());

//* GET
app.get('/api/people', (_req, res) => {
  res.status(200).json({ data: people });
});

//* POST - 2 façons
//* 1. Envoie des données via un formulaire HTML
app.post('/login', (req, res) => {
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Bienvenue ${name}`);
  }

  res.status(401).send('Veuillez vous authentifier');
});

//* 2. Envoie des données via le JS
app.post('/api/people', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Veuillez fournir un nom' });
  }

  res.status(201).json({ success: true, person: name });
});

//* PUT
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res.status(404).json({ msg: `Pas de personne avec l'id ${id}` });
  }

  person.name = name;

  res.status(200).send({ msg: 'Nom modifié avec succès !', data: person });
});

//* DELETE
app.delete('/api/people/:id', (req, res) => {
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res.status(404).json({ msg: `Pas de personne avec l'id ${id}` });
  }

  const filteredPeople = people.filter((person) => person.id !== Number(id));

  res.status(200).send({ msg: 'Personne supprimée', data: filteredPeople });
});

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
