import React from 'react';
import './portfolio.css';
import IMG1 from '../../asset/portfolio2.jpg';
import IMG2 from '../../asset/portfolio3.jpg';
import IMG3 from '../../asset/portfolio4.jpg';
import IMG4 from '../../asset/portfolio5.png';
import IMG5 from '../../asset/portfolio6.jpg';
import IMG6 from '../../asset/portfolio1.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recents Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={IMG1} alt="" />
        </div>
        <h3>This is a Little about My Portfolio</h3>
        <div className="portfolio__item-ctn">
          <a href="https://github.com/name0-Sansnom?tab=repositories" className='btn'>Github</a>
        <a href="" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={IMG2} alt="" />
        </div>
        <h3>This is a Little about My Portfolio</h3>
        <div className="portfolio__item-ctn">
          <a href="https://github.com/name0-Sansnom?tab=repositories" className='btn'>Github</a>
        <a href="" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={IMG3} alt="" />
        </div>
        <h3>This is a Little about My Portfolio</h3>
        <div className="portfolio__item-ctn">
          <a href="https://github.com/name0-Sansnom?tab=repositories" className='btn'>Github</a>
        <a href="" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={IMG4} alt="" />
        </div>
        <h3>This is a Little about My Portfolio</h3>
        <div className="portfolio__item-ctn">
          <a href="https://github.com/name0-Sansnom?tab=repositories" className='btn'>Github</a>
        <a href="" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={IMG5} alt="" />
        </div>
        <h3>This is a Little about My Portfolio</h3>
        <div className="portfolio__item-ctn">
          <a href="https://github.com/name0-Sansnom?tab=repositories" className='btn'>Github</a>
        <a href="" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={IMG6} alt="" />
        </div>
        <h3>This is a Little about My Portfolio</h3>
        <div className="portfolio__item-ctn">
          <a href="https://github.com/name0-Sansnom?tab=repositories" className='btn'>Github</a>
        <a href="" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio