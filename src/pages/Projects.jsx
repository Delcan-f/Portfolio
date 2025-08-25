import { Link } from "react-router-dom";
import "../styles/Projects.css";
import projects from "../data/projects";

function Projects() {
  return (
    <div className="page projects-page">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            )}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech?.map((t, index) => (
                <span key={index} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
            <Link to={`/projects/${project.id}`} className="project-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
