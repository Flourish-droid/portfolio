import React from 'react';
import "./portfolio.css";
import Menu from './Menu';
import { useState } from 'react';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curlElem) => {
      return curlElem.category === categoryItem;
    })

    setItems(updatedItems)
  }

  return (
    <section className="work_container section" id="portfolio">
      <h2 className="section_title">Recent Works</h2>
      
      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>Everything</span>
        <span className="work_item" onClick={() => filterItem("Management")}>Management</span>
        <span className="work_item" onClick={() => filterItem("Development")}>Development</span>
        <span className="work_item" onClick={() => filterItem("Design")}>Design</span>
        <span className="work_item" onClick={() => filterItem("Branding")}>Branding</span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const{id, image, title, category} = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href="#contact" className="work_button">
                <i className="icon_link work_button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Portfolio;

