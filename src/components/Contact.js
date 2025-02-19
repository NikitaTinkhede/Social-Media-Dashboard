import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/ContactForm.css'

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#0d1117', color: '#ffffff' }}>
      <div className="card p-4 shadow-lg border-0 neon-card" style={{ backgroundColor: '#161b22', width: '100%', maxWidth: '500px', borderRadius: '12px' }}>
        <h2 className="text-center mb-4 text-info">Contact Us</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-light">Your Name</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-0 shadow-sm neon-input"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">Your Email</label>
            <input
              type="email"
              className="form-control bg-dark text-white border-0 shadow-sm neon-input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-light">Your Message</label>
            <textarea
              className="form-control bg-dark text-white border-0 shadow-sm neon-input"
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-info w-100 fw-bold shadow neon-button">Send</button>
        </form>
      </div>
    </div>
  );
}
