import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const adminToken = localStorage.getItem('adminToken');
      
      if (!adminToken) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:8081/api/v1/auth/admin/verify', {
          headers: {
            'Authorization': `Bearer ${adminToken}`,
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();
        if (data.status === 'success') {
          setIsVerified(true);
        } else {
          localStorage.removeItem('adminToken');
        }
      } catch (error) {
        console.error('Token verification failed:', error);
        localStorage.removeItem('adminToken');
      }
      
      setIsLoading(false);
    };

    verifyToken();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isVerified) {
    return <Navigate to="/admin-login" />;
  }

  return children;
};

export default AdminProtectedRoute;
