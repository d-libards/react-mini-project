import { FaQuoteRight } from 'react-icons/fa';

function Review({ name, job, image, text }) {
  return (
    <div>
      <div className="img-container">
        <img src={image} alt="" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    </div>
  );
}
export default Review;
