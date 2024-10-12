import MenuItems from './MenuItems';

function Menu({ menu }) {
  return (
    <div className="section-center">
      {menu.map((items) => (
        <MenuItems {...items} key={items.id} />
      ))}
    </div>
  );
}
export default Menu;
