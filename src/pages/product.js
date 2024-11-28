import React, { useState } from "react";
import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import "../Assets/Styles/product.css"; // Ensure the CSS file exists

// Placeholder images for products and barcodes
import placeholderImage from "../Assets/Images/Product.jpeg";
import barcodeImage from "../Assets/Images/baecode.png";

// Product Data
const productCategories = [
  {
    category: "Motor Oils",
    products: [
      "Ignite Engine Oil SAE40 5 Litres",
      "Ignite Engine Oil 15W-40 5 Litres",
      "Ignite Engine Oil 20W-50 5 Litres",
      "Ignite Engine Oil SAE40 1 Litre",
      "Ignite Engine Oil 15W-40 1 Litre",
      "Ignite Engine Oil 20W-50 1 Litre",
      "Ignite Engine Oil SAE40 10x500ml (Shrink)",
      "Ignite Engine Oil 15W-40 500ml",
      "Ignite Engine Oil 20W-50 500ml",
      "Ignite Engine Oil SAE40 20 Litres",
      "Ignite Engine Oil 15W-40 20 Litres",
      "Ignite Engine Oil 20W-50 20 Litres",
      "Ignite Engine Oil SAE40 210 Litres",
      "Ignite Engine Oil 15W-40 210 Litres",
      "Ignite Engine Oil 20W-50 210 Litres",
    ],
  },
  {
    category: "Motor Lubricants",
    products: [
      "Royale Brake Fluid DOT 4 20 Litres",
      "Royale Brake Fluid DOT 4 5 Litres",
      "Royale Brake Fluid DOT 4 500ml",
      "Royale Brake Fluid DOT 4 200ml",
    ],
  },
  {
    category: "Masterbond Contact Adhesives",
    products: [
      "Masterbond Contact Adhesives 12x70ml (Shrink)",
      "Masterbond Contact Adhesives 12x100ml",
    ],
  },
];

// Generate random star ratings for products
const generateStarRating = () => {
  const stars = Math.floor(Math.random() * 5) + 3; // Random rating between 3 and 5
  return Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`star ${index < stars ? "filled-star" : "empty-star"}`}
    >
      &#9733;
    </span>
  ));
};

const Product = () => {
  const [cartItems, setCartItems] = useState([]); // State to track cart items

  // Add product to cart
  const handleAddToCart = (productName) => {
    setCartItems((prevItems) => [...prevItems, productName]);
  };

  // Generate WhatsApp URL
  const generateWhatsAppLink = () => {
    const message = `Here is my quotation request:\n\n${cartItems
      .map((item, index) => `${index + 1}. ${item}`)
      .join("\n")}\n\nPlease review the quotation and get back to me.`;
    return `https://wa.me/27810900093?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="product-page container py-5">
      <h1 className="product-page-title text-center mb-5">
        Explore Our Products
      </h1>

      {/* Product Categories */}
      {productCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="product-category-section mb-5">
          <h2 className="product-category-title text-primary mb-4">
            {category.category}
          </h2>

          <Row>
            {category.products.map((product, productIndex) => (
              <Col lg={4} md={6} sm={12} key={productIndex} className="mb-4">
                <Card className="product-card shadow-sm">
                  <div className="product-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={placeholderImage}
                      className="product-image"
                      alt={product}
                    />
                    <div className="hover-overlay">
                      <p className="hover-text">Get {product}</p>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="product-name">{product}</Card.Title>
                    <div className="product-rating mb-3">
                      {generateStarRating()}
                    </div>
                    <div className="product-barcode mb-3">
                      <img
                        src={barcodeImage}
                        alt="Product Barcode"
                        className="barcode-image"
                      />
                    </div>
                    <Button
                      variant="primary"
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}

      {/* Cart Section */}
      <div className="cart-section p-4 bg-light rounded shadow-sm">
        <h3 className="cart-title mb-4 text-center text-primary">Your Cart</h3>
        {cartItems.length > 0 ? (
          <ListGroup className="cart-items">
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index} className="cart-item">
                {index + 1}. {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p className="text-center text-muted">Your cart is empty.</p>
        )}
        <div className="text-center mt-4">
          <Button
            variant="success"
            className="whatsapp-btn"
            href={generateWhatsAppLink()}
            target="_blank"
          >
            Send Quotation via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
