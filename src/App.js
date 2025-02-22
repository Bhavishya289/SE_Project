import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const onLogin = () => setShowLogin(!showLogin);
  const onSignUp = () => setShowSignUp(!showSignUp);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        <div className="nav-right">
          <button className="nav-btn" onClick={onLogin}>Login</button>
          <button className="nav-btn" onClick={onSignUp}>Sign Up</button>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
            <button onClick={onLogin}>Close</button>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="modal">
          <div className="modal-content">
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign Up</button>
            </form>
            <button onClick={onSignUp}>Close</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="hero-section">
      <motion.h1
  className="title"
  initial={{ scale: 0.8, opacity: 0 }}  // Starts smaller and invisible
  animate={{ scale: 1.1, opacity: 1 }}  // Grows and fades in
  transition={{ duration: 0.4 }}  // Animation duration is 0.5 seconds
>
  PUREPUFF - Lung Detox Candies
</motion.h1>

        <p className="description_1">Designed for smokers and individuals exposed to pollution.</p>
        <p className="description_2">Satisfy Your Sweet Tooth, Not Your Cravings.</p>
        <button className="btn">Shop Now</button>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose PUREPUFF?</h2>
        <div className="features">
          <div className="feature-item">100% Natural Ingredients</div>
          <div className="feature-item">Scientifically Backed Formula</div>
          <div className="feature-item">Perfect for Smokers & Polluted Environments</div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="product-showcase">
        <h2>Our Best Selling Products</h2>
        <div className="products">
          <div className="product">
            <img src="/assets/candy_1.jpeg" alt="Candy 1" />
            <h3>Vita Puff Candy</h3>
            <p>₹70</p>
            <button className="btn">Add to Cart</button>
          </div>
          <div className="product">
            <img src="/assets/candy_2.jpeg" alt="Candy 2" />
            <h3>Berry Blast Candy</h3>
            <p>₹85</p>
            <button className="btn">Add to Cart</button>
          </div>
          <div className="product">
            <img src="/assets/candy_3.jpeg" alt="Candy 3" />
            <h3>Herba Puff Candy</h3>
            <p>₹80</p>
            <button className="btn">Add to Cart</button>
          </div>
          <div className="product">
            <img src="/assets/candy_4.jpeg" alt="Candy 4" />
            <h3>Meltos Candy</h3>
            <p>₹90</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <img src="/assets/image_1.jpeg" alt="Customer 1" />
            <p>"PUREPUFF has made a real difference in my breathing. Highly recommend!"</p>
            <span>- Stark, Smoker</span>
          </div>
          <div className="testimonial">
            <img src="/assets/image_2.jpeg" alt="Customer 2" />
            <p>"I live in a polluted city, and PUREPUFF helps me breathe easier every day."</p>
            <span>- Ciri, City Resident</span>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="subscription-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates and exclusive offers.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 PUREPUFF. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const About = () => (
  <div className="nav_cont">
    <h2 className="subtitle">About PUREPUFF</h2>
    <p className="description">A revolutionary product that helps detoxify lungs naturally.</p>
  </div>
);

const Contact = () => (
  <div className="nav_cont">
    <h2 className="subtitle">Contact Us</h2>
    <p className="description">Email: contact@gmail.com</p>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;