import React from "react";
import { useCaseContext } from "../contexts/CaseContext";
import styles from "./css/Cases.module.css";

const Cases = () => {
  const { cases } = useCaseContext();

  return (
    <div className="cases">
      <div className="headline">
        <h1>cases</h1>
        <h2>cases</h2>
      </div>

      <div className={styles.caseWrapper}>
        {cases &&
          cases.map((item, i) => {
            return (
              <div key={i} className={styles.projectContainer}>
                <div className={styles.descriptionContainer}>
                  <div className={styles.textContainer}>
                    <div className={styles.tags}>
                      {item.technologies.map((tag, i) => {
                        return <p key={i}>#{tag}</p>;
                      })}
                    </div>

                    <h2>{item.title}</h2>
                    <h3>{item.description}</h3>
                    <p>{item.body}</p>

                    <div className={styles.roles}>
                      {item.roles.map((role, i) => {
                        return <p key={i}>#{role}</p>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cases;
