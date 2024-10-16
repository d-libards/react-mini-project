import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let amount = Number(count);
    if (!amount) return;
    const newText = data.slice(0, amount);
    setText(newText);
  }
  return (
    <section className="section-center">
      <h4>Tired of Boring Lorem Ipsum?</h4>
      <form action="submit" onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="count">Paragraphs:</label>
        <input
          type="number"
          name="count"
          id="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min={1}
          step={1}
          max={8}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph) => {
          const id = nanoid();
          return <p key={id}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
