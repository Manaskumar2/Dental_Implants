import React from 'react';
import './Navbar.css';

const links = [
  {
    text: "Home",
    url: "#home",
  },
  {
    text: "Services",
    url: "#services",
  },
  {
    text: "Contact",
    url: "#contact",
  },
];

function Navbar() {

  
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        {links.map((link) => (
          <li className='nav-item' key={link.text}>
            <a href={link.url} className='nav-link'>
              {link.text}
            </a>
          </li>
        ))}
        {/* <li className='nav-item phone'>
          <a href='#' className='nav-link'>
            +91-9855579 &nbsp;244
          </a>
        </li> */}
        <li className='nav-item book'>
          <a href='#' className='nav-link'>
            Book an Appointment
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
