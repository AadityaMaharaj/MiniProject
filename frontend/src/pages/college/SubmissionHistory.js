import React, { useState, useEffect } from 'react';
import API from '../../api/api';

const SubmissionHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch history from API if available
    // For now, placeholder
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Submission History</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Exam Code</th>
            <th>Subject</th>
            <th>Semester</th>
            <th>Status</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.examCode}</td>
              <td>{item.subject}</td>
              <td>{item.semester}</td>
              <td>{item.status}</td>
              <td>{item.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionHistory;