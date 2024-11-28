import React, { useEffect } from 'react';
import '../Assets/Styles/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-scroll';
import { Row, Col } from 'react-bootstrap';
import aboutImage from '../Assets/Images/about-image.webp';
import contpic1 from '../Assets/Images/contpic1.jpg';
import contpic2 from '../Assets/Images/contpic2.jpg';
import contpic3 from '../Assets/Images/contpic3.jpg';
import product from '../Assets/Images/Product.jpeg';
import qualityImage from '../Assets/Images/Quality.png';
import partnershipImage from '../Assets/Images/patner.jpeg';

function About() {
    useEffect(() => {
        AOS.init({
            duration: 1100,
            once: true,
        });
    }, []);

    const serviceData = [
        {
            image: contpic1,
            title: "Premium Motor Oils for Maximum Engine Performance",
            description: "Our motor oils are engineered for superior lubrication and longevity, reducing engine wear and enhancing performance. Discover why professionals trust Royal Chemicals and Motor Oil for top-notch quality.",
        },
        {
            image: contpic2,
            title: "Eco-Friendly Industrial Chemicals: Powering Sustainable Solutions",
            description: "We offer a range of environmentally friendly chemicals designed to meet the highest industry standards. Perfect for businesses looking to minimize their environmental impact without sacrificing performance.",
        },
        {
            image: contpic3,
            title: "Automotive Lubricants: Keep Your Fleet Running Smoothly",
            description: "Our automotive lubricants are crafted to withstand harsh conditions, ensuring reliable protection and longevity for all types of vehicles. Trust Royal Chemicals and Motor Oil for products that keep your engines running smoothly.",
        },
    ];

    return (
        <div>
            {/* Service Cards Section */}
            <div className="container-fluid centered-container cont-bg2" data-aos="fade-up">
                <Row className="justify-content-center g-3 mt-5" style={{ width: '100%', margin: '0 auto' }}>
                    {serviceData.map((service, index) => (
                        <Col lg={4} md={6} sm={12} key={index} className="d-flex">
                            <div className="service-card">
                                <div
                                    className="service-image"
                                    style={{ backgroundImage: `url(${service.image})` }}
                                ></div>
                                <div className="overlay"></div>
                                <div className="service-content">
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
                                    <a href="#explore" className="explore-more">
                                        Explore More <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
            <section className="about-section container d-flex align-items-center" style={{ width: '80%', margin: '0 auto' }} id="explore">
                <div className="row w-100">
                    <div className="col-lg-6 col-md-12 content-section" data-aos="fade-right">
                        <h2 className="section-title">Why Choose Royal Chemicals and Motor Oil</h2>
                        <div className="title-underline"></div>
                        <p className="subtitle">We are a family-run affair.</p>
                        <p className="description">
                            Our approach is rooted in family values and business integrity. Starting as a small operation, Royal Chemicals and Motor Oil has grown by focusing on quality raw materials, quick turnaround times, and customer satisfaction. Today, we are a trusted supplier in the industry, known for delivering premium products and exceptional service. Our team is dedicated to solving issues swiftly, ensuring reliability, and upholding the highest standards.
                        </p>
                        <a href="/about-us" className="btn btn-primary read-more-btn home-button">Learn More</a>                    </div>
                    <div className="col-lg-6 col-md-12 image-section" data-aos="fade-left">
                        <img src={aboutImage} alt="About Royal Chemicals and Motor Oil" className="about-image" />
                    </div>
                </div>
            </section>
            <section className="about-section container d-flex align-items-center" style={{ width: '80%', margin: '0 auto' }}>
                <div className="row w-100">
                    <div className="col-lg-6 col-md-12 image-section" data-aos="fade-right">
                        <img src={product} alt="About Royal Chemicals and Motor Oil" className="about-image " />
                    </div>
                    <div className="col-lg-6 col-md-12 content-section2" data-aos="fade-left">
                        <h2 className="section-title">Elevate Your Vehicle's Performance</h2>
                        <div className="title-underline"></div>
                        <p className="subtitle">Experience the Royal Touch.</p>
                        <p className="description">
                            Discover the pinnacle of automotive care with Royal Chemicals and Motor Oil. Our meticulously crafted products are designed to optimize your vehicle's performance and longevity. From the roaring power of our Ignite Engine Oil SAE to the precise control of our Royale Brake Fluid DOT, and the enduring bond of our Masterbond Contact Adhesives, every product is a testament to our commitment to excellence.
                        </p>
                        <button className="btn btn-primary read-more-btn home-button">
                        <Link to="product" smooth={true} duration={1000} >Learn More</Link>                 
                        </button>
                    </div>
                </div>
            </section>
            <section className="about-section container d-flex align-items-center" style={{ width: '80%', margin: '0 auto' }}>
    <div className="row w-100">
        <div className="col-lg-6 col-md-12 content-section" data-aos="fade-right">
            <h2 className="section-title">A Legacy of Quality</h2>
            <div className="title-underline"></div>
            <p className="subtitle">Engineered for Performance</p>
            <p className="description">
                <b>For generations, we've been the driving force behind automotive excellence.</b> At Royal Chemicals and Motor Oil, we're more than just a brand. We're a legacy of innovation, quality, and unwavering commitment to pushing the boundaries of performance. Every product, every formula, is a testament to our dedication to crafting solutions that elevate your vehicle's potential.
            </p>
            <a href="/about-us" className="btn btn-primary read-more-btn home-button">Learn More</a>        </div>
        <div className="col-lg-6 col-md-12 image-section" data-aos="fade-left">
            <img src={qualityImage} alt="Quality Assurance" className="about-image" />
        </div>
    </div>
</section>
<section className="about-section container d-flex align-items-center" style={{ width: '80%', margin: '0 auto' }}>
    <div className="row w-100">
        <div className="col-lg-6 col-md-12 image-section" data-aos="fade-right">
            <img src={partnershipImage} alt="Partnering with You" className="about-image" />
        </div>
        <div className="col-lg-6 col-md-12 content-section2" data-aos="fade-left">
            <h2 className="section-title">Your Success, Our Priority</h2>
            <div className="title-underline"></div>
            <p className="subtitle">A Partnership Built on Trust</p>
            <p className="description">
                We're more than just a supplier. We're your partner in success. Our dedicated team is committed to providing exceptional support, from product selection to technical assistance. We're here to help you navigate the complexities of automotive care, ensuring that your vehicle performs at its peak. With our unwavering commitment to quality, reliability, and customer satisfaction, you can trust us to deliver the solutions you need to keep your business running smoothly.
            </p>
            <button className="btn btn-primary read-more-btn home-button">
            <Link to="footer" smooth={true} duration={1000}>Contact Us</Link>                 
            </button>
        </div>
    </div>
</section>
        </div>
    );
}

export default About;
