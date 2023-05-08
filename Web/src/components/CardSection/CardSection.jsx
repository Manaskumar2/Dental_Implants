import { useState } from 'react';
import './CardSection.css';

const CardSection = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(true);
  };

  return (
    <section className='card-section'>
      <div className='card-content'>
        <h2 className='card-header'>Globedent Dental Spa</h2>
        <div className='card-hr'></div>
        <p className='card-text'>
          Globodent Dental Spa is owned and run by <span className="font-bold">Dr. Aanchal Bansal</span> and <span className="font-bold">Dr. Rohit Bansal</span>. It is one of the fastest growing and most reliable dental facilities based out of South Delhi.
        </p>

        {showMore ? (
          <div className='more-text'>
            <p>
              We offer a wide range of dental services, including general dentistry, cosmetic dentistry, orthodontics, and more. Our team of experienced dentists and staff are dedicated to providing high-quality care in a comfortable and friendly environment.
            </p>
          </div>
        ) : (
          <button className='card-read-me-button' onClick={handleReadMore}>
            Read More
          </button>
        )}
      </div>
    </section>
  );
};

export default CardSection;

