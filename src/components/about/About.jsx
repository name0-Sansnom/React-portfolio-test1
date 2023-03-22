import React from "react";
import "./about.css";
import Me from '../../asset/boy-sit.jpg';
// import Me from '../../asset/me-about.jpg';
import { FaAward } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { BsJournalBookmark } from "react-icons/bs";

const About = () => {
  return <section id="about">
  <h5>Get to know</h5>
  <h2>About Me</h2>

  <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
      <img src={Me} alt="About Me image" />
      </div>
    </div>
    <div className="about__content">
    <div className="about__cards">
      <article className="about__card">
      <FaAward className="about__icon" />
      <h5>Experience</h5>
      <small>3+ Working</small>
      </article>
      
      <article className="about__card">
      <BsPeople className="about__icon" />
      <h5>Clients</h5>
      <small>14+ Wolrdwide</small>
      </article>
      
      <article className="about__card">
      <BsJournalBookmark className="about__icon" />
      <h5>Projects</h5>
      <small>32+ Projects</small>
      </article>
    </div>
      <p>
        I am a full-stack web developer with a passion for building
        websites and applications.
      </p>
      <button className="btn btn-primary">Let's Talk</button>
    </div>
  </div>

  </section>;
};
export default About;
