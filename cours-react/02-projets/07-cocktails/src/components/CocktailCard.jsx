import { Link } from 'react-router-dom';

// Une carte de cocktail
const CocktailCard = ({ glass, id, image, info, name }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link className='btn btn-primary' to={`/cocktail/${id}`}>
          details
        </Link>
      </div>
    </article>
  );
};

export default CocktailCard;
