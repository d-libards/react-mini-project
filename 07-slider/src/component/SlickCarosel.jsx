import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { shortList, list, longList } from '../data';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="custom-arrow"
      onClick={onClick}
      style={{ right: '10px' }}
    >
      <FiChevronRight size={30} />
    </button>
  );
}

// Custom Previous Arrow Component
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="custom-arrow" onClick={onClick} style={{ left: '10px' }}>
      <FiChevronLeft size={30} />
    </button>
  );
}

function SlickCarosel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
}
export default SlickCarosel;
