import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectContextProvider from "./contexts/ProjectContext";
import CaseContextProvider from "./contexts/CaseContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Cases from "./pages/Cases";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";
import UseStyling from "./services/useStyling";

// apollo client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://saga-swahn.herokuapp.com/graphql",
});

function App() {
  const useMobileStyling = UseStyling();

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ProjectContextProvider>
          <CaseContextProvider>
            <div className="App">
              {useMobileStyling ? <MobileNavbar /> : <Navbar />}

              <div className={useMobileStyling ? "pagemargin" : "pagewrapper"}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route
                    path="/projects/project/:id"
                    element={<ProjectPage />}
                  />
                  <Route path="/cases" element={<Cases />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </div>
            </div>
          </CaseContextProvider>
        </ProjectContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
