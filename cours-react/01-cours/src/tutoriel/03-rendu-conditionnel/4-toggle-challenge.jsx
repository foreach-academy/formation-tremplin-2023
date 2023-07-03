import { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <button
        type='button'
        className='btn'
        onClick={() => setShowAlert(!showAlert)}
      >
        Toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className='alert alert-success'>Hello world</div>;
};

export default ToggleChallenge;
