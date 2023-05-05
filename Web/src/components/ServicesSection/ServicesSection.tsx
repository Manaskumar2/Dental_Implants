import "./ServicesSection.css";
const ServicesSection = () => {
 return (
  <>
   <section className='services-section'>
    <div className='services-header'>
     <h2 className='services-header-text'>Our Services</h2>
    </div>

    <p className='services-text'>
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, rem sapiente? Excepturi perferendis voluptate laudantium iusto alias nisi harum provident aspernatur expedita! Molestias
     reiciendis maiores ratione doloremque minima amet ipsum.
    </p>
   </section>
   <div className='services-container'>
    {Array(3)
     .fill(0)
     .map(() => {
      return (
       <div className='card'>
        <div className='card-header'>
         <img src='https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVudGFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='Image description' />
        </div>
        <div className='card-body'>
         <h2 className='card-title'>Dental Implants</h2>
         <p className='card-description'>
          Dental Implants are surgically implanted medical devices. These devices are implanted into the jaws of the patients so repaired and their facial.
         </p>
         <a href='#' className='card-button'>
          Read More &rarr;
         </a>
        </div>
       </div>
      );
     })}
   </div>

   <div className='btn-container'>
    <a href='#' className='all-services-button'>
     view all services
    </a>
   </div>
  </>
 );
};

export default ServicesSection;
