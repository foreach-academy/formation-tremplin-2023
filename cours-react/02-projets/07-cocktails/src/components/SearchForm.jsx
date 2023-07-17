// formulaire
const SearchForm = () => {
  // récupérer l'input
  return (
    <section className='section section-search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='search'>Search your favorite cocktail</label>
          <input type='search' id='search' />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
