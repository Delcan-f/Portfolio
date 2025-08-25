import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProjectDetail.css";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="project-detail-page">
        <h1>Project Not Found</h1>
        <Link to="/projects" className="back-link">
          ⬅ Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <h1>{project.title}</h1>
      <section className="project-section">
        <h2>Overview</h2>
        <p>{project.fullDescription || project.description}</p>
      </section>

      {project.tech && (
        <section className="project-section">
          <h2>Tech Stack</h2>
          <div className="tech-stack">
            {project.tech.map((t, i) => (
              <span key={i} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        </section>
      )}

      {project.codeSnippets && (
        <section className="project-section">
          <h2>Code Snippets</h2>
          {project.codeSnippets.map((snippet, i) => (
            <pre key={i} className="code-block">
              <code>{snippet}</code>
            </pre>
          ))}
        </section>
      )}

      <section className="project-section links-section">
        {project.code && (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Full Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            Live Demo
          </a>
        )}
      </section>

      <Link to="/projects" className="back-link">
        ⬅ Back to Projects
      </Link>
    </div>
  );
}
