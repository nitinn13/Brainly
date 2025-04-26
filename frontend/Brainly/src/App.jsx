import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import Allposts from './pages/Allposts';
import Myposts from './pages/Myposts';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />

        {/* Protected routes */}
        <Route
          path="/allposts"
          element={
            <ProtectedRoute>
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
                <Navbar />
                <Sidebar />
                <main className="ml-64 pt-16 min-h-screen">
                  <div className="p-8">
                    <Allposts />
                  </div>
                </main>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/myposts"
          element={
            <ProtectedRoute>
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
                <Navbar />
                <Sidebar />
                <main className="ml-64 pt-16 min-h-screen">
                  <div className="p-8">
                    <Myposts />
                  </div>
                </main>
              </div>
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
