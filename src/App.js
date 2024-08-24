import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Layout from "./Layout";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Public from "./components/Public/Public";
import Geyser from "./components/Geyser/Geyser";
import Vps from "./components/Vps/Vps";
import Pricing from "./pages/Pages/Pricing";
import Cgradients from "./components/Cgradients/Cgradients";

const MainContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <Cgradients />}
      {location.pathname === "/" && <Hero />}
      {location.pathname === "/" && <About />}
      {location.pathname === "/" && <Public />}
      {location.pathname === "/" && <Geyser />}
      {location.pathname === "/" && <Vps />}
      {location.pathname === "/pricing" && <Pricing />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContent />} />
          <Route path="pricing" element={<MainContent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
