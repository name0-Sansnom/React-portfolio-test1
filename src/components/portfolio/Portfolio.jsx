import React from "react";
import "./portfolio.css";
import IMG1 from "../../asset/portfolio8.jpg";
import IMG2 from "../../asset/portfolio9.jpg";
import IMG3 from "../../asset/portfolio7.jpg";
import IMG4 from "../../asset/portfolio10.png";
import IMG5 from "../../asset/portfolio11.jpg";
import IMG6 from "../../asset/portfolio1.jpg";

const portfolioData = [
  {
    id: 1,
    title: "Emanpay",
    image: IMG1 ,
    github_btn: "https://emanpay.netlify.app",
    demo_btn: "https://emanpay.netlify.app"
  },
  {
    id: 2,
    title: "CloudAir",
    image: IMG2 ,
    github_btn: "https://cloudair.netlify.app",
    demo_btn: "https://cloudair.netlify.app"
  },
  {
    id: 3,
    title: "Al-Hikma",
    image: IMG3 ,
    github_btn: "https://alhikmaready.netlify.app",
    demo_btn: "https://alhikmaready.netlify.app"
  },
  {
    id: 4,
    title: "NGO",
    image: IMG4 ,
    github_btn: "https://zongo-ngo.netlify.app",
    demo_btn: "https://zongo-ngo.netlify.app"
  },
  {
    id: 5,
    title: "Restaurant Menu",
    image: IMG5 ,
    github_btn: "https://github.com/name0-Sansnom?tab=repositories",
    demo_btn: "https://github.com/name0-Sansnom"
  },
  {
    id: 6,
    title: "my portfolio",
    image: IMG6 ,
    github_btn: "https://github.com/name0-Sansnom?tab=repositories",
    demo_btn: "https://github.com/name0-Sansnom"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recents Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          portfolioData.map(({id, title, image, github_btn, demo_btn}) => {
          return (
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-ctn">
            <a
              href={github_btn} className="btn" target={"_blank"} rel="noopener noreferrer"
            >
              Github
            </a>
            <a href={demo_btn} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </article>
          )
        })
        }
        {/* <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a Little about My Portfolio</h3>
          <div className="portfolio__item-ctn">
            <a
              href="https://github.com/name0-Sansnom?tab=repositories"
              className="btn"
            >
              Github
            </a>
            <a href="" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a Little about My Portfolio</h3>
          <div className="portfolio__item-ctn">
            <a
              href="https://github.com/name0-Sansnom?tab=repositories"
              className="btn"
            >
              Github
            </a>
            <a href="" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a Little about My Portfolio</h3>
          <div className="portfolio__item-ctn">
            <a
              href="https://github.com/name0-Sansnom?tab=repositories"
              className="btn"
            >
              Github
            </a>
            <a href="" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a Little about My Portfolio</h3>
          <div className="portfolio__item-ctn">
            <a
              href="https://github.com/name0-Sansnom?tab=repositories"
              className="btn"
            >
              Github
            </a>
            <a href="" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a Little about My Portfolio</h3>
          <div className="portfolio__item-ctn">
            <a
              href="https://github.com/name0-Sansnom?tab=repositories"
              className="btn"
            >
              Github
            </a>
            <a href="" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
