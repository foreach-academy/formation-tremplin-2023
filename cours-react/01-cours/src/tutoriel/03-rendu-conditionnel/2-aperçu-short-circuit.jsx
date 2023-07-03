// on ne peut pas utiliser de conditions ou de boucles
// ce n'est pas permis par react car il n'y pas de retour
// c'est pourquoi on va utiliser les circuit-courts

//* L'opérateur || (OU logique) retourne le premier operande si il est "truthy", ou le second opérande si le premier est "falsy"
const user = null || 'Peter';
console.log(user);

//* L'opérateur && (ET logique) retourne le premier operande si il est "falsy", ou le second opérande si le premier est "truthy"

const ShortCircuitOverview = () => {
  return <h1>Short circuit</h1>;
};

export default ShortCircuitOverview;
