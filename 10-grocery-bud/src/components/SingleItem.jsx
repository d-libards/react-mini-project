import { useState } from 'react';

function SingleItem({
  name,
  id,
  completed,
  removeItem,
  completedItem,
  editItem,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  function handleEdit() {
    if (isEditing && newName !== name) {
      editItem(newName, id);
    }
    setIsEditing(!isEditing);
  }
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => completedItem(id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <p
          style={{
            textTransform: 'capitalize',
            textDecoration: completed && 'line-through',
          }}
        >
          {name}
        </p>
      )}
      <button className="btn" onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        remove
      </button>
    </div>
  );
}
export default SingleItem;
