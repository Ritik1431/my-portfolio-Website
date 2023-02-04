import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer_logo'>Ritik</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/Ritik1431"><AiFillGithub/></a>
        <a href="https://linkedin.in"><BsLinkedin/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ritik DataScientist. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
