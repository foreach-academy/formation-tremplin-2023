const SingleItem = ({ id, name, completed, removeItem, editItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: completed && 'line-through'
        }}
      >
        {name}
      </p>
      <button className='btn remove-btn' onClick={() => removeItem(id)}>
        Supprimer
      </button>
    </div>
  );
};
export default SingleItem;
