import { useState } from 'react';
import { toast } from 'react-toastify';

function Form({ addColor }) {
  const [color, setColor] = useState('#f15025');

  const isValidHex = (color) => {
    const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
    return hexRegex.test(color);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!color || !isValidHex(color)) {
      toast.error('Invalid color format! Please use #rrggbb.');
      return;
    }
    addColor(color);
  }

  return (
    <section className="container">
      <h4>Color generator</h4>
      <form action="submit" className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button type="submit" className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
}
export default Form;
