import React from 'react';
import './Contact.css'; 
import { FaLinkedin } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaGitSquare } from "react-icons/fa";

function ContactForm() {
  return (<>
  <div className='responsive'>
    <h1 className='span'>&lt; Contact<span>Me</span> /&gt;</h1>
    <div className="contact-container">
      
      <h2 className="contact-title">Let's talk about everything!</h2>
      <p className="contact-subtitle">
        Don't like forms? Send me an <a href="mailto:randiltharusha72@gmail.com">email</a>. 👋
      </p>

      <div className="contact-links">
        
        <a href="www.linkedin.com/in/aryan-kumar-b2408525b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/>
        </a>
        <a href="https://www.instagram.com/_aryan53/" target="_blank" rel="noopener noreferrer">
          <CiInstagram/>
        </a>
        
      </div>

      <div className="contact-info">
        <p>
          <i className="fas fa-envelope"></i> aryan511222@gmail.com
        </p>
        <p>
          <i className="fas fa-phone"></i> +916202072082
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i> India
        </p>
      </div>

    
    </div>
    </div>
    </>
  );
}

export default ContactForm;
