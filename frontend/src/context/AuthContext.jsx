import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const response = await fetch(`${API_URL}/auth/me`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            credentials: 'include'
          });
          const data = await response.json();
          if (data.success) {
            setUser(data.data);
          } else {
            localStorage.removeItem('authToken');
            setUser(null);
          }
        } catch (error) {
          console.error('Auth validation error:', error);
          localStorage.removeItem('authToken');
          setUser(null);
        }
      }
      setLoading(false);
    };
    validateToken();
  }, []);

  const API_URL = 'http://localhost:8081/api/v1';

  const makeAuthRequest = async (endpoint, method = 'GET', body = null, isAdminRequest = false) => {
    try {
      const headers = {
        'Content-Type': 'application/json'
      };

      const token = localStorage.getItem('authToken');
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const config = {
        method,
        headers,
        credentials: 'include'
      };

      if (body) {
        config.body = JSON.stringify(body);
      }

      console.log(`Making ${method} request to ${endpoint}:`, { config });
      const response = await fetch(`${API_URL}${endpoint}`, config);
      console.log('Response status:', response.status);

      const data = await response.json();
      console.log('Response data:', data);

      if (response.status === 401 && data.message === 'Invalid token! Please log in again.') {
        // Token is invalid or expired
        localStorage.removeItem('authToken');
        setUser(null);
        throw new Error('Session expired. Please log in again.');
      }

      return data;
    } catch (error) {
      console.error('Request error:', error);
      throw error;
    }
  };

  const login = async (email, password, isAdmin = false) => {
    try {
      console.log('Attempting login:', { email, isAdmin });
      
      const data = await makeAuthRequest('/auth/login', 'POST', { email, password, isAdmin });

      if (data.status === 'success') {
        // Store token and user data
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userData', JSON.stringify(data.data.user));
        setUser(data.data.user);
        
        // Verify token immediately
        try {
          await makeAuthRequest('/auth/verify', 'GET');
          console.log('Token verified successfully');
          return { success: true };
        } catch (verifyError) {
          console.error('Token verification failed:', verifyError);
          localStorage.removeItem('authToken');
          localStorage.removeItem('userData');
          setUser(null);
          return { success: false, error: 'Authentication failed. Please try again.' };
        }
      } else {
        console.error('Login failed:', data.message);
        return { success: false, error: data.message || 'Login failed. Please try again.' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to connect to server. Please check if the server is running.'
      };
    }
  };

  const signup = async (name, email, password) => {
    try {
      const data = await makeAuthRequest('/auth/register', 'POST', { name, email, password });

      if (data.status === 'success') {
        localStorage.setItem('authToken', data.token);
        setUser(data.data.user);
        return { success: true };
      } else {
        const errorMessage = data.message || 
          (data.error && data.error.message) || 
          'Failed to create account';
        console.error('Signup error:', errorMessage);
        return { success: false, error: errorMessage };
      }
    } catch (error) {
      console.error('Network error:', error);
      return { 
        success: false, 
        error: 'Failed to connect to server. Please check if the server is running.'
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
