import React from 'react'
import './Contact.css';
import { useRef } from 'react';
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ulk83gt', 'template_qfbkjsn', form.current, '0nqge-yVcMCLr7iP1')

    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
        <article className="contact_option">
          <MdEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>ritik221jaggi@gmail.com</h5>
          <a href="mailto:ritik221jaggi@gmail.com">Send a message</a>
        </article>
        <article className="contact_option">
        <BsWhatsapp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+917888924188</h5>
          <a href="https://api.whatsapp.com/send?phone+917888924188"target="blank">Send a message</a>
        </article>
        <article className="contact_option">
        <BsLinkedin className='contact_option-icon'/>
          <h4>LinkedIn</h4>
          <h5>Ritik Singh</h5>
          <a href="https://linkedin.com/in/ritik-singh-8b71261b7"target="blank">Send a message</a>
        </article>
        </div>
        {/* {End of Contact Options} */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
