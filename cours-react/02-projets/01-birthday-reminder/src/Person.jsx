import PropTypes from 'prop-types';

const Person = ({ person }) => {
  const { image, name, age } = person;

  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div>
        <h4>{name}</h4>
        <p>{age} ans</p>
      </div>
    </article>
  );
};

Person.propTypes = {
  person: PropTypes.object.isRequired
};

export default Person;
