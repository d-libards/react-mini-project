import SingleItem from './SingleItem';

function Items({ items, removeItem, completedItem, editItem }) {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            {...item}
            removeItem={removeItem}
            completedItem={completedItem}
            editItem={editItem}
            key={item.id}
          />
        );
      })}
    </div>
  );
}
export default Items;
