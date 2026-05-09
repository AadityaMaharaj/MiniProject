import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import API from '../../api/api';

const CollegeLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { username, password, role: 'college' });
      login(res.data.token);
      navigate('/college/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '0.5rem', width: '350px', textAlign: 'center' }}>
        <h2>COLLEGE LOGIN</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="College ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0', border: '2px solid #000' }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0', border: '2px solid #000' }}
            required
          />
          <button type="submit" style={{ width: '100%', padding: '0.5rem', background: '#000', color: '#fff', border: 'none', marginTop: '1rem' }}>LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default CollegeLogin;