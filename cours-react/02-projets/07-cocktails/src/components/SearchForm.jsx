import { useEffect, useRef } from 'react';

// formulaire
const SearchForm = ({ searchTerm, setSearchTerm }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <section className='section section-search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='search'>Search your favorite cocktail</label>
          <input
            type='search'
            id='search'
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
