import { useRoutes } from "react-router-dom";
import routes from "./routes";
import GlobalContextProvider from "./context/GlobalContext";
import Header from "./components/layouts/Header";

function App() {
  const content = useRoutes(routes);

  return (
    <GlobalContextProvider>
      <Header>{content}</Header>
    </GlobalContextProvider>
  );
}

export default App;
