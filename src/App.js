import React from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
