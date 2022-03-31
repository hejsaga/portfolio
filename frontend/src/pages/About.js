import React from "react";
import styles from "./css/About.module.css";

const About = () => {
  return (
    <div className="about">
      <div className="headline">
        <h1>about</h1>
        <h2>about</h2>
      </div>

      <div className={styles.textContainer}>
        <h3>I build things on the internet.</h3>
        <p>
          For years I have been working in service, lately in the IT industry.
          I've acted as a bridge between many different teams and departments
          internally, managing facilities, events and being a front towards
          customers and suppliers externally. A frontend developer works
          similarly - being the bridge between the data and design, the UI
          towards the user. A person who tracks events and fires a variety of
          functions upon it. Someone who needs to be an excellent team player
          not only to their core team, but to all people involved. And this is
          where my journey began. From a person with strong soft skills
          developing internal services, to a motivated software developer.
        </p>

        <p>
          I am a creative frontend developer with origin in Dalarna, currently
          based in Malmö/Stockholm. For years I've studied our current web
          standards, and I'm very excited to be part of building the future of
          Internet.
        </p>

        <p>
          I'm passionate about translating visions into code. I have designed,
          developed and launched responsive web applications using a variety of
          modern technologies, and I'm happy to tell you more about it.
        </p>
      </div>
    </div>
  );
};

export default About;
