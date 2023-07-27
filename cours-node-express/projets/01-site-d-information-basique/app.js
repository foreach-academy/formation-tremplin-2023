const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`
    <h1>Bievenue sur ma page</h1>
    <nav>
      <ul>
        <a href="/">Accueil</a>
      </ul>
      <ul>
        <a href="/about">À propos</a>
      </ul>
      <ul>
        <a href="/contact-me">Me contacter</a>
      </ul>
    </nav>
    `);
    return;
  }

  if (req.url === '/about') {
    res.end(`
      <h1>À propos</h1>
      <nav>
        <ul>
          <a href="/">Accueil</a>
        </ul>
        <ul>
          <a href="/about">À propos</a>
        </ul>
        <ul>
          <a href="/contact-me">Me contacter</a>
        </ul>
      </nav>
    `);
    return;
  }

  if (req.url === '/contact-me') {
    res.end(`
      <h1>Me contacter</h1>
      <nav>
        <ul>
          <a href="/">Accueil</a>
        </ul>
        <ul>
          <a href="/about">À propos</a>
        </ul>
        <ul>
          <a href="/contact-me">Me contacter</a>
        </ul>
      </nav>
    `);
    return;
  }

  res.end(`
    <h1>Oups !</h1>
    <p>404 Page introuvable</p>
    <a href="/">Retourner à l'accueil</a>
  `);
});

server.listen(5000);
