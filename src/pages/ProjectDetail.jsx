import React from "react";
import { useparams, Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import "../styles/ProjectDetail.css";

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="page-container">
                <h1>Project Nott Found</h1>
                <Link to="/projects">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="page-container">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a href={project.code} target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
            <br />
            <Link to="/projects">Back to Projects</Link>
        </div>
    );
}