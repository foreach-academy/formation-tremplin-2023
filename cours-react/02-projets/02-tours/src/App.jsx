import { useEffect, useState } from 'react';
import Tours from './Tours.jsx';
import Loading from './Loading.jsx';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const removeTour = (id) => {
    const filteredTours = tours.filter((tour) => tour.id !== id);
    setTours(filteredTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!tours.length) {
    return (
      <main>
        <div className='title'>
          <h1>No tours left</h1>
          <div className='title-underline'></div>
          <button
            className='btn'
            style={{ marginTop: '2rem' }}
            onClick={fetchTours}
          >
            Refetch
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
