import './DoctorPopup.css'

const DoctorPopup = ({ show, onClose, title, description, imageSrc }) => {
    return (
        <div className={`doctor-popup ${show ? "show" : ""}`}>
            <div className="doctor-popup-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2 className="doctor-popup-title">{title}</h2>
                <div className="doctor-popup-body">
                    <img src={imageSrc} alt={title} className="doctor-popup-image" />
                    <p className="doctor-popup-description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorPopup;
