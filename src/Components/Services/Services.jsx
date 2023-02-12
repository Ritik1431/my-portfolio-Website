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
          <h3>Data Science</h3>
        </div>
        <ul className="service_list">
          <li>
            <BsCheckLg className='service_list-icon'/>
            MS-Excell.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Tableu prep.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Tableu Desktop.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            R language.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            My SQL.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            DBMS.
          </li>
        </ul>
      </article>
      {/* {Data Science} */}
      <article className="services">
        <div className="service_head">
          <h3>Web development</h3>
        </div>
        <ul className="service_list">
          <li>
            <BsCheckLg className='service_list-icon'/>
            HTML.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            CSS.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Java Script.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            React.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            BootStrap.
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
            PhotoShop.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Fl-Studio.
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Hockey
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            Boxing
          </li>
        </ul>
      </article>
    </div>
    </section>
  )
}

export default Services
