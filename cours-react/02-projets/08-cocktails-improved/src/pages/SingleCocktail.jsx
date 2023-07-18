import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  const { data } = await axios(`${url}${params.id}`);

  if (!data) {
    throw new Response('', {
      status: 404,
      statusText: 'Cocktail not found'
    });
  }

  return data;
};

const SingleCocktail = () => {
  const { drinks } = useLoaderData();
  const cocktail = drinks[0];

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
