import React from 'react'
import './Contact.css';
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  // const form = useRef();
  // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  // .then((result) => {
  //     console.log(result.text);
  // }, (error) => {022
  //     console.log(error.text);
  // });
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
        <form action="">
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
