import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Languages from './Languages';
import Other from './Other';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h1 className="section__title">Skills</h1>
        <span className="section__subtitle">Technical Lvl</span>
        <div className="skills__container container grid ">
           <Languages/>
            <Frontend />
            <Backend /> 
            <Other/>
            
        </div>
    </section>
  );
}

export default Skills;