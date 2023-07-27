const http = require('http');

const server = http.createServer((req, res) => {
  console.log("L'utilisateur est entré en contact avec le serveur");
  // console.log(req.method);
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write("<h1>Page d'accueil</h1>");
    res.end();
    return;
  }

  if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>À propos</h1>');
    res.end();
    return;
  }

  res.writeHead(404, { 'content-type': 'text/html' });
  res.write('<h1>Page introuvable</h1>');
  res.end();
});

server.listen(5000);
