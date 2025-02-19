import React from "react";
import './styles/Linkedin.css';
import LinkedinChart from "./LinkedinChart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Linkedin = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
        <h1>LinkedIn</h1>

        <div className="header-info">
          <span className="language">English</span>
          <span className="time">18:08</span>
        </div>
      </header>

      <div className="main-grid">
        <div className="stats-section">
          <h2 style={{color:'black'}}>Company Page Performance</h2>
          <div className="metrics-grid">
            <MetricCard title="Followers" value="212.7k" change="+150%" />
            <MetricCard title="Impressions" value="120.5k" change="+80%" />
            <MetricCard title="Engagement Rate" value="4.11%" />
            <MetricCard title="New Connections" value="1,600" />
            <MetricCard title="Content Likes" value="39k" />
            <MetricCard title="Comments" value="217" />
          </div>
          <div className="my-chart">
            <LinkedinChart />
          </div>
        </div>

        <div className="right-column">
          <div className="traffic-card">
            <h3>Website Traffic from LinkedIn (This Month)</h3>
            <div className="traffic-content">
              <span className="sessions">10K sessions</span>
              <span className="change">33% vs last month</span>
            </div>
          </div>

          <div className="revenue-card">
            <h3>Leads by Campaign (This Month)</h3>
            <div className="revenue-list">
              <CampaignItem name="Tech Conference" value="$7.5K" />
              <CampaignItem name="Webinar Series" value="$4.6K" />
              <CampaignItem name="Product Launch" value="$3.4K" />
              <CampaignItem name="HR Initiative" value="$1K" />
              <CampaignItem name="Brand Awareness" value="$0.6K" />
            </div>
          </div>

          <div className="live-img">
            <img
              className="img2"
              src="https://agencyanalytics.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdfcvkz6j859j%2F5sLEvblDG0vr5rKZ26kD4N%2F257c43d2ce8ff794bef5941feff3faf0%2FLinkedIn-Dashboard-Organic-VS-Paid-New-Followers-Example.png&w=3840&q=75"
              alt="LinkedIn Dashboard"
            />
          </div>
        </div>
      </div>

      <div className="timeline">
        <span>6Feb</span>
        <span>13Feb</span>
        <span>20Feb</span>
        <span>27Feb</span>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, change }) => (
  <div className="metric-card">
    <h4>{title}</h4>
    <div className="metric-value">
      <span>{value}</span>
      {change && <span className="change">{change}</span>}
    </div>
  </div>
);

const CampaignItem = ({ name, value }) => (
  <div className="campaign-item">
    <span>{name}</span>
    <span>{value}</span>
  </div>
);

export default Linkedin;