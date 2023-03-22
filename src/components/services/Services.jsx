import React from "react";
import "./services.css";
import { GiCheckMark } from "react-icons/gi";


// ========== Creating a prop for list to avoid reaptition of Article element ======
const Article = ({ skillName, skillLevel, skillLevel2 }) => {
  return (
    <article className="services">
      <div className="service__head">
        <h3>{skillName}</h3>
      </div>
      <ul className="service__list">
        <li>
          <GiCheckMark className="service__list-icons" />
          <p>{skillLevel}</p>
        </li>
        <li>
          <GiCheckMark className="service__list-icons" />
          <p>{skillLevel}</p>
        </li>
        <li>
          <GiCheckMark className="service__list-icons" />
          <p>{skillLevel}</p>
        </li>
        <li>
          <GiCheckMark className="service__list-icons" />
          <p>{skillLevel}</p>
        </li>
        {skillLevel2 && (
          <li>
            <GiCheckMark className="service__list-icons" />
            <p>{skillLevel2}</p>
          </li>
        )}
      </ul>
    </article>
  );
};

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <Article
          skillName="UI/UX"
          skillLevel="UX Desing Lorem ipsum Voluptatum, maxime culpa."
        />
        <Article
          skillName="Web Design"
          skillLevel="UX Desing Lorem ipsum Voluptatum, maxime culpa."
          skillLevel2="UX Desing Lorem ipsum Voluptatum, maxime culpa."
        />
        <Article
          skillName="Content Creation"
          skillLevel="UX Desing Lorem ipsum Voluptatum, maxime culpa."
        />
      </div>
    </section>
  );
};

export default Services;
