import { useState } from "react";
import Navbar from "./components/navbar";
import Layout from "./components/layout";
import Content from "./components/content";
import Profil from "./components/profil";
import Project from "./components/project";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black font-sans">
        {/* Navbar */}
        <Navbar />

        {/* HOME SECTION */}
        <section id="home" className="bg-[#1E1E1E]">
          <Layout />
        </section>
        <Content />

        {/* ABOUT SECTION */}
        <section id="about">
          <Profil />
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <Project />
        </section>
      </div>
    </>
  );
}

export default App;
