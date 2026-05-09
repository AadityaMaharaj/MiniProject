import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MarksEntryStep1 = () => {
  const [metadata, setMetadata] = useState({
    academicYear: '',
    collegeCode: '',
    collegeName: '',
    courseType: '',
    semester: '',
    branch: '',
    subjectCode: '',
    subjectName: '',
    examinationDate: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMetadata({ ...metadata, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    navigate('/college/marks-entry-2', { state: { metadata } });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Marks Entry - Step 1: Metadata</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
        <input name="academicYear" placeholder="Academic Year" onChange={handleChange} required />
        <input name="collegeCode" placeholder="College Code" onChange={handleChange} required />
        <input name="collegeName" placeholder="College Name" onChange={handleChange} required />
        <select name="courseType" onChange={handleChange} required>
          <option value="">Course Type</option>
          <option value="UG">UG</option>
          <option value="PG">PG</option>
        </select>
        <input name="semester" placeholder="Semester" onChange={handleChange} required />
        <input name="branch" placeholder="Branch" onChange={handleChange} required />
        <input name="subjectCode" placeholder="Subject Code" onChange={handleChange} required />
        <input name="subjectName" placeholder="Subject Name" onChange={handleChange} required />
        <input name="examinationDate" type="date" onChange={handleChange} required />
        <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#3b82f6', color: 'white', border: 'none' }}>Next</button>
      </form>
    </div>
  );
};

export default MarksEntryStep1;