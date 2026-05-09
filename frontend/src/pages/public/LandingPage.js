import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: '#1e293b', marginBottom: '1rem' }}>UniChain</h1>
      <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px' }}>
        Blockchain-Assisted Examination Data Integrity Framework for secure and tamper-proof semester-wise examination records.
      </p>
      <div>
        <Link to="/college/login" style={{ margin: '0 1rem', padding: '0.5rem 1rem', background: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: '0.5rem' }}>College Login</Link>
        <Link to="/university/login" style={{ margin: '0 1rem', padding: '0.5rem 1rem', background: '#10b981', color: 'white', textDecoration: 'none', borderRadius: '0.5rem' }}>University Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;