import { useEffect, useState } from 'react';
import { shortList, list, longList } from '../data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Carosel() {
  const [people, setPeople] = useState(longList);
  const [currentSlide, setCurrentSlide] = useState(0);

  function prevSlide() {
    setCurrentSlide((oldSlide) => {
      const result = (oldSlide - 1 + people.length) % people.length;
      return result;
    });
  }

  function nextSlide() {
    setCurrentSlide((oldSlide) => {
      const result = (oldSlide + 1) % people.length;
      return result;
    });
  }

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(sliderId);
    };
  }, [currentSlide]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentSlide)}%)`,
              opacity: personIndex === currentSlide ? 1 : 0,
              visibility: personIndex === currentSlide ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <div>
        <button type="button" className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button type="button" className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}
export default Carosel;