import React from "react";
import "./Home.css";
import {Link} from 'react-scroll'
import image1 from "../../assets/Rectangle 615.png";
import image2 from "../../assets/Rectangle 612.png";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_left">
          <h1 className="home_title">
            Let's Design <br /> Your Home <br /> Very Easily
          </h1>
          <button className="home_button button ">Get started</button>

          <div className="home_left-bottom grid">
            <div className="home_left-img">
              <img src={image1} alt="" />
            </div>

            <Link 
            to="about"
            className="home_scroll">
              <div className="home_scroll-item">
                <i className="uil uil-arrow-down"></i>
              </div>
              <span>
                scroll down <br /> to explore
              </span>
            </Link>
          </div>
        </div>

        <div className="home_right">
          <div className="home_right-content">
            <p className="home_right-content-desc">
              Interior design is the art of science of enhancing the interior of
              a building to achieve a healthier and more aesthetically pleasing
              environment for the people using the space.
            </p>

            <div className="home_right-content-bottom">
              <div className="home_content-bottom-item">
                <h3>400+</h3>
                <span>clients</span>
              </div>
              <div className="home_content-bottom-item">
                <h3>2.5K+</h3>
                <span>products</span>
              </div>
              <div className="home_content-bottom-item">
                <h3>12+</h3>
                <span>year experience</span>
              </div>
            </div>
          </div>
          <div className="home_right-img">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
