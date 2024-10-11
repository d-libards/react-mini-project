import Tour from './Tour';

function Tours({ tours, handleRemove }) {
  return (
    <div>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} handleRemove={handleRemove} />;
        })}
      </div>
    </div>
  );
}
export default Tours;
