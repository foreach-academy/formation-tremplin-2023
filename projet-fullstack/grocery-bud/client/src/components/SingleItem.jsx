const SingleItem = ({ item }) => {
  return (
    <article className='single-item'>
      <label>
        <input type='checkbox' name='completed' />
      </label>
      <label
        htmlFor='completed'
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through'
        }}
      >
        {item.name}
      </label>
      <button className='btn remove-btn' type='submit'>
        supprimer
      </button>
    </article>
  );
};
export default SingleItem;
