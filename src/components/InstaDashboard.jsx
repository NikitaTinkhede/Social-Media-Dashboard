import React from "react";
import { FaInstagram } from "react-icons/fa";
import BarGraph from "./BarGraph";
import "./styles/InstaDashboard.css";


const InstaDashboard = () => {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-center">
          <a className="navbar-brand text-white mx-auto" href="#">
            <FaInstagram size={40} color="#E4405F" />
            Instagram Profile
          </a>
        </nav>
      </div>

      <div className="container">
        <div className="dashboard-header text-center">
          <p>
            View the performance metrics of your key profile from the reporting.
          </p>
        </div>

        <div className="metrics">
          <div className="card">
            <div className="card-title">Engagement</div>
            <div className="card-body">
              <span className="metric-value">2,218</span>
              <span className="metric-change negative">-3.5%</span>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Profile Views</div>
            <div className="card-body">
              <span className="metric-value">1,630</span>
              <span className="metric-change negative">-4%</span>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Impressions</div>
            <div className="card-body">
              <span className="metric-value">1,914</span>
              <span className="metric-change">+1.5%</span>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Account Reach</div>
            <div className="card-body">
              <span className="metric-value">2,104</span>
              <span className="metric-change">+5%</span>
            </div>
          </div>
        </div>

        {/* Account Statistics and Post Activity Side by Side */}
        <div className="statistics-activity">
          {/* Account Statistic */}
          <div className="account-statistic">
            <div>
              <BarGraph />
            </div>
          </div>

          {/* Post Activity */}
          <div className="post-activity">
            <h2>Post Activity</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Impressions</th>
                  <th>Rates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Post Photos</td>
                  <td>981</td>
                  <td className="positive">+4.5%</td>
                </tr>
                <tr>
                  <td>Branding Guideline</td>
                  <td>290</td>
                  <td className="positive">+23%</td>
                </tr>
                <tr>
                  <td>Logo Branding</td>
                  <td>572</td>
                  <td className="positive">+6%</td>
                </tr>
                <tr>
                  <td>Mobile Apps</td>
                  <td>67</td>
                  <td className="negative">-2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaDashboard;