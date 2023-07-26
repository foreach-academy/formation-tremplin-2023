const os = require('os');

// infos à propos de l'utilisateur
const user = os.userInfo();

console.log(user);

// durée de fonctionnement du système en secondes
console.log(
  `La durée de fonctionnement du système est ${os.uptime()} secondes.`
);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem()
};

console.log(currentOS);
