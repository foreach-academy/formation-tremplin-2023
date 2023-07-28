const express = require('express');
const app = express();

const messages = [
  {
    text: 'Bonjour !',
    user: 'John',
    added: Date.now()
  },
  {
    text: 'Hello World !',
    user: 'Susan',
    added: Date.now()
  }
];

app.use(express.json());

// récupère les messages
app.get('/', (_req, res) => {
  res.status(200).json({ messages: messages, count: messages.length });
});

// crée un message
app.post('/new', (req, res) => {
  const { messageText, messageUser } = req.body;

  if (!messageText || !messageUser) {
    return res.status(400).json({ msg: 'Veuillez remplir tous les champs' });
  }

  messages.push({ text: messageText, user: messageUser, added: Date.now() });

  res.status(201).send({ messages });
});

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
