import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import "../Assets/Styles/carousel.css";
import contpic1 from "../Assets/Images/contpic1.jpg";
import contpic2 from "../Assets/Images/contpic2.jpg";
import contpic3 from "../Assets/Images/contpic3.jpg";

function HomeCarousel() {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      once: true,
    });
  }, []);

  return (
    <Carousel className="custom-carousel" fade interval={3000}>
      <Carousel.Item>
        <div className="carousel-item-container">
          <img className="carousel-image" src={contpic1} alt="First slide" />
          <div className="carousel-overlay"></div>
          <div className="carousel-caption">
            <h3 className="carousel-tagline" data-aos="fade-down">
              Ignite Your Engine, Elevate Your Drive
            </h3>
            <a href="./get-started">
              <Button className="carousel-button" data-aos="fade-up">
                <Link to="explore" smooth={true} duration={1000} className="menu-link">Explore More</Link>
              </Button>
            </a>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-item-container">
          <img className="carousel-image" src={contpic2} alt="Second slide" />
          <div className="carousel-overlay"></div>
          <div className="carousel-caption">
            <h3 className="carousel-tagline" data-aos="fade-down">
              Precision Engineered, Power Perfected
            </h3>
            <a href="#contact">
              <Button className="carousel-button" data-aos="fade-up">
              <Link to="footer" smooth={true} duration={1000} className="menu-link">Contact Us</Link>
              </Button>
            </a>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-item-container">
          <img className="carousel-image" src={contpic3} alt="Third slide" />
          <div className="carousel-overlay"></div>
          <div className="carousel-caption">
            <h3 className="carousel-tagline" data-aos="fade-down">
              Experience the Royal Touch, Every Mile
            </h3>
            <a href="#learn-more">
              <Button className="carousel-button" data-aos="fade-up">
              <Link to="product" smooth={true} duration={1000} className="menu-link">Learn More</Link>
              </Button>
            </a>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;