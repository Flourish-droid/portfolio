import React from 'react';

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
      <div className="about_box">
        <i className="about_icon icon-fire"></i>

        <div className="">
          <h3 className="about_title">198</h3>
           <span className="about_subtitle">Project Completed</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-cup"></i>

        <div className="">
          <h3 className="about_title">5670</h3>
          <span className="about_subtitle">Cups Of Coffee</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-people"></i>

        <div className="">
          <h3 className="about_title">427</h3>
          <span className="about_subtitle">Satisfied Clients</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-badge"></i>

        <div className="">
          <h3 className="about_title">35</h3>
          <span className="about_subtitle">Nominees Winner</span>
        </div>
      </div>
    </div>
  )
}

export default AboutBox
