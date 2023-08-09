import SingleItem from './SingleItem';

const Items = ({ items }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem key={item.item_id} item={item} />;
      })}
    </div>
  );
};

export default Items;
