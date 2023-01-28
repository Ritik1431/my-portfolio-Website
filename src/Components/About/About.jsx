import React from "react";
import "./About.css";
import ME from "../../Assets/about.jpg";
import { FaAward } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} className="photo" alt="Something went wrong.." />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <BiUser className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Clients</small>
            </article>
            <article className="about_card">
              <AiOutlineFundProjectionScreen className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            error culpa, aut cum iis corrupti
          </p>
          <div className="btn-div">
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
