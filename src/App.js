import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Components/NavBar';
import './Assets/Styles/App.css';
import Footer from './pages/Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './pages/AboutUS';
import OurProduct from './pages/product';
import Catalogue from './pages/Cataloge';

function App() {
  // State to track if the page is loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading process (like data fetching)
    setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 1000); // Adjust time as needed (2 seconds here)
  }, []);

  // If the page is still loading, show the loader
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner">
          <div className="semi-circle semi1"></div>
          <div className="semi-circle semi2"></div>
          <div className="semi-circle semi3"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app-container">
        {/* Navigation bar will always be displayed at the top */}
        <Navbar />

        <div className="app-content">
          <Routes>
            {/* Routes for your pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-products" element={<OurProduct />} />
            <Route path="/catalogue" element={<Catalogue />} />
            {/* Add other routes here as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
