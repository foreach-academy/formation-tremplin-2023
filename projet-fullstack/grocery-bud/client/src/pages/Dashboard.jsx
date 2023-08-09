import { useOutletContext } from 'react-router-dom';
import ItemsForm from '../components/ItemsForm.jsx';
import Items from '../components/Items.jsx';

const Dashboard = () => {
  const { items } = useOutletContext();

  console.log(items);

  return (
    <section className='section-center'>
      <ItemsForm />
      <Items items={items} />
    </section>
  );
};

export default Dashboard;
