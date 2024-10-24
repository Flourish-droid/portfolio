import React from 'react';
import "./testimonial.css";
import Image1 from "../../assets/avatar-1.svg"
import Image3 from "../../assets/avatar-3.svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍"
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍"
  },
];


const Testimonial = () => {
  return (
    <section className="testimonials container section" id='testimonial'>
      <h2 className="section_title">
        Clients & Reviews
      </h2>
      <div className="testimonial_container grid">
        {data.map(({id, image, title, subtitle, comment}) => {
          return(
            <div className="testimonial_item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials_title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonial
