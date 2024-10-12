import { useState } from 'react';
import menu from './data';
import Title from './component/Title';
import Menu from './component/Menu';
import Categories from './component/Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  function handleCategory(category) {
    setMenuItems(() =>
      category === 'all'
        ? menu
        : menu.filter((menuItems) => menuItems.category === category)
    );
  }

  return (
    <main>
      <section className="menu">
        <Title text={'Our Menu'} />
        <Categories handleCategory={handleCategory} categories={categories} />
        <Menu menu={menuItems} />
      </section>
    </main>
  );
};
export default App;
