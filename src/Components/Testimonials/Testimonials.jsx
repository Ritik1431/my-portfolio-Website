import React from 'react'
import './Testimonials.css'
import {BsPersonCircle} from 'react-icons/bs'
import AVTR1 from '../../Assets/prnv.jpg'
import AVTR2 from '../../Assets/khushu.jpg'
import AVTR3 from '../../Assets/sukham.jpg'
import AVTR4 from '../../Assets/swastik.jpg'
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials_container">
        <article className="testimonials">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar" />
          </div>
          <div className="client_name-icon">
            <BsPersonCircle className='client-icon'/>
            <h5 className='client_name'>Pranav Tyagi</h5>
          </div>
            <small className="client_review">
              Its my privilegde to work with you.It was great experience.
              This site helped me a lot to learn the concepts.
            </small>
        </article>
        <article className="testimonials">
          <div className="client_avatar">
            <img src={AVTR2} alt="Avatar" />
          </div>
          <div className="client_name-icon">
            <BsPersonCircle className='client-icon'/>
            <h5 className='client_name'>Khushal Mehta</h5>
          </div>
            <small className="client_review">
              Its my privilegde to work with you.It was great experience.
              This site helped me a lot to learn the concepts.
            </small>
        </article>
        <article className="testimonials">
          <div className="client_avatar">
            <img src={AVTR3} alt="Avatar" />
          </div>
          <div className="client_name-icon">
            <BsPersonCircle className='client-icon'/>
            <h5 className='client_name'>Sukham</h5>
          </div>
            <small className="client_review">
              Its my privilegde to work with you.It was great experience.
              This site helped me a lot to learn the concepts.
            </small>
        </article>
        <article className="testimonials">
          <div className="client_avatar">
            <img src={AVTR4} alt="Avatar" />
          </div>
          <div className="client_name-icon">
            <BsPersonCircle className='client-icon'/>
            <h5 className='client_name'>Swastik gupta</h5>
          </div>
            <small className="client_review">
              Its my privilegde to work with you.It was great experience.
              This site helped me a lot to learn the concepts.
            </small>
        </article>
        
      </div>
    </section>
  )
}

export default Testimonials
