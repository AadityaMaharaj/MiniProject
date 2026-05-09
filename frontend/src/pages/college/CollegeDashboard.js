import React from 'react';
import { useNavigate } from 'react-router-dom';

const CollegeDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>College Dashboard</h1>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <button onClick={() => navigate('/college/marks-entry-1')} style={{ padding: '1rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '0.5rem' }}>
          Upload Examination Data
        </button>
        <button onClick={() => navigate('/college/submission-history')} style={{ padding: '1rem', background: '#10b981', color: 'white', border: 'none', borderRadius: '0.5rem' }}>
          Submission History
        </button>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h2>Statistics</h2>
        <p>Total Submissions: 0</p>
        <p>Pending Verifications: 0</p>
      </div>
    </div>
  );
};

export default CollegeDashboard;