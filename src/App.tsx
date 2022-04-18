import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./pages/data";
import { appState } from "./helpers/const/interfaces";
import useUser from "./components/hooks/useUser";

export default function MyRoutes() {
  const { isLogged } = useUser()

  return (
    <Router>
      <Routes>
        {isLogged
          ? routes.auth.map((route: appState["itemRoute"], i: number) => (
              <Route key={i} path={route.path} element={<route.element />} />
            ))
          : routes.root.map((route: appState["itemRoute"], i: number) => (
              <Route key={i} path={route.path} element={<route.element />} />
            ))}
      </Routes>
    </Router>
  );
}
