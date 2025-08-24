import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/Projects.css";
import "../styles/App.css";
import projects from "../data/projects";

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return (
            <div className="projects-page">
                <h1>Project Not Found</h1>
                <Link to="/projects">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="projects-page">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {project.code && (
                <a href={project.code} target="_blank" rel="noopener noreferrer">
                    View Code on GitHub
                </a>
            )}
            <br />
            <Link to="/projects">Back to Projects</Link>
        </div>
    );
}
