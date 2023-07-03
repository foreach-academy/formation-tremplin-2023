import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();

    // autre façon
    // fetch(url)
    //   .then((resp) => resp.json())
    //   .then((data) => setUsers(data))
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Utilisateurs Github</h1>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4 style={{ textTransform: 'capitalize' }}>{login}</h4>
                <a href={html_url} target='_blank' rel='noreferrer'>
                  Profil
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
