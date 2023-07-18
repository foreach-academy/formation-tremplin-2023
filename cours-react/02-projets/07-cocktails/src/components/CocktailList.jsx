import CocktailCard from './CocktailCard';
import Loading from './Loading';

const CocktailList = ({ cocktails, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

  if (!cocktails) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((cocktail) => (
          <CocktailCard key={cocktail.id} {...cocktail} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
