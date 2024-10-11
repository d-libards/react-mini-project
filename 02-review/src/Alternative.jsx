import { useState } from 'react';
import data from './data';
import Review from './component/Review';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const App = () => {
  // const [review, setReview] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  function next() {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= data.length ? 0 : newIndex;
    });
    // const nextReview = id - 1 + 1;
    // if (data.length === nextReview) return;
    // setReview(data[nextReview]);
  }

  function prev() {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? data.length - 1 : newIndex;
    });
    // const prevReview = id - 1 - 1;
    // if (prevReview < 0) return;
    // setReview(data[prevReview]);
  }

  function random() {
    let randomIndex;
    do {
      randomIndex = Math.trunc(Math.random() * data.length);
    } while (randomIndex === currentIndex);

    setCurrentIndex(randomIndex);
  }

  return (
    <main>
      <article className="review">
        <Review {...data[currentIndex]} />
        <div className="btn-container">
          <button onClick={prev} className="prev-btn">
            <FaChevronLeft />
          </button>

          <button onClick={next} className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button onClick={random} className="btn btn-hipster">
          Suprise me
        </button>
      </article>
    </main>
  );
};
export default App;
