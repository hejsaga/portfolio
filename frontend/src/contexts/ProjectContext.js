import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import transformData from "../services/transformData";

const ProjectContext = createContext();

const useProjectContext = () => {
  return useContext(ProjectContext);
};

const PROJECTS = gql`
  query GetProjects {
    projects {
      data {
        id
        attributes {
          title
          description
          body
          number
          image {
            data {
              attributes {
                url
              }
            }
          }
          technologies {
            data {
              attributes {
                title
              }
            }
          }
          positions {
            data {
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;

const ProjectContextProvider = ({ children }) => {
  const { data } = useQuery(PROJECTS);
  const [projects, setProjects] = useState();

  useEffect(() => {
    if (data) {
      setProjects(transformData(data));
    }
  }, [data]);

  const contextValues = { projects };

  return (
    <ProjectContext.Provider value={contextValues}>
      {children}
    </ProjectContext.Provider>
  );
};

export { useProjectContext, ProjectContextProvider as default };
