import React, { useState, useEffect } from 'react';

const TamperingAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Fetch alerts from API if available
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Tampering Alerts</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Alert ID</th>
            <th>Exam Code</th>
            <th>College</th>
            <th>Timestamp</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert, index) => (
            <tr key={index}>
              <td>{alert.id}</td>
              <td>{alert.examCode}</td>
              <td>{alert.college}</td>
              <td>{alert.timestamp}</td>
              <td>{alert.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TamperingAlerts;