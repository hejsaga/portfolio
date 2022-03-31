import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProjectContext } from "../contexts/ProjectContext";
import styles from "./css/ProjectPage.module.css";
import { Link } from "react-router-dom";
import ScrollDown from "../components/ScrollDown";

const ProjectPage = () => {
  const { projects } = useProjectContext();
  let { id } = useParams();
  const [project, setProject] = useState();

  const getProject = () => {
    if (projects) {
      setProject(
        projects.filter((project) => {
          return project.id === id;
        })
      );
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (id) {
      getProject();
    }
  }, [id, projects]);

  return (
    <>
      <div className="headline">
        <h1>project .0{id}</h1>
        <h2>project .0{id}</h2>
      </div>

      {project && (
        <>
          <div className={styles.projectContainer}>
            <div className={styles.descriptionContainer}>
              <div className={styles.textContainer}>
                <div className={styles.tags}>
                  {project[0].tags.map((tag, i) => {
                    return <p key={i}>#{tag}</p>;
                  })}
                </div>

                <h2>{project[0].title}</h2>
                <h3>{project[0].description}</h3>
                <p>{project[0].body}</p>

                <div className={styles.roles}>
                  {project[0].roles.map((role, i) => {
                    return <p key={i}>#{role}</p>;
                  })}
                </div>

                <div className={styles.imageContainer}>
                  <img src={project[0].image} alt="project-image"></img>
                </div>
              </div>
            </div>

            <ScrollDown />
          </div>

          <div className="headline">
            <h1>all projects</h1>
            <h2>all projects</h2>
          </div>

          <div className={styles.projectListContainer}>
            {projects &&
              projects.map((listItem, i) => {
                return (
                  <Link
                    to={{ pathname: `/projects/project/${listItem.id}` }}
                    key={i}
                    className={styles.projectItem}
                    style={listItem.id === id ? { marginLeft: "2em" } : {}}
                  >
                    <p className={styles.projectItemId}>.0{listItem.id}</p>

                    <p
                      className={styles.projectItemTitle}
                      style={
                        listItem.id === id ? { color: "rgb(78, 209, 232)" } : {}
                      }
                    >
                      {listItem.title}
                    </p>
                  </Link>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

export default ProjectPage;
