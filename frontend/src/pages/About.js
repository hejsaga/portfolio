import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import styles from "./css/About.module.css";

const ABOUT = gql(`
  query GetAbout {
    abouts {
      data {
        attributes {
          title
          body
        }
      }
    }
  }
`);

const About = () => {
  const { data } = useQuery(ABOUT);
  const [about, setAbout] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    if (data) {
      let body = data.abouts.data[0].attributes.body;
      let title = data.abouts.data[0].attributes.title;
      setAbout(body);
      setTitle(title);
    }
  }, [data]);

  return (
    <div className="about">
      <div className="headline">
        <h1>about</h1>
        <h2>about</h2>
      </div>

      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default About;
