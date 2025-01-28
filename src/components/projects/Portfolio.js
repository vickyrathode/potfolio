import React from 'react';
import Projects from './Projects';
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <h1 className="section__title">Pojects</h1>
        <span className="section__subtitle">Recent Projects</span>

        <Projects />
    </section>
  );
}

export default Portfolio;