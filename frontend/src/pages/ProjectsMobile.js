import React from "react";
import styles from "./css/ProjectsMobile.module.css";

const ProjectsMobile = ({ projects, goToProject }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {projects &&
          projects.map((project, i) => {
            return (
              <div
                key={i}
                onClick={() => goToProject(project.id)}
                className={styles.project}
              >
                <div className={styles.imageContainer}>
                  {project.image && (
                    <img key={i} src={project.image} alt="project-icon"></img>
                  )}
                </div>
                <div className={styles.text}>
                  <div className={styles.tags}>
                    {project.tags.map((tag, i) => {
                      return <p key={i}>#{tag}</p>;
                    })}
                  </div>
                  <h2 className={styles.title}>{project.title}</h2>
                  <h3 className={styles.description}>{project.description}</h3>
                  <p className={styles.description}>Read more...</p>
                  <div className={styles.roles}>
                    {project.roles.map((tag, i) => {
                      return <p key={i}>#{tag}</p>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectsMobile;
