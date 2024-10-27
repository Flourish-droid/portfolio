import React from 'react';
import "./contact.css"; 

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's Talk About Everything!</h3>
          <p className="contact_details">Don't like forms, Send me an email. 👋</p>
        </div>

        <form action="" className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input type="text" className="contact_form-input" placeholder='Insert Your Name Here'/>
            </div>

            <div className="contact_form-div">
              <input type="email" className="contact_form-input" placeholder='Insert Your Email Here'/>
            </div>

            <div className="contact_form-div">
              <input type="text" className="contact_form-input" placeholder='Insert Your Subject Here'/>
            </div>

            <div className="contact_form-div  contact_form-area">
              <textarea name="" id="" cols="30" rows="10" className='contact_form-input' 
              placeholder='Write Your Message'></textarea>
            </div>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;