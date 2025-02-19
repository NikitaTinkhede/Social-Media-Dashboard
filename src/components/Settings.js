import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './styles/SettingSection.css';

const Settings = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showAccounts, setShowAccounts] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [linkedAccounts, setLinkedAccounts] = useState({
    instagram: false,
    facebook: false,
    twitter: false,
    linkedin: false,
    youtube: false,
    naukri: false,
  });

  const [profilePic, setProfilePic] = useState('/images/instagram.png'); // Placeholder
  const [username, setUsername] = useState('YourUsername');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('Welcome to my profile!');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className='Setting-2'>
      <Container className="settings-container">
      <Card className="set mt-5">
        <h2 className="settings-title">⚙️ Social Media Dashboard</h2>

        {/* Edit Profile Section */}
        <Button className="custom-btn mt-3" onClick={() => setShowEditProfile(!showEditProfile)}>
          {showEditProfile ? '📝 Edit Profile' : '📝 My Account'}
        </Button>

        {showEditProfile && (
          <Card className="edit-profile-card mt-4">
            <Card.Body>
              <div className="profile-pic-container" onClick={() => document.getElementById('fileInput').click()}>
                <img src={profilePic} alt="Profile" className="profile-pic" />
                <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange} className="hidden-input" />
              </div>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control as="textarea" rows={3} value={bio} onChange={(e) => setBio(e.target.value)} />
                </Form.Group>

                <Button variant="primary" className="w-100">Save Changes</Button>
              </Form>
            </Card.Body>
          </Card>
        )}

        {/* Link Accounts Toggle */}
        <Button className="custom-btn mt-5" onClick={() => setShowAccounts(!showAccounts)}>
          {showAccounts ? 'Hide Linked Accounts' : '🔗 Link Accounts'}
        </Button>

        {showAccounts && (
          <Row className="social-accounts mt-4">
            {Object.keys(linkedAccounts).map((platform) => (
              <Col md={4} key={platform} className="mb-3">
                <Card className="social-card" onClick={() => window.open(`https://www.${platform}.com/login`, '_blank')}>
                  <Card.Img variant="top" src={`/images/${platform}.png`} alt={`${platform} logo`} className="social-logo" />
                  <Card.Body>
                    <Card.Title className="platform-name">
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        {/* Social Media Insights */}
        <Button className="custom-btn mt-5" onClick={() => setShowAnalytics(!showAnalytics)}>
          {showAnalytics ? 'Hide Social Media Insights' : '📊 Social Media Insights'}
        </Button>

        {showAnalytics && (
          <Row className="analytics-section mt-4">
            <Col md={6} className="mb-3">
              <Card className="analytics-card">
                <Card.Body>
                  <h5>📅 Content Scheduling</h5>
                  <p>Plan and automate your posts for consistent engagement.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="analytics-card">
                <Card.Body>
                  <h5>📈 Engagement Metrics</h5>
                  <p>Track interactions like likes, shares, and comments.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="analytics-card">
                <Card.Body>
                  <h5>👥 Audience Insights</h5>
                  <p>Analyze demographics and user preferences.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="analytics-card">
                <Card.Body>
                  <h5>📊 Reporting & Analytics</h5>
                  <p>Generate detailed reports to improve strategies.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

        {/* Logout Button */}
        <Button variant="danger" className="custom-btn mt-5">
          🚪 Logout
        </Button>
      </Card>
    </Container>
    </div>
  );
};

export default Settings;
