import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer section ">
      <div className="section__head footer_head container grid">
        <h2 className="section__title footer_title">
          Let's Work <br />
          Together
        </h2>
        <div>
          <p className="section__desc">
          We always provide the best for our clients in any case so that all
          their wishes can be realized and have a decent, comfortable and
          aesthetically pleasing place to live. Pleasing environment for the
          people using the space. 
        </p>

        <button className="button footer_button">
            Contact Us
          </button>
        </div>
        
      </div>

      <div className="footer_container container grid">
        <div className="footer_items grid">
          <div className="footer_item">
            <h3 className="footer_item-title">Furniture World</h3>
            <div className="footer_item-icon">
              <i className="uil uil-instagram-alt"></i>
              <i className="uil uil-facebook"></i>
              <i className="uil uil-twitter"></i>
            </div>
          </div>
          <div className="footer_item">
            <h3 className="footer_item-title">Address</h3>
            <p>356, road - 3, NewYork, United State</p>
          </div>
          <div className="footer_item">
            <h3 className="footer_item-title">Call Us</h3>
            <p>+0123 57896857</p>
            <p>+0123 57896857</p>
            <p>xyzfreebook@gmail.com</p>
          </div>
          <div className="footer_item">
            <h3 className="footer_item-title">Our Polices</h3>
           <p>Privacy Policies</p> 
           <p>Terms of use</p> 
           <p>Refund Policy</p> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
