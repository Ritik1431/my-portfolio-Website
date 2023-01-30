import React from 'react'
import './Contact.css';
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_option">
          <MdEmail/>
          <h4>Email</h4>
          <h5>ritik221jaggi@gmail.com</h5>
          <a href="mailto:ritik221jaggi@gmail.com">Send a message</a>
        </div>
        <div className="contact_option">
        <BsWhatsapp/>
          <h4>WhatsApp</h4>
          <h5>+917888924188</h5>
          <a href="https://api.whatsapp.com/send?phone+917888924188">Send a message</a>
        </div>
        <div className="contact_option">
        <BsLinkedin/>
          <h4>LinkedIn</h4>
          <h5>ritik221jaggi@gmail.com</h5>
          <a href="linkedin.com">Send a message</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
