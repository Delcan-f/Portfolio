import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/Projects.css";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="projects-page">
        <h1>Project Not Found</h1>
        <Link to="/projects">⬅ Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="projects-page">
      {/* <h1>{project.title}</h1>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="project-detail-image"
        />
      )} */}
      <p>{project.description}</p>
      {project.tech && (
        <div className="tech-stack">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
      )}
      <div className="project-links">
        {project.code && (
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
      <Link to="/projects" className="back-link">
        ⬅ Back to Projects
      </Link>
    </div>
  );
}
