import { useState, useEffect } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function handleRemove(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error();

      const data = await response.json();
      setTours(data);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="title">
        <h2>no tours left</h2>
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={fetchData}
        >
          Refetch
        </button>
      </div>
    );
  }

  return (
    <main>
      <Tours tours={tours} handleRemove={handleRemove} />
    </main>
  );
};
export default App;
