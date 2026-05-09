import React from 'react';
import { useNavigate } from 'react-router-dom';

const UniversityDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>University Dashboard</h1>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <button onClick={() => navigate('/university/verification')} style={{ padding: '1rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '0.5rem' }}>
          Verification Page
        </button>
        <button onClick={() => navigate('/university/tampering-alerts')} style={{ padding: '1rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '0.5rem' }}>
          Tampering Alerts
        </button>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h2>Overview</h2>
        <p>Total Submissions: 0</p>
        <p>Verified Records: 0</p>
        <p>Tampered Records: 0</p>
      </div>
    </div>
  );
};

export default UniversityDashboard;