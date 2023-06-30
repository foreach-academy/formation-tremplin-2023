import PropTypes from 'prop-types';
import Person from './Person.jsx';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <Person key={person.id} person={person} />;
      })}
    </>
  );
};

List.propTypes = {
  people: PropTypes.array.isRequired
};

export default List;
