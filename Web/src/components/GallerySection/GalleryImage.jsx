import { useState, useEffect } from "react";
import axios from "axios";
import "./GallerySection.css";

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
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/photos");
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="gallery-item">
          <img
            src={image.src}
            alt={image.alt}
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
    </div>
  );
};

export default Gallery;
