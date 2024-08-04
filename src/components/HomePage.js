import React from 'react';
import ProjectsTab from './ProjectsTab';
import '../resources/styles/HomePage.css';
import { useDocumentTitle } from './useDocumentTitle';

const HomePage = () => {
  useDocumentTitle('My Portfolio - Home');

  return (
    <div className="home-page">
      <ProjectsTab />
      <div className="content">
        <p>Explore my projects using the tab on the left</p>
      </div>
    </div>
  );
};

export default HomePage;