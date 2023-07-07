import MenuItem from './MenuItem.jsx';

const Menu = ({ menu }) => {
  return (
    <div className='section-center'>
      {menu.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Menu;
