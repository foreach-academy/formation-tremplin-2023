import { Link, useParams } from 'react-router-dom';
import { products } from '../data.js';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return (
      <section className='section'>
        <p>Produit introuvable</p>
      </section>
    );
  }

  const { image, name } = product;

  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products'>Retouner aux produits</Link>
    </section>
  );
};

export default SingleProduct;
