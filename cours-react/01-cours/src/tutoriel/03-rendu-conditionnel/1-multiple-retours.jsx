import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/Fixito';

//! il faut obligatoirement qu'un composant retourne quelque chose
//* nous pouvons aussi avoir plusieurs retours et retourner un élément selon une condition
//* cela rend nos composants plus dynamiques
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
        return;
      }

      const user = await response.json();
      setUser(user);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Chargement...</h2>;
  }

  if (isError) {
    return <h2>Une erreur s&apos;est produite...</h2>;
  }

  const { name, avatar_url } = user;

  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default MultipleReturns;
