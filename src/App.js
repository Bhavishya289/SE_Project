import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";
import Login from "./Components/Login/Login";
import Search from "./Components/Search/Search";
import HostelDetails from "./Components/HostelDetails/HostelDetails";
import Footer from "./Components/Footer/Footer";

const MoreButton = () => {
  const svgContent = `
    <svg
      width="50px"
      height="20px"
      viewBox="0 0 66 43"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="arrow"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          class="two"
          d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
          fill="#FFFFFF"
        ></path>
        <path
          class="three"
          d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
          fill="#FFFFFF"
        ></path>
      </g>
    </svg>
  `;

  return (
    <button className="cta">
      <span className="span">More</span>
      <span
        className="second"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      ></span>
    </button>
  );
};

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {  // Add null check
        if (window.scrollY > 10) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="navbar-brand nav-link">UNIHOSTEL</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
      <Search />
      <div>
        <button className="nav-right">
          <Link to="/login" className="nav-link"> 
          Login </Link>
        </button>
      </div>
    </nav>
  );
};

const Home = () => {
  const hostels = [
    {
      id: 1,
      name: "Zenith Youth Boys Hostel",
      description: "A premium hostel with great amenities.",
      image: "/assets/hostel1.jpg",
      facilities: ["WiFi", "TV", "Laundry", "Game Zone", "AC"],
    },
    {
      id: 2,
      name: "Doon Scholars Boys Hostel",
      description: "Affordable and comfortable living space.",
      image: "/assets/hostel2.jpg",
      facilities: ["WiFi", "TV", "Laundry", "Game Zone", "AC"],
    },
    {
      id: 3,
      name: "Sona Boys Hostel",
      description: "Modern facilities and friendly staff.",
      image: "/assets/hostel3.jpg",
      facilities: ["WiFi", "TV", "Laundry", "Game Zone", "AC"],
    },
    {
      id: 4,
      name: "Agrasen Boys Hostel",
      description: "Modern facilities and friendly staff.",
      image: "/assets/hostel3.jpg",
      facilities: ["WiFi", "TV", "Laundry", "Game Zone", "AC"],
    },
    {
      id: 5,
      name: "Woodstock Girls Hostel",
      description: "Modern facilities and friendly staff.",
      image: "/assets/hostel3.jpg",
      facilities: ["WiFi", "TV", "Laundry", "Game Zone", "AC"],
    },
    {
      id: 6,
      name: "Elemento Girls Hostel",
      description: "Modern facilities and friendly staff.",
      image: "/assets/hostel3.jpg",
      facilities: ["WiFi", "TV", "Laundry", "Game Zone", "AC"],
    },
  ];

  const duplicatedHostels = [...hostels, ...hostels];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section">
        <motion.h1
          className="title"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          UNIHOSTEL - Find your way of living
        </motion.h1>

        <p className="description_1">Stay, Study</p>
        <p className="description_2">And live your best life.</p>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose UNIHOSTEL?</h2>
        <div className="features">
          <div className="feature-item">Hostels reviewed by students</div>
          <div className="feature-item">Best hostels</div>
          <div className="feature-item">Find every frame of hostel</div>
        </div>
      </section>

      {/* Hostel Showcase Section */}
      <section className="hostel-showcase">
        <div className="hostel-showcase-up">
          <span>
            <MoreButton/>
          </span>
        </div>
        <div className="hostels-container">
          <div className="hostels-track">
            <div className="hostels">
              {duplicatedHostels.map((hostel, index) => (
                <div className="card" key={`${hostel.id}-${index}`}>
                  <Link 
                    to={`/hostel/${hostel.id}`} 
                    state={{ hostel }}
                    className="card-link-wrapper"
                  >
                    <img className="card-image" src={hostel.image} alt={hostel.name} />
                    <div className="card-content">
                      <h3 className="hostel-name">{hostel.name}</h3>
                      <div className="facilities">
                        {hostel.facilities.map((facility, i) => (
                          <span key={i} className="facility">
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <img src="/assets/image_1.jpeg" alt="Customer 1" />
            <p>"UNIHOSTEL is a good website to see review of a hostel. Highly recommend!"</p>
            <span>- Stark</span>
          </div>
          <div className="testimonial">
            <img src="/assets/image_2.jpeg" alt="Customer 2" />
            <p>"I live in a polluted city, and UNIHOSTEL help me to find good hostel at unknown place."</p>
            <span>- Ciri</span>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

const About = () => (
  <div className="nav_cont">
    <h2 className="subtitle">About UniHostel</h2>
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
      <Route path="/login" element={<Login />} />
      <Route path="/hostel/:id" element={<HostelDetails />} />
    </Routes>
  </Router>
);

export default App;