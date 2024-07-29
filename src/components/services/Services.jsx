import React, { useState } from "react";
import "./Services.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";

const serviceData = [
  {
    title: "Interior Design",
    description:
      "We always provide the best for our clients in any case so that all their wishes can be realised and have.",
    image:
      "https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8fHww",
  },
  {
    title: "Sticky Chair",
    description:
      "We always provide the best for our clients in any case so that all their wishes can be realised and have.",
    image:
      "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8fDB8fHww",
  },
  {
    title: "Consultant",
    description:
      "We always provide the best for our clients in any case so that all their wishes can be realised and have.",
    image:
      "https://plus.unsplash.com/premium_photo-1661339332804-fe043db2ebf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlJTIwY29uc3VsdGFudHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");

  const handleMouseEnterContainer = () => {
    setIsVisible(true);
  };

  const handleMouseLeaveContainer = () => {
    setIsVisible(false);
  };

  const handleMouseEnterElem = (image) => {
    setBackgroundImage(image);
    setIsVisible(true);
  };

  return (
    <section className="services section" id="services">
      <div className="section__head container grid">
        <h2 className="section__title">
          What Can We Do For Your Home
        </h2>
        <p className="section__desc">
          We always provide the best for our clients in any case so that all
          their wishes can be realized and have a decent, comfortable and
          aesthetically pleasing place to live. Pleasing environment for the
          people using the space.
        </p>
      </div>

      <div className="services_container">
        <div
          id="elem-container"
          onMouseLeave={handleMouseLeaveContainer}
          onMouseEnter={handleMouseEnterContainer}
          className="services_content container grid"
        >
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="services_card"
              onMouseLeave={handleMouseLeaveContainer}
              onMouseEnter={() => handleMouseEnterElem(service.image)}
            >
              <div className="services_card-title">
                <h2>{service.title}</h2>
                <svg
                  className="services_card-icon"
                  width="60"
                  height="60"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M73 3C73 1.34314 71.6569 -9.42799e-07 70 -9.42799e-07H43C41.3431 -9.42799e-07 40 1.34314 40 3C40 4.65685 41.3431 6 43 6H67V30C67 31.6569 68.3431 33 70 33C71.6569 33 73 31.6569 73 30V3ZM5.12132 72.1213L72.1213 5.12132L67.8787 0.878679L0.87868 67.8787L5.12132 72.1213Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span>{service.description}</span>
            </div>
          ))}
        </div>
      </div>

      {isVisible && (
        <div
          className="services_fixed-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}
    </section>
  );
}

export default Services;
