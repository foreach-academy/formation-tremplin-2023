const { readFile, writeFile } = require('fs');

console.log('début');

// lit le premier fichier
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;

  // lit le second fichier
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    // écrit dans un fichier
    writeFile(
      './content/result-async.txt',
      `Voici le résult : ${first} ${second}`,
      (err, _result) => {
        if (err) {
          console.log(err);
          return;
        }

        // le résultat est unfined mais le fichier a bien été créé
        // console.log(result);
        console.log('tâche terminée');
      }
    );
  });
});
//! voici le fameux callback hell

console.log('début de la prochaine tâche');
