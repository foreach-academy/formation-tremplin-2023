import { useEffect, useState } from 'react';

const url = 'https://randomuser.me/api';

const API = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        setIsError(true);
        return;
      }

      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (isError) {
    return <div>Une erreur s&apos;est produite.</div>;
  }

  const {
    name: { first, last },
    picture: { large }
  } = user;

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <div>
        <img src={large} alt={`${first} ${last}`} />
        <h2>
          {first} {last}
        </h2>
      </div>
    </>
  );
};

export default API;
