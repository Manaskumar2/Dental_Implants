import "./CardSection.css";
const CardSection = () => {
 return (
  <section className='card-section'>
   <div className='card-content'>
    <h2 className='card-header'>Globedent Dental Spa</h2>
    <div className='card-hr'></div>
    <p className='card-text'>
     Globodent Dental Spa is owned and run by Dr. Aanchal Bansal and Dr. Rohit Bansal. It is one of the fastest growing and most reliable dental facilities based out of South Delhi.
    </p>
    <a href='#' className='card-read-me-button'>
     Read More
    </a>
   </div>
  </section>
 ); 
};

export default CardSection;
