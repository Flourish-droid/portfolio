import React from 'react'
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';


const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              Hi! I'm Flourish En-Haddah Anokam, a Project Manager and Fullstack Developer passionate about transforming ideas into reality. With expertise in managing complex projects and developing scalable web applications, I seamlessly bridge technical excellence with project execution.
            </p>
             <a href="/resume.pdf" className="btn">Download CV</a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Project Management</h3>
                <span className="skills_number ">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage management">

                </span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Fullstack Development</h3>
                <span className="skills_number ">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage development">

                </span>
              </div>
            </div>

             <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Database Management</h3>
                <span className="skills_number ">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage database">

                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <AboutBox />

    </section>
  )
}

export default About
