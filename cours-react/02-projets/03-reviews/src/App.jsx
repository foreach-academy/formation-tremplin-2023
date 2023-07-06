import Review from './Review.jsx';

const App = () => {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Reviews</h2>
          <div className='title-underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default App;
