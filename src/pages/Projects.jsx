import React from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
import projects from "../data/projects"

export default function Projects() {
  return (
    <div className="page-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`} className="project-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// function Projects() {
//   return (
//     <div className="projects-page">
//       <h1>My Projects</h1>
//       <div className="projects-grid">
//         {projectList.map((project) => (
//           <div key={project.id} className="project-card">
//             <h2>{project.title}</h2>
//             <p>{project.description}</p>
//             <Link to={`/projects/${project.id}`} className="project-link">
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;

