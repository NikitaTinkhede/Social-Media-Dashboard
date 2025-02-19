import React from "react";
import { FaFacebook } from "react-icons/fa";
import BarGraph from "./BarGraph";
import DashboarSecbarChar from "./DashboardSecbarChar";

// import "./Facebook.css";
const Facebook = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-center">
          <a className="navbar-brand text-white mx-auto" href="#">
            <FaFacebook size={40} color="#3b5998" />
            Facebook Profile
          </a>
        </nav>
      </div>

      {/* Stats Cards */}
      <div className="container">

      <div className="row justify-content-center mt-4">
        <div className="col-md-2">
          <div className="card text-center p-3">
            <h5>Impression</h5>
            <p className="display-6">354</p>
            <p className="positive">Fab 2025: 147</p>
          </div>
        </div>

        <div className="col-md-2">
          <div className="card text-center p-3">
            <h5>Followers</h5>
            <p className="display-6">294</p>
            <p className="positive">Fab 2025: 187</p>
          </div>
        </div>

        <div className="col-md-2">
          <div className="card text-center p-3">
            <h5>Reaches</h5>
            <p className="display-6">405</p>
            <p className="positive">Fab 2025: 251</p>
          </div>
        </div>

        <div className="col-md-2">
          <div className="card text-center p-3">
            <h5>Profile Views</h5>
            <p className="display-6">463</p>
            <p className="positive">Fab 2025: 173</p>
          </div>
        </div>

        <div className="col-md-2">
          <div className="card text-center p-3">
            <h5>Reach Rate</h5>
            <p className="display-6">14.82%</p>
            <p className="positive">Fab 2025: 5.9%</p>
          </div>
        </div>

        <div className="graph-container">
          <BarGraph />
          <DashboarSecbarChar />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Facebook;
