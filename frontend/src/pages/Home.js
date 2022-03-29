import { useProjectContext } from "../contexts/ProjectContext";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import ScrollDown from "../components/ScrollDown";
import styles from "./css/Home.module.css";
import Cases from "./Cases";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import Footer from "../components/Footer";

const Home = () => {
  const { projects } = useProjectContext();
  const navigate = useNavigate();

  const goToContactPage = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className={styles.home}>
        <div className={styles.header}>
          <h1>
            Hi, <br></br>I am Saga Swahn.
          </h1>
          <Typewriter
            className="typewriter"
            options={{
              strings: [
                "<span>A frontend developer.</span>",
                "<span>A world wide web designer.</span>",
                "<span>The one who, um... creates what you see and interact with on the internet.</span>",
              ],
              autoStart: true,
              loop: true,
            }}
          />

          <button onClick={() => goToContactPage()} className={styles.contact}>
            Discover my secrets
          </button>
        </div>

        <div className={styles.scrollDownArrow}>
          <ScrollDown />
        </div>
      </div>

      <div className={styles.pages}>
        <Cases />
      </div>
      <div className={styles.pages}>
        <Projects />
      </div>
      <div className={styles.pages}>
        <About />
      </div>
      <Contact />

      <Footer />
    </>
  );
};

export default Home;
