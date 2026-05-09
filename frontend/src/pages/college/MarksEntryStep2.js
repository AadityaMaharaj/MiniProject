import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import API from '../../api/api';

const MarksEntryStep2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { metadata } = location.state || {};
  const [students, setStudents] = useState([{ roll_no: '', marks: '' }]);
  const [loading, setLoading] = useState(false);

  const addStudent = () => {
    setStudents([...students, { roll_no: '', marks: '' }]);
  };

  const updateStudent = (index, field, value) => {
    const newStudents = [...students];
    newStudents[index][field] = value;
    setStudents(newStudents);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const payload = {
        exam_id: `${metadata.academicYear}-${metadata.collegeCode}-${metadata.courseType}-${metadata.semester}-${metadata.branch}-${metadata.subjectCode}`,
        metadata,
        student_data: students
      };
      await API.post('/exam/secure', payload);
      alert('Data submitted successfully');
      navigate('/college/dashboard');
    } catch (err) {
      alert('Submission failed');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Marks Entry - Step 2: Student Marks</h1>
      {students.map((student, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <input
            placeholder="Roll No"
            value={student.roll_no}
            onChange={(e) => updateStudent(index, 'roll_no', e.target.value)}
          />
          <input
            placeholder="Marks"
            type="number"
            value={student.marks}
            onChange={(e) => updateStudent(index, 'marks', e.target.value)}
          />
        </div>
      ))}
      <button onClick={addStudent}>Add Student</button>
      <button onClick={handleSubmit} disabled={loading} style={{ marginLeft: '1rem' }}>
        {loading ? 'Submitting...' : 'Submit Data'}
      </button>
    </div>
  );
};

export default MarksEntryStep2;