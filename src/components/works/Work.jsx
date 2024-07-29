import React from "react";
import './Work.css'
import image1 from '../../assets/Rectangle 620.png'
import image2 from '../../assets/Rectangle 621.png'
import image3 from '../../assets/Rectangle 620 (1).png'

const works = [
    {
        title: "Home Interior",
        desc: "Taking a minimalist and clean theme is perfect for this room,and the clint is happy.",
        Image: image1
    },

    {
        title: "Decorate Design",
        desc: "This room is very minamalist and comfortable so that clients can work more focused and also calmy.",
        Image: image2
    },

    {
        title: "Sofa Decorate",
        desc: "Not only minimalist and monochrome,this room also has several trees that can make this room more comfortable and seem elegant",
        Image: image3
    }
]

function Work() {
  return (
    <section className="works section " id="works">
      <div className="section__head container grid">
        <h2 className="section__title">Our all projects for clients</h2>
        <p className="section__desc">
          We always provide the best for our clients in any case so that all
          their wishes can be realized and have a decent, comfortable and
          aesthetically pleasing place to live. Pleasing environment for the
          people using the space.
        </p>
      </div>
      <div className="works_container container grid">
        {works.map((works, index)=>(
            <div 
            key={index}
            className={`works_item grid ${index === 1 ? 'works_item2' : ''}`}>
            <div className={`works_item-content ${index === 1 ? 'works_item-content2' : ''}`}>
              <div>
                <h3 className="works_item-title">{works.title}</h3>
                <p className="works_item-desc">
                  {works.desc}
                </p>
              </div>
  
              <div className="works_item-button">
                  <span>View Project</span>
                  <div className="works_item-button-icon">
                  <i class="uil uil-arrow-right"></i>
                  </div>
              </div>
            </div>
  
            <div className="works_item-image">
              <img src={works.Image} alt="image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
