import React, { useState, useEffect } from 'react';
import '../Assets/Styles/portfolio.css';
import barcode from '../Assets/Images/baecode.png';
import product from "../Assets/Images/Product.jpeg";



const products = [
    {
      id: 1,
      title: 'IGNITE ENGINE OIL SAE40 5LITRES',
      description: 'A high-performance engine oil designed to ensure smooth engine operation, reducing wear and enhancing efficiency for heavy-duty vehicles.',
      barcode: barcode,
      image: product,
    },
    {
      id: 2,
      title: 'ROYALE BRAKE FLUID DOT 4 20LITRES',
      description: 'Premium brake fluid engineered for superior performance in hydraulic brake systems, providing reliable safety in all driving conditions.',
      barcode: barcode,
      image: product,
    },
    {
      id: 3,
      title: 'MASTERBOND CONTACT ADHESIVES 12*70ML (SHRINK)',
      description: 'Industrial-grade adhesive providing strong, durable bonds for a wide range of materials, ideal for construction and repairs.',
      barcode: barcode,
      image: product,
    },
    {
      id: 4,
      title: 'IGNITE ENGINE OIL 15W-40 20LITRES',
      description: 'Designed to keep engines running smoothly under extreme conditions, perfect for both on-road and off-road vehicles.',
      barcode: barcode,
      image: product,
    },
    {
      id: 5,
      title: 'IGNITE ENGINE OIL SAE40 210LITRES',
      description: 'Bulk motor oil designed for industrial and commercial vehicles, ensuring long-lasting engine health with cost efficiency.',
      barcode: barcode,
      image: product,
    },
  ];
  
const Portfolio = () => {     
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 4 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 4 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsAutoScroll(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const autoScroll = setInterval(() => {
      if (isAutoScroll) {
        handleNextClick();
      }
    }, 4000);

    return () => {
      clearInterval(autoScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isAutoScroll, currentIndex]);

  return (
    <section className="portfolio-section" id="product">
      <h2 className="section-title">Our Products</h2>
      <div className="portfolio-container">
        <button className="arrow left-arrow" onClick={handlePrevClick}>
          &#8249;
        </button>
        <div className="portfolio-carousel">
          <div
            className="portfolio-grid"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
            }}
          >
            {products.map((product) => (
              <div className="portfolio-card" key={product.id}>
                <img src={product.image} alt={product.title} className="portfolio-image" />
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{product.title}</h3>
                  <p className="portfolio-description">{product.description}</p>
                  <div className="portfolio-barcode">
                    <img src={product.barcode} alt="Product Barcode" className="barcode-image" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
