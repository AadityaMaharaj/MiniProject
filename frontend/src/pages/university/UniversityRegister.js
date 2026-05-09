import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api/api';

const UniversityRegister = () => {
  const [formData, setFormData] = useState({
    universityName: '',
    adminName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const payload = {
        username: formData.email,
        password: formData.password,
        role: 'university'
      };
      await API.post('/auth/register', payload);
      setSuccess(true);
      setTimeout(() => navigate('/university/login'), 2000);
    } catch (err) {
      setError('Registration failed');
    }
  };

  if (success) return <div style={{ textAlign: 'center', padding: '2rem' }}>Registration Successful! Redirecting...</div>;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9' }}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '0.5rem', width: '400px' }}>
        <h2>University Registration</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input name="universityName" placeholder="University Name" onChange={handleChange} required />
          <input name="adminName" placeholder="Admin Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required />
          <button type="submit" style={{ width: '100%', padding: '0.5rem', background: '#10b981', color: 'white', border: 'none', marginTop: '1rem' }}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default UniversityRegister;