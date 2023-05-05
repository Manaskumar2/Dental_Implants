import "./MeetDoctors.css";

const MeetDoctors = () => {
    return (
        <>
            <div className='meet-doctors'>
                <h2>Meet Our Doctors</h2>
            </div>
            <p className='meet-doctors-subtitle'>we are the patients at Globodent Dental Spa in safe hands?</p>
            <div className='doctor-card-container'>
                <div className='doctorCard'>
                    <div className='doctorImage'>
                        <img src="https://boost-content-cdn.s3.ap-south-1.amazonaws.com/CustomPages/Images/537ea6a6.jpg" alt="" />
                    </div>
                    <div className='doctorContent'>
                        <h2 className="doctor-card-title" >Dr. Rohit Bansal</h2>
                        <p className="doctor-card-description">Dr. Rohit Bansal is an endodontist who specialises in root
                            canal treatments. He deals with the diagnosis of complex
                            causes which lead to tooth pain and provides relief to his
                            patients through root canal treatments and other
                            procedures. He harbours a keen interest in the fields of
                            endontics, cosmetic dentistry and restorative dentistry
                        </p>
                        <button className="doctor-card-button">READ MORE &rarr;</button>
                    </div>
                </div>

                <div className='doctorCard'>
                    <div className='doctorImage'>
                        <img src="https://boost-content-cdn.s3.ap-south-1.amazonaws.com/CustomPages/Images/537ea6a6.jpg" alt="" />
                    </div>
                    <div className='doctorContent'>
                        <h2 className="doctor-card-title" >Dr. Rohit Bansal</h2>
                        <p className="doctor-card-description">Dr. Rohit Bansal is an endodontist who specialises in root
                            canal treatments. He deals with the diagnosis of complex
                            causes which lead to tooth pain and provides relief to his
                            patients through root canal treatments and other
                            procedures. He harbours a keen interest in the fields of
                            endontics, cosmetic dentistry and restorative dentistry
                        </p>
                        <button className="doctor-card-button">READ MORE &rarr;</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MeetDoctors;
