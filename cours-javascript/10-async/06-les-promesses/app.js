//* callbacks, promesses
//* Promise - Pending (En attente), Resolved (Résolue), Rejected (Rejetée)
//* then catch - passe une autre fonction callback

const promise = new Promise((resolve, reject) => {
  // ici, on mettra une fonctionnalité (fetch data, etc...)
  let value = false;

  if (value) {
    resolve([1, 2, 4]);
  } else {
    reject(`il y a une erreur, value est fausse`);
  }
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));
