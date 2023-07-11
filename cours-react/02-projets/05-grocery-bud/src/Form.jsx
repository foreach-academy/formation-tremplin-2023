import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName) {
      toast.error('Veuillez founir une valeur');
      return;
    }

    addItem(itemName);
    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Épicerie</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button type='submit' className='btn'>
          Ajouter
        </button>
      </div>
    </form>
  );
};
export default Form;
