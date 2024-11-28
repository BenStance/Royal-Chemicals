import React from "react";
import "../../Assets/Styles/Navigation.css";
import { Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaShoppingBag, FaUser, FaSearch } from "react-icons/fa";
import logo from "../../Assets/Images/logo.jpg";

function NavBar() {
    return (
        <header>
            {/* First Section */}
            <div className="navbar-top d-flex align-items-center justify-content-between">
                <div className="navbar-item"> 
                    <FaEnvelope /> royallubricants@info.co.sz
                </div>
                <div className="navbar-item">
                    <FaPhone /> +27 67 051 7358
                </div>
                <div className="navbar-item">
                    <FaMapMarkerAlt /> 73 Planet Avenue, Crown Mines, Johannesburg, South Africa
                </div>
            </div>

            {/* Second Section */}
            <div className="navbar-middle d-flex align-items-center justify-content-between">
                <div className="navbar-logo d-flex align-items-center">
                    <img src={logo} alt="Logo" className="logo-icon" />
                    <span className="brand-name">Royal Chemicals</span>
                </div>
                
                <div className="navbar-search d-flex align-items-center">
                    <input type="text" className="form-control search-input" placeholder="I am Looking for..." />
                    <Button className="search-icon" variant="link">
                        <FaSearch className="fa fa-search" />
                    </Button>
                </div>

                <div className="navbar-icons d-flex align-items-center">
                    <FaHeart className="icon" title="Favorites" />
                    <FaShoppingBag className="icon" title="Cart" />
                    <FaUser className="icon user-icon" title="Login/Register" />
                </div>
            </div>

            {/* Third Section */}
            <div className="navbar-bottom d-flex justify-content-around">
                <Nav className="me-auto">
                    <strong>
                        <NavLink to="/" className="menu-link" activeClassName="active-link">Home</NavLink>
                        <NavLink to="/about-us" className="menu-link" activeClassName="active-link">About Us</NavLink>
                        <NavLink to="/our-products" className="menu-link" activeClassName="active-link">Products</NavLink>
                        <Link to="footer" smooth={true} duration={1000} className="menu-link">Contact Us</Link>
                        <NavLink to="/catalogue"  className="menu-link" activeClassName="active-link">PDF Catalogue</NavLink>
                    </strong>
                </Nav>
            </div>
        </header>
    );
}

export default NavBar;
