import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      // Check if the user is authenticated (e.g., by checking the presence of the token in localStorage)
      const isAuthenticated = !!localStorage.getItem('authToken');

      // If not authenticated, redirect to the login page
      if (!isAuthenticated) {
        navigate('/components/pages/Login');
      }
    }, [navigate]);

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default withAuth;
