import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'John' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <h2>Salut {user.name}</h2>
          <button className='btn' onClick={logout}>
            Se déconnecter
          </button>
        </>
      ) : (
        <>
          <h2>Veuillez vous connecter</h2>
          <button className='btn' onClick={login}>
            Se connecter
          </button>
        </>
      )}
    </div>
  );
};

export default UserChallenge;
