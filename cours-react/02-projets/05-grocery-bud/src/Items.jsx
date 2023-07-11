import SingleItem from './SingleItem.jsx';

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className='items'>
      {items.map((item) => (
        <SingleItem
          key={item.id}
          {...item}
          removeItem={removeItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
};

export default Items;
