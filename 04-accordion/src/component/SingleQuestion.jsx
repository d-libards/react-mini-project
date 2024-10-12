import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function SingleQuestion({ title, info, id, handleToggle, selectedId }) {
  const isActive = selectedId === id;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => handleToggle(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
}
export default SingleQuestion;
