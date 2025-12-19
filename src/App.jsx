import { useState } from "react";
import Navbar from "./components/user/navbar";
import Layout from "./components/user/layout";
import Content from "./components/user/content";
import Profil from "./components/user/profil";
import Project from "./components/user/project";
import Contact from "./components/user/contact";
import { MovingBorderDemo } from "./components/MovingBorderDemo";
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

      <section id="projects" className="pb-20 relative overflow-hidden">
        <div className="relative z-10">
          <Project />
          <MovingBorderDemo />
        </div>
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
