import CocktailCard from './CocktailCard';

const CocktailList = ({ cocktails }) => {
  if (!cocktails) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  }

  const formattedCocktails = cocktails.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass
    };
  });

  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {formattedCocktails.map((cocktail) => (
          <CocktailCard key={cocktail.id} {...cocktail} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
