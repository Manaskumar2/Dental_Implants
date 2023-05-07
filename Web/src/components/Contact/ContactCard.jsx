import React, { useState } from 'react';
import './ContactCard.css';
import { BsPerson } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { TfiCommentAlt } from 'react-icons/tfi'

function ContactCard() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nComment: ${comment}`);
    }

    return (
        <form onSubmit={handleSubmit} className="contact-card">
            <div className="contact-heading">
                <h2>GET IN TOUCH</h2>
            </div>
            <div className='first-row'>
                <div className="half input-row">
                    <BsPerson className="icon" />
                    <input type="text" value={name} placeholder='Your name' onChange={(e) => setName(e.target.value)} style={{ textTransform: 'none' }} />
                </div>
                <div className="half input-row">
                    <FiPhoneCall className="icon" />
                    <input type="text" value={phone} placeholder='Mobile Number' onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>
            <div className="input-row">
                <MdOutlineEmail className="icon" />
                <input type="email" value={email} id="input-field" placeholder='Email Id' onChange={(e) => setEmail(e.target.value)} style={{ textTransform: 'none' }} />
            </div>
            <div className="input-row">
                <TfiCommentAlt className="icon" />
                <textarea value={comment} placeholder='Comment' onChange={(e) => setComment(e.target.value)} style={{ textTransform: 'none' }} />
            </div>
            <div className="input-row">
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    );
}

export default ContactCard;
