import React, { useEffect, useState } from "react";
import { useProjectContext } from "../contexts/ProjectContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ScrollDown from "../components/ScrollDown";
import UseStyling from "../services/useStyling";
import styles from "./css/ProjectPage.module.css";

const ProjectPage = () => {
  const { projects } = useProjectContext();
  let { id } = useParams();
  const [project, setProject] = useState();
  const useMobileStyling = UseStyling();

  const getProject = (id) => {
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
      getProject(id);
    }
  }, [id, projects]);

  return (
    <>
      {project && (
        <>
          <div className="headline">
            <h1>project .0{project[0].number}</h1>
            <h2>
              {useMobileStyling ? "proj" : "project"} .0{project[0].number}
            </h2>
          </div>

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
                <p className={styles.body}>
                  {project[0].body}{" "}
                  {project[0].link ? (
                    <a className="projectLink" href={project[0].link}>
                      here.
                    </a>
                  ) : (
                    ""
                  )}
                </p>

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

            {useMobileStyling ? "" : <ScrollDown />}
          </div>

          <div className="headline">
            <h1>all projects</h1>
            <h2>{useMobileStyling ? "" : "all"} projects</h2>
          </div>

          <div className={styles.projectListContainer}>
            {projects &&
              projects.map((listItem) => {
                return (
                  <Link
                    to={{ pathname: `/projects/project/${listItem.id}` }}
                    key={listItem.number}
                    className={styles.projectItem}
                    style={listItem.id === id ? { marginLeft: "2em" } : {}}
                  >
                    <p className={styles.projectItemId}>.0{listItem.number}</p>

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
