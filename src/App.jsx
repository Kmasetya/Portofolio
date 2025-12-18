import { useState } from "react";
import Navbar from "./components/navbar";
import Layout from "./components/layout";
import Content from "./components/content";
import Profil from "./components/profil";
import Project from "./components/project";
import Contact from "./components/contact";
import "./App.css";

function App() {
  return (
    <div className="bg-black font-sans">
      <Navbar />

      {/* HOME */}
      <section
        id="home"
        className="relative min-h-screen bg-[#1E1E1E] overflow-hidden"
      >
        {/* CONTENT */}
        <div className="relative z-10">
          <Layout />
        </div>
      </section>

      <Content />

      <section id="about" className="relative overflow-hidden">
        <div className="relative z-10">
          <Profil />
        </div>
      </section>

      <section id="projects" className="pb-10 relative overflow-hidden">
        <div className="relative z-10">
          <Project />
        </div>
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
