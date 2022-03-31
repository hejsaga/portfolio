import React, { useState } from "react";
import { useProjectContext } from "../contexts/ProjectContext";
import { useNavigate } from "react-router-dom";
import styles from "./css/Projects.module.css";

const Projects = () => {
  const navigate = useNavigate();
  const { projects } = useProjectContext();
  const [hoveredProject, setHoveredProject] = useState();
  const currentURL = window.location.href;

  const goToProject = (id) => {
    if (currentURL.includes("projects")) {
      navigate(`project/${id}`);
    } else {
      navigate(`projects/project/${id}`);
    }
  };

  return (
    <div className="projects">
      <div className="headline">
        <h1>projects</h1>
        <h2>projects</h2>
      </div>

      <div className={styles.projectContainer}>
        {hoveredProject && (
          <div className={styles.hoverText}>
            <div className={styles.tags}>
              {hoveredProject.tags.map((tag, i) => {
                return <p key={i}>#{tag}</p>;
              })}
            </div>

            <p className={styles.title}>{hoveredProject.title}</p>
            <p className={styles.description}>{hoveredProject.description}</p>

            <div className={styles.roles}>
              {hoveredProject.roles.map((role, i) => {
                return <p key={i}>#{role}</p>;
              })}
            </div>
          </div>
        )}

        <div className={styles.container}>
          <div className={styles.grid}>
            {projects &&
              projects.map((project, i) => {
                return (
                  <div key={i} onClick={() => goToProject(project.id)}>
                    <div
                      className={styles.imageContainer}
                      onMouseEnter={() => setHoveredProject(project)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      {project.image && (
                        <img
                          key={i}
                          src={project.image}
                          alt="project-icon"
                        ></img>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
