import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Import pages
import LandingPage from './pages/public/LandingPage';
import CollegeLogin from './pages/college/CollegeLogin';
import CollegeRegister from './pages/college/CollegeRegister';
import CollegeDashboard from './pages/college/CollegeDashboard';
import MarksEntryStep1 from './pages/college/MarksEntryStep1';
import MarksEntryStep2 from './pages/college/MarksEntryStep2';
import SubmissionHistory from './pages/college/SubmissionHistory';
import UniversityLogin from './pages/university/UniversityLogin';
import UniversityRegister from './pages/university/UniversityRegister';
import UniversityDashboard from './pages/university/UniversityDashboard';
import VerificationPage from './pages/university/VerificationPage';
import TamperingAlerts from './pages/university/TamperingAlerts';
import Unauthorized from './pages/shared/Unauthorized';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />

          {/* College Routes */}
          <Route path="/college/login" element={<CollegeLogin />} />
          <Route path="/college/register" element={<CollegeRegister />} />
          <Route path="/college/dashboard" element={<ProtectedRoute allowedRoles={['college']}><CollegeDashboard /></ProtectedRoute>} />
          <Route path="/college/marks-entry-1" element={<ProtectedRoute allowedRoles={['college']}><MarksEntryStep1 /></ProtectedRoute>} />
          <Route path="/college/marks-entry-2" element={<ProtectedRoute allowedRoles={['college']}><MarksEntryStep2 /></ProtectedRoute>} />
          <Route path="/college/submission-history" element={<ProtectedRoute allowedRoles={['college']}><SubmissionHistory /></ProtectedRoute>} />

          {/* University Routes */}
          <Route path="/university/login" element={<UniversityLogin />} />
          <Route path="/university/register" element={<UniversityRegister />} />
          <Route path="/university/dashboard" element={<ProtectedRoute allowedRoles={['university']}><UniversityDashboard /></ProtectedRoute>} />
          <Route path="/university/verification" element={<ProtectedRoute allowedRoles={['university']}><VerificationPage /></ProtectedRoute>} />
          <Route path="/university/tampering-alerts" element={<ProtectedRoute allowedRoles={['university']}><TamperingAlerts /></ProtectedRoute>} />

          {/* Shared Routes */}
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;