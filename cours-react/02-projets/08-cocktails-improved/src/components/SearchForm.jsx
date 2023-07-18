import { useEffect, useRef } from 'react';
import { Form, useSubmit } from 'react-router-dom';

// formulaire
const SearchForm = ({ searchTerm }) => {
  const submit = useSubmit();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <section className='section section-search'>
      <Form className='search-form'>
        <div className='form-control'>
          <label htmlFor='search'>Search your favorite cocktail</label>
          <input
            type='search'
            id='search'
            name='searchTerm'
            ref={inputRef}
            defaultValue={searchTerm}
            onChange={(e) => {
              const isFirstSearch = searchTerm === null;
              submit(e.currentTarget.form, { replace: !isFirstSearch });
            }}
          />
        </div>
      </Form>
    </section>
  );
};

export default SearchForm;
