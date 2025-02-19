import logo from './logo.svg';
import './App.css';


     import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
import Settings from './components/Settings';
import Contact from './components/Contact';
import LoginSign from './components/LoginSign';
import InstaDashboard from './components/InstaDashboard';
import TwitterDashboard from './components/TwitterDashboard';
import Linkedin from './components/Linkedin';
import YouTube from './components/YouTube';
import Facebook from './components/Facebook';

import './App.css';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginSign />} />
      <Route path="/home" element={<Home />} />
      <Route path="/socialmedia" element={<Dashboard />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/setting" element={<Settings />} />
      <Route path="/socialmedia/instagram" element={<InstaDashboard />} />
      <Route path="/socialmedia/twitter" element={<TwitterDashboard />} />
      <Route path="/socialmedia/linkedin" element={<Linkedin />} />
      <Route path="/socialmedia/youtube" element={<YouTube />} />
      <Route path="/socialmedia/facebook" element={<Facebook />} />
    </Routes>
  </BrowserRouter>
    
  );
}


export default App;
