import React from 'react'
import './Services.css'
import {BsCheckLg} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
    
    <div className="container services_container">
      <article className="services">
        <div className="service_head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service_list">
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
        </ul>
      </article>
      {/* {End of UI/UX} */}
      <article className="services">
        <div className="service_head">
          <h3>Data Science</h3>
        </div>
        <ul className="service_list">
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
        </ul>
      </article>
      {/* {End of Data Science} */}
      <article className="services">
        <div className="service_head">
          <h3>Other Skills</h3>
        </div>
        <ul className="service_list">
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
        </ul>
      </article>
    </div>
    </section>
  )
}

export default Services
