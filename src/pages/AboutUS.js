import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from "react-scroll";
import { Row, Col } from 'react-bootstrap';
import '../Assets/Styles/AboutUs.css'; // CSS file to be created
import product from '../Assets/Images/Product.jpeg';
import qualityImage from '../Assets/Images/quality.jpeg';
import partnershipImage from '../Assets/Images/partnership.jpeg';
import service1Image from '../Assets/Images/contpic1.jpg';
import service2Image from '../Assets/Images/contpic2.jpg';
import service3Image from '../Assets/Images/contpic3.jpg';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1100,
            once: true,
        });
    }, []);

    const services = [
        {
            title: "Innovative Motor Oils",
            description: "Experience top-tier lubrication and unmatched engine protection with our cutting-edge motor oils.",
            image: service1Image,
        },
        {
            title: "Sustainable Chemicals",
            description: "Eco-friendly industrial solutions tailored to meet global sustainability standards.",
            image: service2Image,
        },
        {
            title: "Premium Lubricants",
            description: "High-performance automotive lubricants ensuring smooth and long-lasting engine performance.",
            image: service3Image,
        },
    ];

    return (
        <div className="aboutus-page">
            {/* Hero Section */}
            <section className="aboutus-hero-section text-center text-white">
                <div className="container">
                    <h1 className="aboutus-hero-title">About Royal Chemicals and Motor Oil</h1>
                    <p className="aboutus-hero-subtitle">
                        Driving Innovation. Delivering Excellence. Elevating Performance.
                    </p>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="aboutus-why-us py-5">
                <div className="container">
                    <Row className="align-items-center">
                        <Col lg={6} data-aos="fade-right">
                            <img src={product} alt="Why Choose Us" className="img-fluid aboutus-image rounded" />
                        </Col>
                        <Col lg={6} data-aos="fade-left">
                            <h2 className="aboutus-section-title">Why Choose Us</h2>
                            <p className="aboutus-text">
                                At Royal Chemicals and Motor Oil, we believe in quality, trust, and innovation. From our humble beginnings to becoming a trusted industry leader, our mission has always been to deliver the best products to our clients. Our family-run operation emphasizes integrity and customer satisfaction, making us your go-to partner for all automotive and industrial needs.
                            </p>
                            {/* <button className="btn aboutus-btn-primary">
                                Learn More
                            </button> */}
                        </Col>
                    </Row>
                </div>
            </section>

            {/* Services Section */}
            <section className="aboutus-services py-5 bg-light">
                <div className="container">
                    <h2 className="text-center aboutus-section-title">Our Services</h2>
                    <Row className="mt-4">
                        {services.map((service, index) => (
                            <Col md={4} key={index} data-aos="fade-up">
                                <div className="aboutus-service-card text-center">
                                    <img src={service.image} alt={service.title} className="aboutus-service-image" />
                                    <h4 className="aboutus-service-title">{service.title}</h4>
                                    <p className="aboutus-service-description">{service.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>

            {/* Legacy Section */}
            <section className="aboutus-legacy py-5">
                <div className="container">
                    <Row className="align-items-center">
                        <Col lg={6} data-aos="fade-right">
                            <h2 className="aboutus-section-title text-white">A Legacy of Excellence</h2>
                            <p className="aboutus-text text-white">
                                With generations of expertise, we’ve crafted a reputation for delivering top-notch automotive and industrial solutions. Our products are designed to redefine performance and reliability, making us a household name in the industry.
                            </p>
                        </Col>
                        <Col lg={6} data-aos="fade-left">
                            <img src={qualityImage} alt="Legacy of Excellence" className="img-fluid aboutus-image rounded" />
                        </Col>
                    </Row>
                </div>
            </section>

            {/* Partnership Section */}
            <section className="aboutus-partnership py-5 bg-light">
                <div className="container">
                    <Row className="align-items-center">
                        <Col lg={6} data-aos="fade-right">
                            <img src={partnershipImage} alt="Our Partnerships" className="img-fluid aboutus-image rounded" />
                        </Col>
                        <Col lg={6} data-aos="fade-left">
                            <h2 className="aboutus-section-title">Partnering for Success</h2>
                            <p className="aboutus-text">
                                Our success is rooted in our strong partnerships. We collaborate with businesses and individuals to deliver customized solutions, ensuring mutual growth and satisfaction. With Royal Chemicals and Motor Oil, you're not just a client; you're part of our family.
                            </p>
                            <button className="btn aboutus-btn-primary">
                                <Link to="footer" smooth={true} duration={1000} className="menu-link">
                                    Contact Us
                                </Link>
                            </button>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
