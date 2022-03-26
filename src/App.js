import logo from "./logo.svg";
import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import RSVP from "./Components/RSVP";
import Header from "./Components/Header";
import FAQ from "./Components/FAQ";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage></HomePage>}></Route>
          <Route path="/RSVP" exact element={<RSVP></RSVP>}></Route>
          <Route path="/faq" exact element={<FAQ></FAQ>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
