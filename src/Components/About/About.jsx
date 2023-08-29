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
              <h5>Schooling</h5>
              <small>10th,12th from </small><br/><small>Army Public School Pathankot</small>
            </article>
            <article className="about_card">
              <BiUser className="about_icon" />
              <h5>Graduation</h5>
              <small>Btech(CSE) from Lovely Professional University.</small>
            </article>
            <article className="about_card">
              <AiOutlineFundProjectionScreen className="about_icon" />
              <h5>Projects</h5>
              <small>React Website</small><br /><small>Tic Tac Toe Game</small><br /><small>Dashboard using Ms-Excel</small>

            </article>
          </div>
          <p>
            Hi! My name is Ritik Singh and I'm a Software Engineer. You can see my skills and projects from this website. 
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
