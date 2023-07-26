const http = require('http');

//* HTTP - setup un serveur
// req - request -> Le client fait une requête au serveur (ex: une page)
// res - response -> Le serveur envoie une réponse
const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === '/') {
    res.end("Bienvenue sur ma page d'accueil");
    return;
  }

  if (req.url === '/about') {
    res.end('Voici une petite histoire...');
    return;
  }

  res.end(`
      <h1>Oups !</h1>
      <p>Nous ne trouvons la page que vous cherchez</p>
      <a href="/">Retourner à l'accueil</a>
    `);
});

server.listen(5000);
