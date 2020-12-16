import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Route } from "react-router-dom";
import "./style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
