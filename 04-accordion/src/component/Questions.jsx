import SingleQuestion from './SingleQuestion';

function Questions({ questions, selectedId, handleToggle }) {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            {...question}
            selectedId={selectedId}
            handleToggle={handleToggle}
            key={question.id}
          />
        );
      })}
    </section>
  );
}
export default Questions;
