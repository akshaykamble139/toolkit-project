import React from 'react';
import { Link } from 'react-router-dom';
import '../resources/styles/ProjectsTab.css';

const ProjectsTab = () => {
  const projects = [
    { name: 'Todo List', path: '/todo' },
  ];

  return (
    <div className="projects-tab">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Link to={project.path}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsTab;