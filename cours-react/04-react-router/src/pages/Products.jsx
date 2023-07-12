import { Link } from 'react-router-dom';
import { products } from '../data.js';

const Products = () => {
  return (
    <section className='section'>
      <h2>Produits</h2>

      <div className='products'>
        {products.map((product) => {
          const { id, name } = product;

          return (
            <article key={id}>
              <h5>{name}</h5>
              <Link to={`/products/${id}`}>plus d&apos;info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
