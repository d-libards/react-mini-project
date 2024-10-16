import { useState } from 'react';
import { toast } from 'react-toastify';

function Form({ addItem }) {
  const [item, setItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!item) {
      toast.error('input a string');
      return;
    }
    addItem(item);
    setItem('');
  }
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
          <input
            className="form-input"
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
export default Form;
