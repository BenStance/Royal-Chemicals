import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import "../Assets/Styles/Home.css";
import logo2 from "../Assets/Images/vendor1.jpeg";
import logo3 from "../Assets/Images/vendor2.png";
import logo5 from "../Assets/Images/Vendor4.webp";
import logo7 from "../Assets/Images/Vendor6.png";
import logo8 from "../Assets/Images/Vendor7.png";
import logo9 from "../Assets/Images/logo.jpg";
import logo10 from "../Assets/Images/vendor9.png";
import logo1 from "../Assets/Images/product1.png";
import logo4 from "../Assets/Images/product2.png";
import About from "./About";
import HomeCarousel from "./carousel";
import Portfolio from "./portfolio";
import Team from "./Team";
function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1100, // Duration of animation (in ms)
            once: true, // Whether animation should happen only once
        });
    }, []);

    const logos = [logo2, logo3,logo1, logo5, logo7, logo8, logo9,logo4, logo10];

    return (
        <div>
            <HomeCarousel />
            <section className="vendor-section d-flex align-items-center">
                <div className="logo-track d-flex">
                    {logos.map((logo, index) => (
                        <div className="vendor-logo" key={index}>
                            <img src={logo} alt={`Vendor ${index + 1}`} />
                        </div>
                    ))}
                    {/* Repeat the logos for seamless scrolling */}
                    {logos.map((logo, index) => (
                        <div className="vendor-logo" key={`repeat-${index}`}>
                            <img src={logo} alt={`Vendor ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </section>
<About />
<Portfolio/>
<Team />
           
        </div>
    );
}

export default Home;
