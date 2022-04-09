import React from "react";
import { Routes, Route } from "react-router-dom";
import { useProjectContext } from "../contexts/ProjectContext";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Cases from "../pages/Cases";
import About from "../pages/About";
import ProjectPage from "../pages/ProjectPage";
import UseStyling from "../services/useStyling";
import LoadingPage from "../pages/LoadingPage";

const RouteComponent = () => {
  const useMobileStyling = UseStyling();
  const { projects } = useProjectContext();

  if (!projects) {
    return <LoadingPage />;
  }

  return (
    <div className="App">
      {useMobileStyling ? <MobileNavbar /> : <Navbar />}

      <div className={useMobileStyling ? "pagemargin" : "pagewrapper"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/project/:id" element={<ProjectPage />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default RouteComponent;
