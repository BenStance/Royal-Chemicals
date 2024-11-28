import React from "react";
import "../../Assets/Styles/Footer.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram,FaWhatsapp,FaArrowRight } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer-container">
            {/* // Google Map Section */}
            <div className="footer-section map-section">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3304.938883940759!2d28.0032334!3d-26.2186139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b1d8b29b379%3A0x9c18aaf3b2d1b4c1!2sPlanet%20Ave%2C%20Crown%20Mines%2C%20Johannesburg%2C%202093!5e0!3m2!1sen!2sza!4v1701028992000!5m2!1sen!2sza"
                width="100%"
                height="250"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            ></iframe>
            </div>



            {/* Contact Information Section */}
            <div className="contact-section" id="footer">
    <div className="quote-section">
        <h4 className="quote-heading">Your Success, Our Priority</h4>
        <div className="quote-underline"></div>
        <p className="subtitle">Get a Quote<FaArrowRight/></p>
    </div>
    <div className="contact-info-section">
        <h4 className="contact-heading">Contact Us</h4>
        <div className="contact-underline"></div>
        <div className="contact-info">
            <p><FaEnvelope /> royallubricants@info.co.sz</p>
            <p><FaPhone /> +27 67 051 7358</p>
            <p><FaMapMarkerAlt /> 73 Planet Avenue, Crown Mines, Johannesburg, South Africa</p>
            <p><FaWhatsapp /> +27 67 051 7358</p>
            <p><FaInstagram /> @Royal_Chemicals</p>
        </div>
    </div>
</div>


            {/* Copyright Section */}
            <div className="footer-section copyright-section">
                <p>&copy; {new Date().getFullYear()} All rights reserved | <a href="/privacy-policy"><strong>Privacy Policy</strong></a></p>
            </div>
        </footer>
    );
}

export default Footer;
