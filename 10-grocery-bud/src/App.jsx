import { useEffect, useState } from 'react';
import Form from './components/Form';
import { ToastContainer, toast } from 'react-toastify';
import Items from './components/Items';
import { nanoid } from 'nanoid';

const defaultList = JSON.parse(localStorage.getItem('items') || '[]');

const App = () => {
  const [items, setItems] = useState(defaultList);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  function addItem(itemName) {
    const newItem = {
      name: itemName,
      id: nanoid(),
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    toast.success('item added to the list');
  }

  function removeItem(itemId) {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.success('item deleted ');
  }

  function completedItem(itemId) {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
  }

  function editItem(itemName, itemId) {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, name: itemName };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    toast.success('Item updated ');
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center" autoClose={2500} />
      <Form addItem={addItem} />
      <Items
        items={items}
        removeItem={removeItem}
        completedItem={completedItem}
        editItem={editItem}
      />
    </section>
  );
};

export default App;
