import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api/api';

const CollegeRegister = () => {
  const [formData, setFormData] = useState({
    collegeName: '',
    collegeId: '',
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
        username: formData.collegeId,
        password: formData.password,
        role: 'college'
      };
      await API.post('/auth/register', payload);
      setSuccess(true);
      setTimeout(() => navigate('/college/login'), 2000);
    } catch (err) {
      setError('Registration failed');
    }
  };

  if (success) return <div style={{ textAlign: 'center', padding: '2rem' }}>Registration Successful! Redirecting...</div>;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9' }}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '0.5rem', width: '400px' }}>
        <h2>College Registration</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input name="collegeName" placeholder="College Name" onChange={handleChange} style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }} required />
          <input name="collegeId" placeholder="College ID" onChange={handleChange} style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }} required />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }} required />
          <button type="submit" style={{ width: '100%', padding: '0.5rem', background: '#2563eb', color: 'white', border: 'none', marginTop: '1rem' }}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default CollegeRegister;