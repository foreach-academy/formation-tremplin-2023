import { useCallback, useEffect, useState } from 'react';
import Loading from '../components/Loading.jsx';
import { Link, useParams } from 'react-router-dom';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCocktail = useCallback(async () => {
    try {
      const resp = await fetch(`${url}${id}`);
      const data = await resp.json();
      setCocktail(data.drinks[0]);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchCocktail();
  }, [fetchCocktail]);

  if (isLoading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className='section-title'>No Cocktail Display</h2>;
  }

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions
  } = cocktail;

  const ingredients = Object.keys(cocktail)
    .filter((key) => key.startsWith('strIngredient') && cocktail[key] !== null)
    .map((key) => cocktail[key]);

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            {ingredients.map((item, index) => (
              <span key={index}>
                {item}
                {index < ingredients.length - 1 ? ',' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
