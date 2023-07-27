const http = require('http');
const { readFileSync } = require('fs');

const navPage = readFileSync('./navbar-app/index.html');
const navStyle = readFileSync('./navbar-app/styles.css');
const navImage = readFileSync('./navbar-app/logo.svg');
const navLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(navPage);
    res.end();
    return;
  }

  // styles
  if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(navStyle);
    res.end();
    return;
  }

  // logo
  if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(navImage);
    res.end();
    return;
  }

  // js
  if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(navLogic);
    res.end();
    return;
  }

  // 404
  res.writeHead(404, { 'content-type': 'text/html' });
  res.write('<h1>404 Page introuvable</h1>');
  res.end();
});

server.listen(5000);
