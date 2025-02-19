import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaThumbsUp, FaUserFriends, FaRetweet, FaUserPlus } from "react-icons/fa";
import BarGraph from "./BarGraph";

const TwitterDashboard = () => {
  return (
    <div className="container mt-4">
      <div className="col d-flex justify-content-between">
        {/* Left Section (KPI Cards) */}
        <div className="col-md-4">
        <h1>Main's KPI's</h1>
          <div className="mb-4">
            <FaThumbsUp size={40} color="#007bff" />
            <h5>Total Likes</h5>
            <h2>45,543</h2>
            <p className="text-success">+5.63%</p>
          </div>
          <div className="mb-4">
            <FaUserFriends size={40} color="#007bff" />
            <h5>Followers</h5>
            <h2>28,653</h2>
            <p className="text-success">+45.12%</p>
          </div>
          <div className="mb-4">
            <FaRetweet size={40} color="#007bff" />
            <h5>Retweets</h5>
            <h2>12,642</h2>
            <p className="text-success">+1.86%</p>
          </div>
          <div>
            <FaUserPlus size={40} color="#007bff" />
            <h5>New Followers</h5>
            <h2>15,753</h2>
            <p className="text-success">+1.27%</p>
          </div>
        </div>

        {/* Right Section (Followers & Tweet Performance) */}
        <div className="col-md-8">
          <div className="mb-4">
            <h3>Followers</h3>
            <BarGraph/>
          </div>

          <div>
            <h3>Tweet Performance</h3>
            <table className="table table-bordered text-end">
              <thead>
                <tr>
                  <th>Tweet</th>
                  <th>Engagement</th>
                  <th>Retweets</th>
                  <th>Favorites</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tweet 1</td>
                  <td>23,653</td>
                  <td>9,432</td>
                  <td>10,400</td>
                </tr>
                <tr>
                  <td>Tweet 2</td>
                  <td>23,273</td>
                  <td>9,235</td>
                  <td>10,000</td>
                </tr>
                <tr>
                  <td>Tweet 3</td>
                  <td>22,367</td>
                  <td>8,215</td>
                  <td>9,500</td>
                </tr>
                <tr>
                  <td>Tweet 4</td>
                  <td>20,157</td>
                  <td>5,053</td>
                  <td>6,900</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterDashboard;