import { useState } from 'react';
import Title from './Title.jsx';
import Categories from './Categories.jsx';
import Menu from './Menu.jsx';
import data from './data.js';

const uniqueCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(uniqueCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenu(data);
    } else {
      const newItems = data.filter((item) => item.category === category);
      setMenu(newItems);
    }
  };

  return (
    <main>
      <section className='menu'>
        <Title title='Our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};

export default App;
