import { useState, useEffect } from "react";
import axios from "axios";
import "./GallerySection.css";
import { client } from "../../lib/client";
import { Link } from "react-router-dom";



const Gallery = () => {
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (id) => {
    setActiveImage(id);
  };

  const handleOverlayClick = () => {
    setActiveImage(null);
  };


  useEffect(() => {
    client.fetch(`
    *[_type == "gallery"] {
      title,
      "imageUrl": image.asset->url
    }
  `).then((data) => {
      setImages(data);
      console.log(data)
    }).catch(console.error);
  }, []);

  const displayedImages = images.slice(0, 6); // Display only the first six images
  console.log(displayedImages)

  

  return (
    <div className="gallery">
      {displayedImages.map((image) => (
        <div key={image.id} className="gallery-item">
          <img
            src={image.imageUrl}
            alt={image.title}
            onClick={() => handleImageClick(image.id)}
          />
          <div className="gallery-overlay">
            <h3>{image.alt}</h3>
            <p>{image.details}</p>
          </div>
        </div>
      ))}
      {activeImage !== null && (
        <div className="gallery-modal" onClick={handleOverlayClick}>
          <img
            src={images.find((image) => image.id === activeImage)?.src}
            alt={images.find((image) => image.id === activeImage)?.alt}
          />
        </div>
      )}

      <div>

      </div>

      <Link to={`/gallery`}>
        <div className='btn-container'>
          <a href='#' className='all-services-button'>
            View all Photos
          </a>
        </div>
      </Link>
    </div>
  );
};

export default Gallery;
