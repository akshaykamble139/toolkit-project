import React from 'react';
import { useDocumentTitle } from './useDocumentTitle';
import '../resources/styles/ErrorPage.css';

const ErrorPage = () => {
  useDocumentTitle('404 - Page Not Found');

  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <p>You have typed an incorrect URL path.</p>
      </div>
    </div>
  );
};

export default ErrorPage;