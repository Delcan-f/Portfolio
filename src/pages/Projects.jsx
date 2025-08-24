import { Link } from "react-router-dom";
import "../styles/Projects.css";

const projectList = [
    {
        id: 1,
        title: "Project One",
        description: "Project 1 description."
    },
    {
        id: 2,
        title: "Project Two",
        description: "Project 2 description."
    },
    {
        id: 3,
        title: "Project Three",
        description: "Project 3 description."
    }
];

function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project) => (
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

export default Projects;

