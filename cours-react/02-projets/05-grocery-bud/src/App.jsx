import { useEffect, useState } from 'react';
import Form from './Form.jsx';
import Items from './Items.jsx';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultList = JSON.parse(localStorage.getItem('list')) || [];

const setLocalStorage = (items) =>
  localStorage.setItem('list', JSON.stringify(items));

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    toast.success('Article ajouté');
  };

  const removeItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
    toast.success('Article supprimé');
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }

      return item;
    });
    setItems(newItems);
  };

  useEffect(() => {
    setLocalStorage(items);
  }, [items]);

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
