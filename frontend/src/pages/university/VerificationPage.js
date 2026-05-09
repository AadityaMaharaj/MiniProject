import React, { useState } from 'react';
import API from '../../api/api';

const VerificationPage = () => {
  const [examId, setExamId] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    try {
      const res = await API.get(`/exam/verify/${examId}`);
      setResult(res.data);
    } catch (err) {
      setResult({ error: 'Verification failed' });
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Verification Page</h1>
      <input
        placeholder="Exam ID"
        value={examId}
        onChange={(e) => setExamId(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      />
      <button onClick={handleVerify} disabled={loading}>
        {loading ? 'Verifying...' : 'Verify'}
      </button>
      {result && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Result</h2>
          <p>Verified: {result.verified ? 'Yes' : 'No'}</p>
          <p>Message: {result.message}</p>
        </div>
      )}
    </div>
  );
};

export default VerificationPage;