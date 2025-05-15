import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetails from './pages/CourseDetails';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/Users';
import AdminCourses from './pages/admin/Courses';
import AdminSettings from './pages/admin/Settings';
import TrendingPage from './pages/TrendingPage';
import TopRatedPage from './pages/TopRatedPage';
import FreePage from './pages/FreePage';
import CodingPage from './pages/CodingPage';
import SecurityPage from './pages/SecurityPage';
import AIPage from './pages/AIPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />
            <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}>
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="courses" element={<AdminCourses />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="app" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="courses" element={<CoursesPage />} />
              <Route path="course/:id" element={<CourseDetails />} />
              <Route path="trending" element={<TrendingPage />} />
              <Route path="top-rated" element={<TopRatedPage />} />
              <Route path="free-courses" element={<FreePage />} />
              <Route path="coding" element={<CodingPage />} />
              <Route path="security" element={<SecurityPage />} />
              <Route path="ai" element={<AIPage />} />
              <Route path="profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              <Route path="cart" element={<CartPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;