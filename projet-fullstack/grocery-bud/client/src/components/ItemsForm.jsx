const ItemsForm = () => {
  return (
    <form>
      <h4>Liste de courses</h4>
      <div className='form-control'>
        <label htmlFor='name' className='visually-hidden'>
          Ajouter un article
        </label>
        <input type='text' name='name' id='name' className='form-input' />
        <button type='submit' className='btn'>
          ajouter
        </button>
      </div>
    </form>
  );
};

export default ItemsForm;
