import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import transformCaseData from "../services/transformCaseData";

const CaseContext = createContext();

const useCaseContext = () => {
  return useContext(CaseContext);
};

const CASES = gql(`
query GetCases {
  cases {
    data {
      id
      attributes {
        title
        description
        body
        link
        image {
          data {
            attributes {
              url
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
        technologies {
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
`);

const CaseContextProvider = ({ children }) => {
  const { data } = useQuery(CASES);
  const [cases, setCases] = useState();

  useEffect(() => {
    if (data) {
      setCases(transformCaseData(data));
    }
  }, [data]);

  const contextValues = { cases };

  return (
    <CaseContext.Provider value={contextValues}>
      {children}
    </CaseContext.Provider>
  );
};

export { useCaseContext, CaseContextProvider as default };
