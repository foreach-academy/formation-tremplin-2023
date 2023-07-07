const MenuItem = ({ title, desc, img, price }) => {
  return (
    <article className='menu-item'>
      <img src={img} alt={title} className='img' />
      <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <h4 className='item-price'>{price}</h4>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
