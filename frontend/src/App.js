import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import ProjectContextProvider from "./contexts/ProjectContext";
import CaseContextProvider from "./contexts/CaseContext";
import RouteComponent from "./components/RouteComponent";

// apollo client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://saga-swahn.herokuapp.com/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ProjectContextProvider>
          <CaseContextProvider>
            <RouteComponent />
          </CaseContextProvider>
        </ProjectContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
