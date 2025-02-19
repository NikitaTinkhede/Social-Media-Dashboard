import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaBars, FaMoon, FaBriefcase, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import BarGraph from './BarGraph';
import DemoSlider from './DemoSlide';
import DashboarSecbarChar from './DashboardSecbarChar';
import InstaDashboard from './InstaDashboard';
import Facebook from './Facebook';
import TwitterDashboard from './TwitterDashboard';
import Linkedin from './Linkedin';
import YouTube from './YouTube';
import './styled/Dashboard.css';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div>
      {/* Navbar */}
      <div className="container">
        <nav className="navbar-1 navbar-expand-lg navbar-light bg-dark d-flex justify-content-between">
          <FaBars className="icon text-white ml-2 mr-3" size={24} onClick={toggleSidebar} style={{ cursor: "pointer" }} />
          <h4 className="navbar-brand text-white">Social Media Dashboard</h4>
          <div className="d-flex align-items-center gap-3 text-white mr-3 ml-3">
            <FaMoon className="icon" size={24} />
            <FaUserCircle className="icon" size={24} />
          </div>
        </nav>
      </div>

      {/* Sidebar */}
      <div className={`offcanvas offcanvas-start ${showSidebar ? 'show' : ''}`} style={{ visibility: showSidebar ? 'visible' : 'hidden' }}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Social Links</h5>
          <button type="button" className="btn-close" onClick={toggleSidebar}></button>
        </div>
        <div className="offcanvas-body">
          <Link to="/socialmedia/instagram">Instagram</Link>
          <Link to="/socialmedia/youtube">YouTube</Link>
          <Link to="/socialmedia/linkedin">LinkedIn</Link>
          <Link to="/socialmedia/twitter">Twitter</Link>
          <Link to="/socialmedia/facebook">Facebook</Link>
          <Link to="/socialmedia/naukri">Naukri</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mt-4">
        <div className="row">
          {[{ name: "Facebook", icon: FaFacebook, color: "#3b5998" },
            { name: "Instagram", icon: FaInstagram, color: "#E4405F" },
            { name: "YouTube", icon: FaYoutube, color: "#FF0000" },
            { name: "Twitter", icon: FaTwitter, color: "#1DA1F2" },
            { name: "LinkedIn", icon: FaLinkedin, color: "#0077B5" },
            { name: "Naukri", icon: FaBriefcase, color: "#555" }]
            .map((social, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card text-center p-3">
                  <social.icon size={40} color={social.color} />
                  <h5>@username</h5>
                  <p className="display-6">1987</p>
                  <p>FOLLOWERS</p>
                  <p className="positive">+12 Today</p>
                </div>
              </div>
          ))}
        </div>

        {/* Graphs */}
        <div className="graph-container">
          <BarGraph />
          <DashboarSecbarChar />
        </div>

        <h3 className="mt-4">Overview - Today</h3>

        <div className="row">
          {[{ name: "Facebook Pages", icon: FaFacebook, color: "#3b5998" },
            { name: "Instagram", icon: FaInstagram, color: "#E4405F" },
            { name: "YouTube", icon: FaYoutube, color: "#FF0000" },
            { name: "Twitter Overview", icon: FaTwitter, color: "#1DA1F2" },
            { name: "LinkedIn Company", icon: FaLinkedin, color: "#0077B5" },
            { name: "Naukri", icon: FaBriefcase, color: "#555" }]
            .map((social, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card text-center p-3">
                  <social.icon size={40} color={social.color} />
                  <h5>{social.name}</h5>
                  <p className="display-6">1987</p>
                  <p>FOLLOWERS</p>
                  <p className="positive">+12 Today</p>
                </div>
              </div>
          ))}
        </div>

        <DemoSlider />
      </div>

      {/* Nested Routes for Social Media Pages */}
      <Routes>
        <Route path="instagram" element={<InstaDashboard />} />
        <Route path="youtube" element={<YouTube />} />
        <Route path="linkedin" element={<Linkedin />} />
        <Route path="twitter" element={<TwitterDashboard />} />
        <Route path="facebook" element={<Facebook />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
