import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./sass/main.scss";
import Hero from "./components/Hero";
import NavBar from "./components/Header";
import CanvasDotsBg from "./components/bgCanvas";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import AllProjects from "./components/AllProjects"; // Import the AllProjects component

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <NavBar />
              <CanvasDotsBg />
              <About />
              <Projects />
              <ContactForm />
              <Footer />
            </>
          }
        />
        {/* You can add more components here as your application develops */}
        <Route
          path="/all-projects"
          element={
            <>
              <NavBar />
              <CanvasDotsBg />
              <AllProjects />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
