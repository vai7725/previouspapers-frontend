import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About";
import Papers from "./components/Papers";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/api/papers/:university" element={<Papers />} />
      </Routes>
    </Router>
  );
}

export default App;
