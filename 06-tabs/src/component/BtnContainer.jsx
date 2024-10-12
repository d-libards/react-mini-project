function BtnContainer({ jobs, selectedTab, currentItem }) {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            onClick={() => selectedTab(index)}
            className={`job-btn ${index === currentItem ? 'active-btn' : ''}`}
            key={item.id}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}
export default BtnContainer;
